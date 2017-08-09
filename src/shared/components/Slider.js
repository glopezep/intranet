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
            <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1"/>
          </div>
          <div>
            <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2"/>
          </div>
          <div>
            <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3"/>
          </div>
        </Slider>
        <style jsx>{`
          .slider-container {
            height: 419px;
            width: 928px;
          }
        `}</style>
      </div>
    );
  }
}

export default SimpleSlider
