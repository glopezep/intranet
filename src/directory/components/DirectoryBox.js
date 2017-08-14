import React from 'react'

const DirectoryBox = (props) => (
  <div className="container">
    <header>
      <div className="left">
        <img
          className="logo"
          src="/public/img/pages/directorio.png"
          alt="Logo"
          height="60"
        />
        <div className="heading">
          <h2>Directorio</h2>
          <span>Todas las flotas, extenciones y correos a tu alcance</span>
        </div>
      </div>

    </header>
    <style jsx>{`
      .container {
        background-color: #fff;
        flex: 1;
        padding: 2em;
      }

      .logo {
        margin-right: 1em;
      }

      .left {
        align-items: center;
        display: flex;
      }
    `}</style>
  </div>
)

export default DirectoryBox
