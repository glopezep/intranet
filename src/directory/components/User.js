import React from 'react'

const User = (props) => (
  <div className="user">
    <strong className="column name">Abel López</strong>
    <span className="column">Soporte TI</span>
    <span className="column">Extensión 1013</span>
    <span className="column">abel.lopez@pawadominicana.com</span>
    <style jsx>{`
      .column {
        flex: 1;
        font-weight: 300;
        line-height: 2.5em;
        padding: 0 1em;
      }

      .name {
        font-weight: 900;
      }

      .user {
        display: flex;
        border-bottom: 1px solid #ddd
      }
    `}</style>
  </div>
)

export default User
