import React, { Component } from 'react'
import Footer from '../components/Footer'
import LoggedinCard from '../../shared/components/LoggedinCard'
import Logo from '../../shared/components/Logo'
import FlatButton from '../../shared/components/FlatButton'
import Slider from '../../shared/components/Slider'
import Card from '../../shared/components/Card'

class HomeView extends Component {
  constructor (props) {
    super(props)

    this.state = {
      projects: [
        {
          id: 1,
          image: 'https://intranet.pawadominicana.net/images/icon/icon_dashboard/documentos.jpg',
          title: 'Documentos en linea',
          description: 'Consulta y descarga documentos.'
        },
        {
          id: 2,
          image: 'https://intranet.pawadominicana.net/images/icon/icon_dashboard/documentos.jpg',
          title: 'Documentos en linea',
          description: 'Consulta y descarga documentos.'
        },
        {
          id: 3,
          image: 'https://intranet.pawadominicana.net/images/icon/icon_dashboard/documentos.jpg',
          title: 'Documentos en linea',
          description: 'Consulta y descarga documentos.'
        },
        {
          id: 4,
          image: 'https://intranet.pawadominicana.net/images/icon/icon_dashboard/documentos.jpg',
          title: 'Documentos en linea',
          description: 'Consulta y descarga documentos.'
        },
        {
          id: 5,
          image: 'https://intranet.pawadominicana.net/images/icon/icon_dashboard/documentos.jpg',
          title: 'Documentos en linea',
          description: 'Consulta y descarga documentos.'
        },
        {
          id: 6,
          image: 'https://intranet.pawadominicana.net/images/icon/icon_dashboard/documentos.jpg',
          title: 'Documentos en linea',
          description: 'Consulta y descarga documentos.'
        },
        {
          id: 7,
          image: 'https://intranet.pawadominicana.net/images/icon/icon_dashboard/documentos.jpg',
          title: 'Documentos en linea',
          description: 'Consulta y descarga documentos.'
        }
      ]
    }
  }

  render () {
    return (
      <section className="home-view">
        <div className="container">
          <LoggedinCard />
          <Slider />
          {this.state.projects.map(project => (
            <Card key={project.id} {...project} />
          ))}
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
