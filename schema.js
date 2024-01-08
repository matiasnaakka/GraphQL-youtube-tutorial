export const typeDefs = `#graphql

type Game  {
  id: ID!
  title: String!
  platform: [String!]!
}
type Reviews {
  id: ID!
  rating: Int!
  content: String!
}
type Author{
  id:ID!
  name:String!
  verified: Boolean!
}
type Query {
  reviews: [Reviews]
  review(id: ID!): Reviews
  games: [Game]
  authors: [Author]
}
`
// int, float, string, boolean, ID
