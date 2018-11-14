import { gql } from "apollo-server";
// import JobOrderByInput from '/Users/aviihej/Desktop/cannaboard/prisma-server/prisma/generated/prisma.graphql/prisma.graphql'
// import { importSchema } from 'graphql-import';
// const JobOrderByInput = require('../prisma/generated/prisma.graphql/prisma.graphql')
 
const typeDefs = gql`
  type Query {
    # companies: [Company]
    # company(id: Int!): Company
    # jobs(first: Int, skip: Int): [Job!]!
    jobs(orderBy: JobOrderByInput): [Job!]!
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
    location: String!
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
    updatedAt: String!
    createdAt: String!
  }

  input CreateJobInput {
    title: String!
    status: String!
    remoteStatus: String!
    location: String!
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

  enum JobOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  status_ASC
  status_DESC
  remoteStatus_ASC
  remoteStatus_DESC
  location_ASC
  location_DESC
  description_ASC
  description_DESC
  applyURL_ASC
  applyURL_DESC
  applyEmail_ASC
  applyEmail_DESC
  liscence_ASC
  liscence_DESC
  category_ASC
  category_DESC
  companyName_ASC
  companyName_DESC
  companyWebsite_ASC
  companyWebsite_DESC
  aboutCompany_ASC
  aboutCompany_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}



  # type User {
  #   id: Int
  #   email: String
  #   password: String
  #   companyId: Int
  # }

  type Mutation {
    createJob(data: CreateJobInput): Job
    deleteJob(id: ID!): [Job!]!
  }
`;
export { typeDefs as default };
