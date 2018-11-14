

const resolvers = {

   
    // In csase I want to add pages to the site, 
    // const opArgs = {
    //     first: args.first,
    //     skip: args.skip
    // }
    Query:{
        jobs: (_, args, { prisma }, info) => 
        {
            const opArgs = {
                orderBy: args.orderBy
            }
            return prisma.query.jobs(null, info)
        },

        // job: (_, args) => {
        //     db.jobs.filter(job => job.id === args.id)[0]
        // }
        // jobs: () => db.jobs,
        // job: (_, args) => db.jobs.filter(job => job.id === args.id)[0],
        // companies: () => db.companies,
        // company: (parentValue, {id}, context, info) => {
        //     return db.companies.filter(company => company.id === id)[0]
        // },
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
            createJob: (parentValue, args, { prisma }, info) => {

            return prisma.mutation.createJob({ data: args.data }, info)

            // const newJob = {
            //     ...args.data,
            //     id: db.jobs.length + "sdffw",
            // }
            // db.jobs.push(newJob)
            // return newJob
        },

        deleteJob: (_, args) => {
            db.jobs =  db.jobs.filter(job => job.id !== args.id)
            return db.jobs
        },
    }
}

export { resolvers as default }