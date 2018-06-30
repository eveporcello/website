const {
  ApolloServer
  // gql
} = require('apollo-server')
const fs = require('fs')
const path = require('path')

const typeDefs = fs.readFileSync(
  path.join(__dirname, 'typeDefs.graphql'),
  'utf8'
)

const server = new ApolloServer({
  typeDefs,
  mocks: true
})

server.listen().then(({ url }) => {
  console.log(`Mock GraphQL endpoint: ${url}`)
})
