import { GlassCard } from './glass-card'

interface WorryProps {
  worryText: string
  createdAt: string
}

export function Worry({ worryText, createdAt }: WorryProps) {
  return (
    <GlassCard className="text-white/80 flex flex-col justify-between p-5 xl:p-8">
      <p className="text-lg md:text-xl mb-2 break-words">{worryText}</p>
      <div className="flex justify-end items-center">
        <span className="text-sm text-white/20">{createdAt}</span>
      </div>
    </GlassCard>
  )
}
