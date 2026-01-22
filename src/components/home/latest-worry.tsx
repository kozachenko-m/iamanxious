"use client";

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { GlassCard } from "../glass-card";
import { GradientText } from "../gradient-text";

function formatDate(timestamp: number): string {
  return new Date(timestamp).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function LatestWorry() {
  const latestWorry = useQuery(api.worries.getLatestWorry);

  if (latestWorry === undefined) {
    return (
      <GlassCard className="text-white/80 p-3">
        <GradientText className="text-xl font-semibold">
          Last person was worried about:
        </GradientText>
        <p className="px-4 text-white/40 font-light text-lg animate-pulse">
          Loading...
        </p>
      </GlassCard>
    );
  }

  if (latestWorry === null) {
    return (
      <GlassCard className="text-white/80 p-3">
        <GradientText className="text-xl font-semibold">
          Be the first to share!
        </GradientText>
        <p className="px-4 text-white/60 font-light text-lg">
          No worries have been shared yet. You could be the first to let go.
        </p>
      </GlassCard>
    );
  }

  return (
    <GlassCard className="text-white/80 p-3">
      <GradientText className="text-xl font-semibold">
        Last person was worried about:
      </GradientText>
      <p className="px-4 text-white/80 font-light text-lg">
        {latestWorry.worry_text}
      </p>
      <p className="text-right w-full text-white/30 px-4">
        {formatDate(latestWorry.createdAt)}
      </p>
    </GlassCard>
  );
}
