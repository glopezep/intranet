import React, { Component } from 'react'
import Footer from '../shared/components/Footer'
import LoggedinCard from '../login/components/LoggedinCard'

class ToolView extends Component {
  render () {
    return (
      <section className="view">
        <div className="container">
          <LoggedinCard />
        </div>
        <Footer />
        <style jsx>{`

          .container {
            display: flex;
            flex-wrap: wrap;
            margin: 1em;
          }
          .view {
            background-color: #e9e8e8;
            display: flex;
            font-family: 'Lato', 'sans-serif';
            flex-direction: column;
            min-height: 100vh;
          }
        `}</style>
      </section>
    )
  }
}

export default ToolView
