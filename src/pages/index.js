import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import HomeView from './Home'
import LoginView from './Login'
import ToolsView from './Tools'
import DirectoryView from './Directory'

const isAuthenticated = true

const Pages = () => (
  <main>
    <Route exact path="/" render={() => {
      if (isAuthenticated) return <HomeView />
      return <Redirect to="/login" />
    }}/>

    <Route exact path="/directory" render={() => {
      if (isAuthenticated) return <DirectoryView />
      return <Redirect to="/login" />
    }}/>

    <Route exact path="/tools" render={() => {
      if (isAuthenticated) return <ToolsView />
      return <Redirect to="/login" />
    }}/>

    <Route exact path="/login" component={LoginView} />
  </main>
)


export default Pages
