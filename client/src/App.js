import React, { Component } from "react";
import ApolloClient from "apollo-boost";
// or you can say t his: import {default as ApolloClient } from 'apollo-boost';
import gql from "graphql-tag";
import { ApolloProvider, Query } from "react-apollo";
// import logo from "./logo.svg";
import "./App.css";

const client = new ApolloClient({
  uri: "http://localhost:4466"
});

const getJobs = gql`
  query {
    jobs {
      id
      title
      status
      companyName
      category
    }
  }
`;

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
            {/* <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p> */}
            {/* <div className="title"> */}
              <h3 style={{float: "right"}}>CannaBoard 🍁</h3>
              <button>POST JOB FOR $99</button>
            {/* </div> */}
            <h1>Post a Job Find a job in the Canadian Cannabis Industry 🇨🇦</h1>
            <p>Have cannabis jobs sent directly to your inbox!</p>
            <Query query={getJobs}>
              {({ loading, data }) => {
                if (loading) return <p>Loadi∏ng...</p>;
                // instead of saying data.getJobs, we can say
                const { jobs } = data;
                return jobs.map(job => (
                  <ul key={job.id}>
                    {/* <li>{job.id}</li> */}
                    <li>{job.title}</li>
                    <li>{job.companyName}</li>
                    <li>{job.category}</li>
                    <li>{job.status}</li>
                  </ul>
                ));
              }}
            </Query>
          </header>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
