import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
// or you can say this: import {default as ApolloClient } from 'apollo-boost';
import gql from 'graphql-tag';
import { ApolloProvider, Query } from 'react-apollo';
import logo from './logo.svg';
import './App.css';


const client = new ApolloClient({
  uri: 'http://localhost:4000'
})

const getJobs = gql`
 { 
    jobs{
      id
      companyId
      title
      description
    }
}
`

// client
//   .query({
//     query: getJobs
//   })
//   .then(res => console.log(res))

class App extends Component {
  render() {
    return (
      // Gives our application access to the client
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <Query query={getJobs}>
              {({ loading, data }) => {
                if(loading) return <p>Loading...</p>
                // instead of saying data.getJobs, we can say
                 const { jobs } = data
                 return jobs.map(job => <p key={job.id}>{job.title}</p>)
              }}
            </Query>
          </header>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
