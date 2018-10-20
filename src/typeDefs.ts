import gql from "graphql-tag"

export const typeDefs = gql`
  type Board {
    id: ID!
    name: String
  }

  type List {
    id: ID!
    name: String
  }

  type Query {
    boards: [Board]
  }
`