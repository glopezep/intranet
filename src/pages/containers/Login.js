import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import Login from '../../login/components/Login' // eslint-disable-line no-unused-vars

class LoginView extends Component {
  render () {
    return (
      <div className="login-view">
        <Login />

        <style jsx>{`
          .login-container {
            padding: 2em;
          }
        `}</style>
      </div>
    )
  }
}

export default LoginView
