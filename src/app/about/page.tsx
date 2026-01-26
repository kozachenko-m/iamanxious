import Image from 'next/image'
import { GlassCard } from '@/components/glass-card'
import { GradientText } from '@/components/gradient-text'

export default function AboutPage() {
  return (
    <section className="pt-8 flex flex-col gap-10 mb-20">
      <GlassCard className="p-2 xl:p-8">
        <GradientText className="text-4xl p-4 font-bold text-gray-300">
          About &quot;I Am Anxious&quot; project
        </GradientText>
        <div className="text-lg p-4 text-gray-100 flex flex-col gap-8 font-light">
          <p>
            <strong>I Am Anxious</strong> is a non-profit initiative to support
            individuals coping with anxiety. This platform provides a secure
            space for users to anonymously share their concerns and connect with
            others experiencing similar challenges.
          </p>
          <p>
            <strong>Our commitment to privacy is paramount:</strong>
            <br />
          </p>
          <ul className="list-disc pl-6">
            <li>
              <i>Complete Anonymity:</i> No personal information is required to
              participate.
            </li>
            <li>
              <i>No Tracking:</i> We do not use cookies or any tracking
              technologies.
            </li>
            <li>
              <i>Full transparency:</i> this is open source project, you can
              find the code on{' '}
              <a
                href="https://github.com/kozachenko-m/iamanxious"
                target="_blank"
                rel="noopener noreferrer"
                className="text-fuchsia-300 font-semibold"
              >
                GitHub
              </a>
            </li>
          </ul>

          <p>
            We strive to maintain and improve this platform as long as possible.
            While the future is uncertain, our dedication to this cause remains
            unwavering. If you have questions, suggestions, or wish to support
            our hosting efforts, please reach out to us at{' '}
            <a
              href="mailto:iamanxious@kozachenko.io"
              className="text-fuchsia-300 font-semibold"
            >
              iamanxious@kozachenko.io
            </a>
          </p>
          <p>
            <i>Monetization Policy:</i> Our financial strategies are still being
            defined. However, we pledge never to sell any user information.
          </p>
        </div>
      </GlassCard>
      <GlassCard className="p-2 xl:p-8">
        <GradientText className="text-4xl p-4 font-bold text-gray-300">
          Meet the Creators
        </GradientText>
        <div className="text-lg p-4 text-gray-100 flex flex-col gap-8 font-light">
          <p>
            Hello! We are Alla Medvedieva and Max Kozachenko, the minds behind
            the &quot;I Am Anxious&quot; project. We are from 🇺🇦Ukraine and know
            firsthand the importance of mental health support.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-screen-md mx-auto w-full">
            <GlassCard className="flex flex-col gap-5 p-5 w-full">
              <div className="w-full flex items-center justify-center">
                <Image
                  src="/max.png"
                  alt=""
                  className="h-52 w-auto"
                  width={200}
                  height={208}
                />
              </div>
              <div>
                <p className="font-semibold">Max Kozachenko</p>
                <p>CTO, Lead FullStack Developer</p>
              </div>
            </GlassCard>
            <GlassCard className="flex flex-col justify-between gap-5 p-5 pb-0">
              <div>
                <p className="font-semibold">Alla Medvedieva</p>
                <p>Design Lead, Senior UX/UI designer</p>
              </div>
              <div className="w-full flex items-center justify-end">
                <Image
                  src="/alla.png"
                  alt=""
                  className="h-52 w-auto"
                  width={200}
                  height={208}
                />
              </div>
            </GlassCard>
          </div>
          <p>
            <i>
              Looking for comprehensive design and development or just one of
              these services?
            </i>
            <br />
            <br />
            Whether you need Alla&apos;s design magic, Max&apos;s development
            expertise, or both, we are here to adapt to the specific
            requirements of your project. Please don&apos;t hesitate to contact
            us at{' '}
            <a
              href="mailto:projects@kozachenko.io"
              className="text-fuchsia-300 font-semibold"
            >
              projects@kozachenko.io
            </a>
          </p>
        </div>
      </GlassCard>
    </section>
  )
}
