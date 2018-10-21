export const resolvers = {
  Board: {
    lists: async (parent: any, _1: any, ctx: any) =>
      await ctx.dataSources.trelloAPI.lists(parent.id),
  },

  List: {
    cards: async (parent: any, _1: any, ctx: any) =>
      await ctx.dataSources.trelloAPI.cards(parent.id),
  },

  Query: {
    boards: async (_0: any, _1: any, { dataSources }: any) => {
      return await dataSources.trelloAPI.boards()
    },
  },
}
