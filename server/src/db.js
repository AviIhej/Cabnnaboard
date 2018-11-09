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
        id: "1",
        title: "Manager", 
        status: "Full-time", 
        remoteStatus: "No",
        description: "A good grower for our company",
        applyURL: "https://www.newcannabisventures.com/tag/canada/",
        applyEmail: "mike@gmail.com",
        liscence: "Marijuana Workers Permit",
        category: "Cultivation",
        companyName: "Aurora Cannabis",
        companyWebsite: "https://auroracannabis.com",
        aboutCompany: "We are a publicly traded company growing fast",
        name: "Gordon",
        email: "gordon@gmail.com"
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

const db = {
    companies,
    jobs,
    users
}

export { db as default }