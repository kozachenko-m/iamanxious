import { GradientText } from "@/components/gradient-text";
import { HomeTitle } from "@/components/home/title";
import { HomeShare } from "@/components/home/share";
import { HomeHow } from "@/components/home/how";
import { LatestWorry } from "@/components/home/latest-worry";

export default function Home() {
  return (
    <div className="mt-10 flex flex-col gap-10">
      <section>
        <div className="flex flex-col xl:flex-row gap-10">
          <HomeTitle />

          <div className="flex flex-col w-full min-h-full gap-4">
            <LatestWorry />
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
