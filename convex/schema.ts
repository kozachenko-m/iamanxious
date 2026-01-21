import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  worries: defineTable({
    worry_text: v.string(),
    createdAt: v.number(),
    updatedAt: v.number(),
  }),
});