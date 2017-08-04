import React from 'react' // eslint-disable-line
import Button from '../../shared/components/Button'

const Login = () => (
  <div className="login">
    <header className="header">
      <img src="/public/img/logopawa.png" alt="Logo" height="160" />
    </header>
    <div className="body">
      <form className="form">
        <div className="input-container">
          <input className="input" type="text" placeholder="Usuario" />
        </div>
        <div className="input-container">
          <input className="input" type="password" placeholder="Contraseña" />
        </div>
        <a className="link" href="#">Olvidé mi contraseña</a>
        <Button>Entrar</Button>
      </form>
    </div>

    <style jsx>{`
      .body {
        background-color: #102c52;
        height: 279px;
      }

      .header {
        align-items: center;
        background-color: #fff;
        display: flex;
        height: 279px;
        justify-content: center;
        margin-bottom: 1em;
      }

      .form {
        display: flex;
        flex-direction: column;
        padding: 1.5em;
      }

      .input {
        background: none;
        border: solid 1px #fff;
        color: #fff;
        flex: 1;
        height: 45px;
        padding: 0 1em;
      }

      .input-container {
        display: flex;
        margin-bottom: 1.2em;
      }

      .link {
        color: #fff;
        margin-bottom: 1.2em;
      }

      .login {
        display: flex;
        flex-direction: column;
        margin: 2em;
        width: 297px;
      }
    `}</style>
  </div>
)

export default Login
