import React, { Component } from 'react'
import Footer from '../components/Footer'
import LoggedinCard from '../../shared/components/LoggedinCard'
import Logo from '../../shared/components/Logo'
import FlatButton from '../../shared/components/FlatButton'

class Slider extends Component {
  constructor (props) {
    super(props)

    this.state = {
      current: '0',
      images: [
        'http://placehold.it/1000x400/ffffff/c0392b/&text=slide1',
        'http://placehold.it/1000x400/ffffff/c0392b/&text=slide2',
        'http://placehold.it/1000x400/ffffff/c0392b/&text=slide3'
      ]
    }
  }

  next () {

  }

  render () {
    const images = this.state.images
    return (
      <div className="slider">
        {this.state.images.map((link, index) => (
          <img src={link} style="position: relative"/>
        ))}
        <style jsx>{`
          .hide {
            display: none;
          }

        `}</style>
      </div>
    )
  }
}



class HomeView extends Component {
  render () {
    return (
      <section className="home-view">
        <div className="container">
          <LoggedinCard />
          <Slider />
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
