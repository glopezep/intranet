import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Projects from './Projects'

const isAuthenticated = true

const Pages = () => (
  <main>
    <Route exact path="/" render={() => {
      if (isAuthenticated) return <Home />
      return <Redirect to="/login" />
    }}/>

    <Route exact path="/projects" render={() => {
      if (isAuthenticated) return <Projects />
      return <Redirect to="/login" />
    }}/>

    <Route exact path="/login" component={Login} />
  </main>
)


export default Pages
