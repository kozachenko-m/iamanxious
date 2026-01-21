import { query } from "./_generated/server";

export const getWorries = query({
  handler: async (ctx) => {
    const worries = await ctx.db.query("worries").collect();
    return worries.sort((a, b) => b.createdAt - a.createdAt);
  },
});