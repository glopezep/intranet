import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import App from './pages/'

const container = document.getElementById('root')

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  container
)
