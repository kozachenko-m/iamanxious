import { GradientText } from "@/components/gradient-text";
import { Worry } from "@/components/worry";

// Demo data
const demoWorries = [
  { id: "1", worryText: "Demo string", createdAt: "Demo string" },
  { id: "2", worryText: "Demo string", createdAt: "Demo string" },
  { id: "3", worryText: "Demo string", createdAt: "Demo string" },
  { id: "4", worryText: "Demo string", createdAt: "Demo string" },
  { id: "5", worryText: "Demo string", createdAt: "Demo string" },
  { id: "6", worryText: "Demo string", createdAt: "Demo string" },
];

export default function ReadPage() {
  return (
    <section className="w-full pt-7">
      <GradientText className="text-3xl font-semibold lg:text-5xl p-0 mb-7">
        Recent worries
      </GradientText>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-3 w-full mt-3">
        {demoWorries.map((worry) => (
          <Worry
            key={worry.id}
            worryText={worry.worryText}
            createdAt={worry.createdAt}
          />
        ))}
      </div>
    </section>
  );
}
