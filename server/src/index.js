import { ApolloServer, gql } from 'apollo-server';
import typeDefs from './schema';
import resolvers from './resolvers';

const server = new ApolloServer({
    typeDefs,
    resolvers
})

// Create endpoint to expose graphql playground
server.listen().then(({ url }) => {
    console.log(`The server is listening on port: ${url}`) //The default port for graphql playground is localhost:4000
})