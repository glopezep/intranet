import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Page from './pages/containers/Page'

const container = document.getElementById('root')

render(
  <BrowserRouter>
    <Page />
  </BrowserRouter>,
  container
)
