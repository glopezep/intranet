import React from 'react'

const LoginForm = () => (
  <div className="login">
    <header className="header">
      <img alt="Logo"/>
    </header>
    <div className="body">
      <form className="form">
        <div className="input-container">
          <input className="input" type="text" placeholder="Usuario" />
        </div>
        <div className="input-container">
          <input className="input" type="text" placeholder="Contraseña" />
        </div>
        <a href="#">Olvidé mi contraseña</a>
        <button className="button">Entrar</button>
      </form>
    </div>
  </div>
)

export default LoginForm
