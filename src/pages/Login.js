import React, { Component } from 'react'
import Footer from '../shared/components/Footer'
import Login from '../login/containers/Login'

class LoginView extends Component {
  render () {
    return (
      <section className="view">
        <Login />
        <Footer />

        <style jsx>{`
          .view {
            display: flex;
            background: url('/public/img/bg-3.jpg') center center no-repeat;
            background-size: cover;
            font-family: 'Lato', 'sans-serif';
            flex-direction: column;
            min-height: 100vh;
          }
        `}</style>
      </section>
    )
  }
}

export default LoginView
