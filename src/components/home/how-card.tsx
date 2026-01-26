import { ReactNode } from 'react'

interface HomeHowCardProps {
  children: ReactNode
}

export function HomeHowCard({ children }: HomeHowCardProps) {
  return (
    <div className="bg-white/5 w-full rounded-3xl whitespace-nowrap py-5 xl:py-8 drop-shadow-2xl shadow-2xl backdrop-blur-lg border border-white/10 flex flex-row justify-start text-lg md:text-xl font-semibold text-white">
      <div className="flex flex-row gap-6 items-center content-center mx-auto">
        {children}
      </div>
    </div>
  )
}
