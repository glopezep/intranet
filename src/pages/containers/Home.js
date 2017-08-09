import React, { Component } from 'react'
import Footer from '../components/Footer'
import LoggedinCard from '../../shared/components/LoggedinCard'
import Logo from '../../shared/components/Logo'
import FlatButton from '../../shared/components/FlatButton'
import Slider from '../../shared/components/Slider'


const Card = () => (
  <article className="card">
    <style jsx>{`

      .card {
        background-color: #fff;
        height: 419px;
        margin: 0 1em 1em 0;
        width: 215px;
      }
    `}</style>
  </article>
)

class HomeView extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <section className="home-view">
        <div className="container">
          <LoggedinCard />
          <Slider />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
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
