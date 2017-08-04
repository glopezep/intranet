import React, { Component } from 'react'
import Footer from '../components/Footer'
import Logo from '../../shared/components/Logo'


const LoggendinCard = () => (
  <article className="card">
    <div className="body">
      <div className="logo-container">
        <Logo url="/public/img/logopawa.png" height="150"/>
      </div>
      <div className="info">
        <p className="message"></p>
        <p className="user-name"></p>
      </div>
    </div>
    <footer className="footer">
      <div className="icon-container"></div>
      <a className="language-link" href="#">English</a>
    </footer>
    <style jsx>{`
      /*.container {
        background-color: #c50423;
        display: flex;
        height: 40px;
        width: 40px;
      }
      .language-container {
        background-color: #0a3565;
        flex: 1;
      }

      .language-link {
        color: #fff;
      }

      .body {
        background-color: #fff;
      }

      .loggedin-card {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 215px;
      }

      .loggedin-footer {
        align-items: center;
        display: flex;
        justify-content: space-between;
      }*/
    `}</style>
  </article>
)

const Card = () => (
  <article className="card">

  </article>
)

const SlideShow = () => (
  <div className="slide-show">
    Probando
    <style jsx>{`
      .slide-show {
        width: 928px;
        height: 408px;
      }
    `}</style>
  </div>
)


class HomeView extends Component {
  render () {
    return (
      <section className="home-view">
        <div className="container">
          <LoggendinCard />
          <SlideShow />
        </div>
        <Footer />
        <style jsx>{`
          .container {
            display: flex;
            flex-wrap: wrap;
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
