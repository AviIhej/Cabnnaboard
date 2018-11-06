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

const db = {
    companies,
    jobs,
    users
}

export { db as default }