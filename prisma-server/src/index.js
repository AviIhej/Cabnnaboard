import { ApolloServer, gql } from 'apollo-server';
import typeDefs from './schema';
import resolvers from './resolvers';
import prisma from './prisma';
import db from './db';

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context:{
        db,
        prisma
    }
})

// Create endpoint to expose graphql playground
server.listen().then(({ url }) => {
    console.log(`The server is listening on port: ${url}`) //The default port for graphql playground is localhost:4000
})