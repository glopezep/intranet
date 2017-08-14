import React from 'react'

const Footer = () => (
  <footer className="footer">
    <div className="column">
      <p>PAWA DOMINICANA 2017 ©</p>
    </div>
    <div className="column">
      <img src="/public/img/logo-footer-intranet.png" height="33"/>
    </div>
    <style jsx>{`
      .footer {
        background-color: #071b37;
        bottom: 0;
        color: #fff;
        display: flex;
        font-size: .8em
        height: 40px;
        left: 0;
        position: fixed;
        right: 0;
      }

      .column {
        align-items: center;
        display: flex;
        flex: 1;
        justify-content: center;
      }

    `}</style>
  </footer>
)

export default Footer
