import React, { Component } from 'react'
import Slider from 'react-slick'

class SimpleSlider extends Component {
  constructor (props) {
    super(props)

    this.state = {
      autoplay: true,
      arrows: false,
      dots: false,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: false,
      swipe: false
    }
  }

  render () {
    return (
      <div className="slider-container">
        <Slider {...this.state}>
          <div>
            <img className="image" src="/public/img/slider/ps-esp.jpg"/>
          </div>
          <div>
            <img className="image" src="/public/img/slider/bienvenido.jpg"/>
          </div>
        </Slider>
        <style jsx>{`
          .image {
            width: 908px;
          }
          .slider-container {
            height: 419px;
            margin: 0 1em 1em 0;
            width: 908px;
          }
        `}</style>
      </div>
    );
  }
}

export default SimpleSlider
