// Lets Create our server
// First we must bring in ApolloServer and gql from apollo-server
const { ApolloServer, gql } = require('apollo-server')

// Create Fake Data
let companies = [
    {
        id: 1,
        name: "Facebook",
        description: "We are facebook. come work for us!"
    },
    {
        id: 2,
        name: "Google",
        description: "We are Google. come work for us!"
    },
    {
        id: 3,
        name: "Netflix",
        description: "We are Netflix. come work for us!"
    },
    {
        id: 4,
        name: "Twitter",
        description: "We are Twitter. come work for us!"
    },
]

let jobs = [
    {
        id: 1,
        companyId: 1,
        title: "Frontend Developer",
        description: "We are looking for a frontend developer familiar with react"
    },
    {
        id: 2,
        companyId: 1,
        title: "Backend Developer",
        description: "We are looking for a Backend developer familiar with node.js and Express"
    },
    {
        id: 3,
        companyId: 3,
        title: "Frontend Developer",
        description: "We are looking for a frontend developer familiar with react"
    },
    {
        id: 4,
        companyId: 4,
        title: "Frontend Developer",
        description: "We are looking for a frontend developer familiar with react"
    },
    {
        id: 5,
        companyId: 5,
        title: "Frontend Developer",
        description: "We are looking for a frontend developer familiar with react"
    },
    {
        id: 6,
        companyId: 6,
        title: "Frontend Developer",
        description: "We are looking for a frontend developer familiar with react"
    },
]

let users = [
    {
        id: 1,
        email: "alice@gmail.com",
        password: "alice123",
        companyId: "1"
    },
    {
        id: 2,
        email: "mike@gmail.com",
        password: "mike123",
        companyId: "1"
    },
    {
        id: 3,
        email: "john@gmail.com",
        password: "john123",
        companyId: "1"
    },
    {
        id: 4,
        email: "bill@gmail.com",
        password: "bill123",
        companyId: "1"
    },
]
// Ok, now our data is created. lets go down and create our typedefs and resolvers

// Create typeDefs

const typeDefs = gql`
    type Query {
       companies: [Company]
       company(id: Int!): Company
       jobs: [Job]
       job(id: Int!): Job
       users: [User]
       user(id: Int): User
    }

    type Company {
        id: Int
        name: String
        description: String
        jobs: [Job]
    }

    type Job {
        id: Int
        companyId: Int
        title: String
        description: String
        company: Company
    }

    type User {
        id: Int
        email: String
        password: String
        companyId: Int
    }
    # These are our initial typeDefs. We will also create mutations so that we can add users and jobs.
`

// Create resolvers
const resolvers = {
    Query:{
        companies: () => companies,
        company: (parentValue, args,context, info) => {
            return companies.filter(company => company.id === args.id)[0]
        },
        jobs: () => jobs,
        job: (_, args) => jobs.filter(job => job.id === args.id)[0],
        users: () => users,
        user: (_, args) => users.find(user => user.id === args.id)[0]
    },

    Company: {
        jobs: (parentValue) => {
            return jobs.filter(job => job.companyId === parentValue.id)
        }
    },

    Job: {
        company: (parentValue) => {
            return companies.filter(company => company.id === parentValue.companyId)[0]
        }
    },
}
// Create apolloServer Object to pass typeDefs, and resolvers into
// First lets initialize our typeDefs and resolvers in a new ApolloServer Object

const server = new ApolloServer({typeDefs, resolvers})

// Create endpoint to expose graphql playground
server.listen().then(({ url }) => {
    console.log(`The server is listening on port: ${url}`) //The default port for graphql playground is localhost:4000
})

// We can't run the server without providing some resolver functions
// Resolvers will come in the next video. For now, we will just provide 1 resolver function