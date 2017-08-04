import React, { Component } from 'react'
import Footer from '../components/Footer'
import Login from '../../login/components/Login'

class LoginView extends Component {
  render () {
    return (
      <section className="login-view">
        <Login />
        <Footer />
        <style jsx>{`
          .login-view {
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
