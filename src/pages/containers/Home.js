import React, { Component } from 'react'
import Footer from '../components/Footer'
import LoggedinCard from '../../shared/components/LoggedinCard'
import Slider from '../../shared/components/Slider'
import Logo from '../../shared/components/Logo'
import FlatButton from '../../shared/components/FlatButton'

const Card = () => (
  <article className="card">

  </article>
)

class HomeView extends Component {
  render () {
    return (
      <section className="home-view">
        <div className="container">
          <LoggedinCard />
          {/* <Slider /> */}
        </div>
        <Footer />
        <style jsx>{`
          .container {
            display: flex;
            flex-wrap: wrap;
            margin: 1em;
          }
          .home-view {
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

export default HomeView
