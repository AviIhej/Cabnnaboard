import db from './db';

const resolvers = {

   
    Query:{
        // companies: () => db.companies,
        // company: (parentValue, {id}, context, info) => {
        //     return db.companies.filter(company => company.id === id)[0]
        // },
        jobs: () => db.jobs,
        job: (_, args) => db.jobs.filter(job => job.id === args.id)[0],
        // users: () => db.users,
        // user: (_, args) => db.users.find(user => user.id === id)[0]
    },

    // Company: {
    //     jobs: (parentValue) => {
    //         return db.jobs.filter(job => job.companyId === parentValue.id)
    //     }
    // },

    // Job: {
    //     company: (parentValue) => {
    //         return db.companies.filter(company => company.id === parentValue.companyId)[0]
    //     }
    // },

    Mutation: {
        addJob: (parentValue, args, context, info) => {
            const newJob = {
                ...args.data,
                id: db.jobs.length + "sdffw",
            }
            db.jobs.push(newJob)
            return newJob
        },

        deleteJob: (_, args) => {
            db.jobs =  db.jobs.filter(job => job.id !== args.id)
            return db.jobs
        },
    }
}

export { resolvers as default }