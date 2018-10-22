import { IBoardsQueryArgs } from "./typeDefts.types"

export const resolvers = {
  //   Board: {
  //     lists: async (parent: any, _1: any, ctx: any) =>
  //       await ctx.dataSources.trelloAPI.lists(parent.id),
  //   },

  //   List: {
  //     cards: async (parent: any, _1: any, ctx: any) =>
  //       await ctx.dataSources.trelloAPI.cards(parent.id),
  //   },

  Query: {
    boards: async (_0: any, args: IBoardsQueryArgs, { dataSources }: any) => {
      const boardsWithLists = await dataSources.trelloAPI.boardsWithLists(args.filter.show)
      console.log(boardsWithLists)

      return boardsWithLists
    },
  },
}

// toDo: type data sources, split up schema, try out typeGen
