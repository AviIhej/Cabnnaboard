import { gql } from "apollo-server";

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

  type Mutation {
    addJob(title: String!, description: String!): Job
    deleteJob(id: Int!): [Job!]!
  }
`;
export { typeDefs as default };
