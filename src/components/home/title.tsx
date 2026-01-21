import Image from "next/image";
import Link from "next/link";
import { GlassCard } from "../glass-card";
import { GradientText } from "../gradient-text";

export function HomeTitle() {
  return (
    <GlassCard className="p-3 md:p-10 pb-10">
      <div className="flex flex-col justify-between h-full xl:pt-10">
        <GradientText>
          <h1 className="text-3xl md:text-6xl">
            <p className="font-semibold">&quot;I am Anxious&quot; –</p>
            <p className="font-thin">You&apos;re Not Alone</p>
          </h1>
        </GradientText>

        <p className="text-xl md:text-2xl font-light p-4 text-gray-400">
          A private heaven where you can unburden your anxieties{" "}
          <span className="italic">anonymously</span> and{" "}
          <span className="italic">safely</span>.
        </p>
        <div className="flex flex-row md:gap-10 flex-wrap px-4 gap-5 mt-5">
          <Link
            href="/about"
            className="flex flex-row gap-5 text-white font-semibold items-center justify-start"
          >
            <Image src="/info-icon.svg" alt="" width={24} height={24} />
            About
          </Link>
          <Link
            href="/read"
            className="flex flex-row gap-5 text-white font-semibold items-center justify-start"
          >
            <Image src="/chat-icon.svg" alt="" width={24} height={24} />
            Read others&apos; worries
          </Link>
        </div>
      </div>
    </GlassCard>
  );
}
