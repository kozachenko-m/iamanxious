import { GlassCard } from "@/components/glass-card";
import { GradientText } from "@/components/gradient-text";
import { HomeTitle } from "@/components/home/title";
import { HomeShare } from "@/components/home/share";
import { HomeHow } from "@/components/home/how";

export default function Home() {
  return (
    <div className="mt-10 flex flex-col gap-10">
      <section>
        <div className="flex flex-col xl:flex-row gap-10">
          <HomeTitle />

          <div className="flex flex-col w-full min-h-full gap-4">
            <GlassCard className="text-white/80 p-3">
              <GradientText className="text-xl font-semibold">
                Last person was worried about:
              </GradientText>
              <p className="px-4 text-white/80 font-light text-lg">
                Demo string
              </p>
              <p className="text-right w-full text-white/30 px-4">
                Demo string
              </p>
            </GlassCard>
            <HomeShare />
          </div>
        </div>
      </section>
      <section>
        <HomeHow />
      </section>
      <section className="mt-10">
        <GradientText className="w-full text-center text-3xl font-semibold">
          Let&apos;s navigate the{" "}
          <span className="italic">complexities of life</span> together,
          anonymously!
        </GradientText>
      </section>
    </div>
  );
}
