import React, { Component } from 'react'
import { Header } from './HeaderComponents/Header'
import { Homepage } from './HomeComponents/Homepage'
import { Registration } from './RegistrationComponents/Registration'
import { Registration1 } from './RegistrationComponents/Registration1'
import { Registration2 } from './RegistrationComponents/Registration2'
import { Footer } from './Footer'
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const Container = styled.section`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  header {
    border: 8px solid #ff6347;
  }
  main {
    border: 8px solid #568f56;
  }
  footer {
    border: 8px solid #24248f;
  }
  img {
    height: 75px;
  }
`

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Header />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/registration" component={Registration} />
            <Route exact path="/registration-1" component={Registration1} />
            <Route exact path="/registration-2" component={Registration2} />
          </Switch>
          <Footer />
        </Container>
      </Router>
    )
  }
}

export default App
