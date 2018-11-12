import { Prisma } from "prisma-binding";
import { QueryDocumentKeys } from "graphql/language/visitor";

// This is where we configure node.js to connect to the correct prisma endpoint
const prisma = new Prisma({
  typeDefs: "prisma/generated/prisma.graphql/prisma.graphql", //provide typeDefs for the endpoint we are connecting to
  endpoint: "http://localhost:4466"
});

const createJob = async (data) => {
    const job = await prisma.mutation.createJob({
        data: {
            ...data
        }
    }, '{ id title status remoteStatus description applyURL applyEmail liscence category companyName companyWebsite aboutCompany name email }')
    return job
}


createJob({
    title: "Leader ",
    status: "Seasonal",
    remoteStatus: "No",
    description: "qwerty ",
    applyURL: "https://www.newcannabisventures.com/tag/canada/",
    applyEmail: "1234@gmail.com",
    liscence: "N/A",
    category: "Engineering",
    companyName: "Freebes",
    companyWebsite: "https://auroracannabis.com",
    aboutCompany: "420",
    name: "BillyBob",
    email: "BillyBob@gmail.com"
}).then((job) => {
    console.log(JSON.stringify(job, undefined, 2))
})


// await the response from the server. data argument is what comes back from the query
// prisma.query.jobs(null,
//     '{ id title status remoteStatus description applyURL applyEmail liscence category companyName companyWebsite aboutCompany name email }')
//     .then((data) => {
//     console.log(JSON.stringify(data, undefined, 2))
// })

// prisma.mutation.createJob({
//   data: {
//     title: "Printer man",
//     status: "Full-time",
//     remoteStatus: "No",
//     description: "A good grower for our company",
//     applyURL: "https://www.newcannabisventures.com/tag/canada/",
//     applyEmail: "Thomas@gmail.com",
//     liscence: "Marijuana Workers Permit",
//     category: "Cultivation",
//     companyName: "Thomas Innovations",
//     companyWebsite: "https://auroracannabis.com",
//     aboutCompany: "We are a publicly traded company growing fast",
//     name: "Thomas",
//     email: "thomas@gmail.com"
//   }
// }, '{id, title, status}').then((data) => {
//     console.log(JSON.stringify(data))
// });
