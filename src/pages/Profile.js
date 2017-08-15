import React, { Component } from 'react'
import Footer from '../shared/components/Footer'
import LoggedinCard from '../login/components/LoggedinCard'
import ProfileBox from '../profiles/components/ProfileBox'


class ProfileView extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <section className="view">
        <div className="container">
          <LoggedinCard />
          <ProfileBox />
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
            color: #0F2C50;
            font-family: 'Lato', 'sans-serif';
            flex-direction: column;
            min-height: 100vh;
          }
        `}</style>
      </section>
    )
  }
}

export default ProfileView
