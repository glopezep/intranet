import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import HomeView from './Home'
import LoginView from './Login'
import ToolsView from './Tools'
import DirectoryView from './Directory'
import ProfileView from './Profile'

const isAuthenticated = true

const PrivateRoute = ({ component: Component, exact, path }) => (
  <Route path={path} exact={exact} render={(props) => {
    if (!isAuthenticated) {
      return <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    }
    return <Component {...props} />
  }}/>
)

const Pages = () => (
  <main>
    <PrivateRoute exact path="/" component={HomeView} />
    <PrivateRoute exact path="/directory" component={DirectoryView} />
    <PrivateRoute exact path="/profile/:username" component={ProfileView} />
    <PrivateRoute exact path="/tools/" component={ToolsView} />
    <Route exact path="/login" component={LoginView} />
  </main>
)


export default Pages
