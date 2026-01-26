'use client'

import { useQuery } from 'convex/react'
import { api } from '../../../convex/_generated/api'
import { GradientText } from '@/components/gradient-text'
import { Worry } from '@/components/worry'

function formatDate(timestamp: number): string {
  return new Date(timestamp).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export default function ReadPage() {
  const worries = useQuery(api.worries.getWorries)

  return (
    <section className="w-full pt-7">
      <GradientText className="text-3xl font-semibold lg:text-5xl p-0 mb-7">
        Recent worries
      </GradientText>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-3 w-full mt-3">
        {worries === undefined ? (
          <p className="text-white/60">Loading worries...</p>
        ) : worries.length === 0 ? (
          <p className="text-white/60">No worries shared yet. Be the first!</p>
        ) : (
          worries.map((worry) => (
            <Worry
              key={worry._id}
              worryText={worry.worry_text}
              createdAt={formatDate(worry.createdAt)}
            />
          ))
        )}
      </div>
    </section>
  )
}
