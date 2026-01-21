"use client";

import { useState } from "react";
import { GlassCard } from "../glass-card";
import { GradientText } from "../gradient-text";

export function HomeShare() {
  const [worryText, setWorryText] = useState("");
  const [error, setError] = useState<string | null>(null);

  const textLimitLabel = `${worryText.length}/300 characters`;

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setWorryText(value);
    setError(null);
    if (value.length > 300) {
      setError(`You are ${value.length - 300} characters over the limit.`);
    }
  };

  const shareWorry = async () => {
    setError(null);
    if (worryText.trim() === "") {
      setError("Sometimes it's good to write something.");
      return;
    }

    // Demo: just clear the text
    setWorryText("");
  };

  const isDisabled = !!error || worryText.length > 300;

  return (
    <GlassCard className="w-full p-4">
      <GradientText className="text-xl md:text-3xl font-semibold">
        I am worried about...
      </GradientText>
      <div className="px-4">
        <textarea
          value={worryText}
          onChange={handleTextChange}
          className="w-full h-48 p-4 mt-4 text-lg md:text-xl bg-black/5 border text-white/90 placeholder-white/40 border-black/10 resize-none shadow-inner rounded-lg focus:outline-none"
          placeholder="life, job, tasks, routine, Instagram, etc."
        />
      </div>
      <div className="p-4">
        <p
          className={`${error ? "text-red-400 font-semibold text-left" : "text-white/60 text-right font-light"} w-full`}
        >
          {error ? error : textLimitLabel}
        </p>
      </div>
      <div className="p-4">
        <button
          disabled={isDisabled}
          onClick={shareWorry}
          className="let-the-worries-go-btn px-7 py-3 text-white uppercase rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Let the worries
          <span className="italic pl-1">go</span>
        </button>
      </div>
    </GlassCard>
  );
}
