import Image from 'next/image'
import { GlassCard } from '../glass-card'
import { GradientText } from '../gradient-text'
import { HomeHowCard } from './how-card'

export function HomeHow() {
  return (
    <GlassCard className="p-3 pb-10 md:p-10">
      <GradientText className="text-4xl font-semibold">
        How it Works
      </GradientText>

      <p className="text-lg md:text-xl font-light px-4 text-gray-400">
        Everyone has moments of doubt and anxiety, but no one should have to
        face them alone. <br className="md:hidden" />
        &quot;I am Anxious&quot; provides a space where you can share your fears
        and worries without revealing your identity.
      </p>
      <div className="flex flex-col lg:flex-row gap-5 w-full px-4 mt-5">
        <HomeHowCard>
          <Image
            src="/worry-icon.svg"
            alt=""
            className="h-8 md:h-10 w-auto"
            width={40}
            height={40}
          />
          Share your worries
        </HomeHowCard>
        <HomeHowCard>
          <Image
            src="/chat-icon.svg"
            alt=""
            className="h-8 md:h-10 w-auto"
            width={40}
            height={40}
          />
          Read others&apos; worries
        </HomeHowCard>
        <HomeHowCard>
          <Image
            src="/happy-icon.svg"
            alt=""
            className="h-8 md:h-10 w-auto"
            width={40}
            height={40}
          />
          Feel better
        </HomeHowCard>
      </div>
    </GlassCard>
  )
}
