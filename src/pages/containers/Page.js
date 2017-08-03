import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Login from './Login'

const Pages = () => (
  <main>
    <Route exact path="/" component={Login} />
  </main>
)

export default Pages
