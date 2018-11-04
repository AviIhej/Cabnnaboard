import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
// or you can say this: import {default as ApolloClient } from 'apollo-boost';
import gql from 'graphql-tag';
import { ApolloProvider } from 'react-apollo';
import logo from './logo.svg';
import './App.css';
import { HttpLink } from 'apollo-link-http';

const httpLink = new HttpLink({ uri: 'http://localhost:4000' })

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:4000' })
})

const query = gql`
  {
    jobs{
      id
      companyId
      title
      description
    }
  }
`

client
  .query({
    query: query
  })
  .then(res => console.log(res))

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
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
