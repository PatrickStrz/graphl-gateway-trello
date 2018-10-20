export const resolvers = {
  Query: {
    boards: async (_0: any, _1: any, { dataSources }: any) => {
      return await dataSources.trelloAPI.boards()
    },
  },
}
