'use client'

import { useState } from 'react'
import { useMutation } from 'convex/react'
import { api } from '../../../convex/_generated/api'
import { GlassCard } from '../glass-card'
import { GradientText } from '../gradient-text'

// Extract user-friendly message from Convex error
function parseConvexError(error: unknown): string {
  if (!(error instanceof Error)) {
    return 'Something went wrong. Please try again.'
  }

  const message = error.message

  // Convex errors have format: "[CONVEX ...] ... Uncaught Error: <message> at handler ..."
  const uncaughtMatch = message.match(/Uncaught Error: (.+?) at handler/)
  if (uncaughtMatch) {
    return uncaughtMatch[1].trim()
  }

  // Also try matching just "Error: <message>" pattern
  const errorMatch = message.match(/Error: (.+?)(?:\.|$)/)
  if (errorMatch) {
    return errorMatch[1].trim()
  }

  // Fallback to generic message
  return 'Something went wrong. Please try again.'
}

export function HomeShare() {
  const [worryText, setWorryText] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  const createWorry = useMutation(api.worries.createWorry)

  const textLimitLabel = `${worryText.length}/300 characters`

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    setWorryText(value)
    setError(null)
    setSuccessMessage(null)
    if (value.length > 300) {
      setError(`You are ${value.length - 300} characters over the limit.`)
    }
  }

  const shareWorry = async () => {
    setError(null)
    setSuccessMessage(null)

    if (worryText.trim() === '') {
      setError("Sometimes it's good to write something.")
      return
    }

    setIsSubmitting(true)
    try {
      await createWorry({ worry: worryText })
      setWorryText('')
      setSuccessMessage('Your worry has been shared. Feel lighter!')
    } catch (err) {
      setError(parseConvexError(err))
    } finally {
      setIsSubmitting(false)
    }
  }

  const isDisabled = !!error || worryText.length > 300 || isSubmitting

  return (
    <GlassCard className="w-full p-4">
      <GradientText className="text-xl md:text-3xl font-semibold">
        I am worried about...
      </GradientText>
      <div className="px-4">
        <textarea
          value={worryText}
          onChange={handleTextChange}
          className="w-full h-48 p-4 mt-4 text-lg md:text-xl bg-black/5 border text-white/90 placeholder-white/40 border-black/10 resize-none shadow-inner rounded-lg focus:outline-none"
          placeholder="life, job, tasks, routine, Instagram, etc."
        />
      </div>
      <div className="p-4">
        <p
          className={`${error ? 'text-red-400 font-semibold text-left' : successMessage ? 'text-green-400 font-semibold text-left' : 'text-white/60 text-right font-light'} w-full`}
        >
          {error ? error : successMessage ? successMessage : textLimitLabel}
        </p>
      </div>
      <div className="p-4">
        <button
          disabled={isDisabled}
          onClick={shareWorry}
          className="let-the-worries-go-btn px-7 py-3 text-white uppercase rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Letting go...' : 'Let the worries'}
          {!isSubmitting && <span className="italic pl-1">go</span>}
        </button>
      </div>
    </GlassCard>
  )
}
