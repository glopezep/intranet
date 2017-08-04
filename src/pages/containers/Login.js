import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import Login from '../../login/components/Login' // eslint-disable-line no-unused-vars

class LoginView extends Component {
  render () {
    return (
      <div className="login-view">
        <Login />
        <style jsx>{`
          .login-view {
            display: flex;
            background: url('/public/img/bg-3.jpg') center center no-repeat;
            background-size: cover;
            flex-direction: column;
            min-height: 100vh;
          }
        `}</style>
      </div>
    )
  }
}

export default LoginView
