import db from './db';

const resolvers = {
    Query:{
        companies: () => db.companies,
        company: (parentValue, args,context, info) => {
            return db.companies.filter(company => company.id === args.id)[0]
        },
        jobs: () => db.jobs,
        job: (_, args) => db.jobs.filter(job => job.id === args.id)[0],
        users: () => db.users,
        user: (_, args) => db.users.find(user => user.id === args.id)[0]
    },

    Company: {
        jobs: (parentValue) => {
            return db.jobs.filter(job => job.companyId === parentValue.id)
        }
    },

    Job: {
        company: (parentValue) => {
            return db.companies.filter(company => company.id === parentValue.companyId)[0]
        }
    },

    Mutation: {
        addJob: (parentValue, args, context, info) => {
            const newJob = {
                ...args,
                id: companies.length + 1,
                companyId: companies.length + 2
            }
            db.jobs.push(newJob)
            return newJob
        },
        deleteJob: (_, args) => {
            return db.jobs.filter(job => job.id !== args.id)
        },
    }
}

export { resolvers as default }