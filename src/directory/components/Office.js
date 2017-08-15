import React from 'react'
import UserList from './UserList'

const Office = () => (
  <div className="office">
    <header className="header">
      <span className="column name">Acropolis</span>
      <span className="column"></span>
      <span className="column"></span>
      <span className="column">809-807-6444</span>
    </header>
    <UserList />
    <style jsx>{`
      .column {
        flex: 1;
        line-height: 2.5em;
        padding: 0 1em;
      }

      .header {
        background-color: #7f9bb7;
        color: #fff;
        display: flex;
      }

      .name {
        text-transform: uppercase;
      }

      .office {
        margin-bottom: 2.5em;
      }

    `}</style>
  </div>
)

export default Office
