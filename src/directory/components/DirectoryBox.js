import React from 'react'
import OfficeList from './OfficeList'
import Logo from '../../shared/components/Logo'

const DirectoryBox = (props) => (
  <div className="container">
    <header className="header">
      <div className="left">
        <Logo url="/public/img/pages/directorio.png" height="60" />
        <div className="heading">
          <h3 className="title">Directorio</h3>
          <span className="description">Todas las flotas, extenciones y correos a tu alcance</span>
        </div>
      </div>
      <div className="right">
        <form>
          <input type="text" placeholder="Buscar" className="input"/>
        </form>
      </div>
    </header>
    <OfficeList />

    <style jsx>{`
      .container {
        background-color: #fff;
        flex: 1;
        padding: 2em;
      }

      .description {
        font-weight: 300;
      }

      .header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 2.5em;
      }

      .heading {
        margin-left: 1em;
      }

      .input {
        border: 1px solid #162747;
        padding: .4em 3em .4em 1em;
      }

      .left {
        align-items: center;
        display: flex;
      }

      .right {
        align-items: center;
        display: flex;
      }

      .title {
        text-transform: uppercase;
        font-weight: 900;
      }
    `}</style>
  </div>
)

export default DirectoryBox
