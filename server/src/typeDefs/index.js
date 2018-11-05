export default gql`
      type Query {
    companies: [Company]
    company(id: Int!): Company
    jobs: [Job]
    job(id: Int!): Job
    users: [User]
    user(id: Int): User
  }


  type Mutation {
    addJob(title: String!, description: String!): Job
    deleteJob(id: Int!): [Job!]!
  }

`