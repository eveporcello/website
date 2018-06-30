import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

const uri = process.env.REACT_APP_GRAPHQL_ENDPOINT || 'http://localhost:4000'
const client = new ApolloClient({uri})

console.log('%cwelcome to high fives', 'color: purple; font-size: 40px')
console.log('%cthank you so much for your help!!!', 'color: blue; font-size: 20px')
console.log('connected to graphql endpoint ', uri)

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
registerServiceWorker()
