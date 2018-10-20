import dotenv from "dotenv"

dotenv.config()

import { resolvers } from "./resolvers"
import { typeDefs } from "./typeDefs"

import { ApolloServer } from "apollo-server"

import { TrelloAPI } from "./data-sources/trello"

const dataSources = () => {
  return {
    trelloAPI: new TrelloAPI(),
  }
}

const server = new ApolloServer({ typeDefs, resolvers, dataSources })

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }: any) => {
  console.log(`🚀  Server ready at ${url}`)
})
