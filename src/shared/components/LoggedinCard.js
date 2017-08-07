import React from 'react'
import Logo from './Logo'
import FlatButton from './FlatButton'

const LoggendinCard = () => (
  <article className="card">
    <div className="body">
      <div className="logo-container">
        <Logo url="/public/img/logopawa.png" height="150"/>
      </div>
      <div className="info">
        <div className="welcome">
          <p>Bienvenido</p>
          <p>Jhon</p>
        </div>
        <FlatButton>Salir</FlatButton>
      </div>
    </div>
    <footer className="footer">
      <a href="#" className="icon-container">?</a>
      <a href="#" className="language">English</a>
    </footer>
    <style jsx>{`
      .body {
        background: #fff;
        margin-bottom: .5em;
        padding: 0 1.5em;
      }

      .card {
        width: 215px;
      }

      .footer {
        align-items: center;
        background-color: #071b37
        color: #fff;
        display: flex;
        height: 40px;
        justify-content: space-between;
      }

      .info {
        align-items: center;
        display: flex;
        flex-direction: column;
        height: 120px;
        justify-content: center;
      }

      .icon-container {
        align-items: center;
        background-color: #c50423;
        color: #fff;
        display: flex;
        height: 100%;
        justify-content: center;
        transition: background ease .2s
        text-decoration: none;
        width: 40px;
      }

      .icon-container:hover {
        background: #9e0c24
      }

      .language {
        align-items: center;
        display: flex;
        color: #fff;
        flex: 1;
        height: 100%;
        justify-content: flex-end;
        padding-right: 1em;
        text-decoration: none;
      }

      .language:hover {
        color: #f82647;
      }

      .logo-container {
        align-items: center;
        border-bottom: 1px solid #d8d7d7;
        display: flex;
        flex: 1;
        height: 250px;
        justify-content: center;
      }

      .welcome {
        margin-bottom: .5em;
        text-align: center;
      }
    `}</style>
  </article>
)

export default LoggendinCard
