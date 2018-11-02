const { ApolloServer, gql } = require('apollo-server');

// Create Fake Json Data

// Create TyoeDefs
const typeDefs = gql`
    type Query {
        name: String
    }
`

// Create Resolvers
const resolvers = {
    Query: {
        name: () => "Hello"
    }
}

// Tie Resolvers and typeDefs together by making new ApolloServer Object
const server = new ApolloServer({typeDefs, resolvers})
// Expose API through endpoint URL for Graphql Playground


server.listen().then(({ url }) => console.log(`Server listening on port ${url} `))

// notes:When you initialize the typeDefs and resolvers they must have fields in them and they can not be empty