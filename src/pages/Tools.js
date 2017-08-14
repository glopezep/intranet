import React, { Component } from 'react'
import Footer from '../shared/components/Footer'
import LoggedinCard from '../login/components/LoggedinCard'
import ToolList from '../tools/components/ToolList'

class ToolView extends Component {
  constructor (props) {
    super(props)

    this.state = {
      tools: [
        {
          id: 1,
          image: '/public/img/projects-smalls/documentos.jpg',
          description: 'Consulta y descarga documentos.',
          link: '/tools'
        },
        {
          id: 2,
          image: '/public/img/projects-smalls/documentos.jpg',
          description: 'Consulta y descarga documentos.',
          link: '/tools'
        },
        {
          id: 3,
          image: '/public/img/projects-smalls/documentos.jpg',
          description: 'Consulta y descarga documentos.',
          link: '/tools'
        },
        {
          id: 4,
          image: '/public/img/projects-smalls/documentos.jpg',
          description: 'Consulta y descarga documentos.',
          link: '/tools'
        },
        {
          id: 5,
          image: '/public/img/projects-smalls/documentos.jpg',
          description: 'Consulta y descarga documentos.',
          link: '/tools'
        },
        {
          id: 6,
          image: '/public/img/projects-smalls/documentos.jpg',
          description: 'Consulta y descarga documentos.',
          link: '/tools'
        },
        {
          id: 7,
          image: '/public/img/projects-smalls/documentos.jpg',
          description: 'Consulta y descarga documentos.',
          link: '/tools'
        },
        {
          id: 8,
          image: '/public/img/projects-smalls/documentos.jpg',
          description: 'Consulta y descarga documentos.',
          link: '/tools'
        },
        {
          id: 9,
          image: '/public/img/projects-smalls/documentos.jpg',
          description: 'Consulta y descarga documentos.',
          link: '/tools'
        },
        {
          id: 10,
          image: '/public/img/projects-smalls/documentos.jpg',
          description: 'Consulta y descarga documentos.',
          link: '/tools'
        },
        {
          id: 11,
          image: '/public/img/projects-smalls/documentos.jpg',
          description: 'Consulta y descarga documentos.',
          link: '/tools'
        },
        {
          id: 12,
          image: '/public/img/projects-smalls/documentos.jpg',
          description: 'Consulta y descarga documentos.',
          link: '/tools'
        },
        {
          id: 13,
          image: '/public/img/projects-smalls/documentos.jpg',
          description: 'Consulta y descarga documentos.',
          link: '/tools'
        },
        {
          id: 14,
          image: '/public/img/projects-smalls/documentos.jpg',
          description: 'Consulta y descarga documentos.',
          link: '/tools'
        }
      ]
    }
  }

  render () {
    return (
      <section className="view">
        <div className="container">
          <LoggedinCard />
          <ToolList projects={this.state.tools} />
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
