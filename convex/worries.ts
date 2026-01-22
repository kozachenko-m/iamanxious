import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

// Validation helpers (ported from main branch)
const hasEmail = (text: string) => /\S+@\S+\.\S+/.test(text);
const hasLink = (text: string) =>
  /(\bhttps?:\/\/[^\s]+|\bwww\.[^\s]+|\b[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\b)/.test(
    text
  );
const hasPhoneNumber = (text: string) =>
  /(\+?[\d]{1,3}[\s-]?[\d]{1,4}[\s-]?([\d]{3}[\s-]?[\d]{4}|\d{6,7}|\d{3}[\s-]?[\d]{2}[\s-]?[\d]{2,3})|\(\d{2,3}\)\s*\d{3}[\s-]?[\d]{2,3})/.test(
    text
  );

const noForbiddenContent = (text: string) => {
  return !hasEmail(text) && !hasLink(text) && !hasPhoneNumber(text);
};

const isSafeContent = (text: string) => {
  const specialCharLimit = 0.2; // 20% of the text can be special characters
  const specialCharacters = /[^a-zA-Z0-9 \.,'"\?!;:\n]/g;
  const specialCharCount = (text.match(specialCharacters) || []).length;

  if (specialCharCount / text.length > specialCharLimit) {
    return false;
  }

  // Block specific ASCII pattern
  if (/8={3,}D/.test(text)) {
    return false;
  }

  return true;
};

// Get latest 12 worries sorted by creation date
export const getWorries = query({
  handler: async (ctx) => {
    const worries = await ctx.db
      .query("worries")
      .order("desc")
      .take(12);
    return worries;
  },
});

// Get single latest worry
export const getLatestWorry = query({
  handler: async (ctx) => {
    const worry = await ctx.db
      .query("worries")
      .order("desc")
      .first();
    return worry;
  },
});

// Create a new worry with validation
export const createWorry = mutation({
  args: {
    worry: v.string(),
  },
  handler: async (ctx, args) => {
    const worry = args.worry;

    // Validation
    if (worry.trim().length === 0) {
      throw new Error("Worry cannot be empty.");
    }

    if (worry.length > 300) {
      throw new Error(
        "Sorry, we cannot accept worries longer than 300 characters."
      );
    }

    if (!noForbiddenContent(worry)) {
      throw new Error("It's not safe to share personal information.");
    }

    if (!isSafeContent(worry)) {
      throw new Error(
        "We are not welcoming this kind of content. Please use less special characters."
      );
    }

    const now = Date.now();
    const newWorry = await ctx.db.insert("worries", {
      worry_text: worry,
      createdAt: now,
      updatedAt: now,
    });

    return newWorry;
  },
});