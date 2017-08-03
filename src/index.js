import React from 'react' // eslint-disable-line no-unused-vars
import { render } from 'react-dom' // eslint-disable-line no-unused-vars
import { BrowserRouter, Route, Link } from 'react-router-dom' // eslint-disable-line no-unused-vars
import Page from './pages/containers/Page' // eslint-disable-line no-unused-vars

const container = document.getElementById('root')

render(
  <BrowserRouter>
    <Page />
  </BrowserRouter>,
  container
)
