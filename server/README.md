Server start command and configuration:
Nodemon watches files with .js and .graphql extensions as well as the index.js file. It watches them via babal-node, which compiles our node.js code into vanilla js.

"scripts": {
    "start": "nodemon src/index.js --ext js,graphql --exec babel-node",
    "test": "echo \"Error: no test specified\" && exit 1"
},

npm run start

*************

User Schema:

type User = {
    id: ID!
    companyEmail
}