import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    # companies: [Company]
    # company(id: Int!): Company
    jobs: [Job!]!
    job(id: ID!): Job!
    # users: [User]
    # user(id: Int): User
  }

  # // type Company {
  # //   id: Int
  # //   name: String
  # //   description: String
  # //   jobs: [Job]
  # // }

  type Job {
    id: ID!
    title: String!
    status: String!
    remoteStatus: String!
    description: String
    applyURL: String!
    applyEmail: String!
    liscence: String!
    category: String!
    companyName: String!
    companyWebsite: String!
    aboutCompany: String!
    name: String!
    email: String!
  }

  input CreateJobInput {
    title: String!
    status: String!
    remoteStatus: String!
    description: String!
    applyURL: String!
    applyEmail: String!
    liscence: String!
    category: String!
    companyName: String!
    companyWebsite: String!
    aboutCompany: String!
    name: String!
    email: String!
  }



  # type User {
  #   id: Int
  #   email: String
  #   password: String
  #   companyId: Int
  # }

  type Mutation {
    addJob(data: CreateJobInput): Job
    deleteJob(id: ID!): [Job!]!
  }
`;
export { typeDefs as default };
