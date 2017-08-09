import React from 'react'
import { Link } from 'react-router-dom'
import Button from './PrimaryButton'

const Card = (props) => (
  <article className="card">
    <figure className="image-container">
      <img className="image" src={props.image} />
    </figure>
    <div className="body">
      <h3 className="title">{props.title}</h3>
      <div className="description-container">
        <p className="description">{props.description}</p>
      </div>
      {props.link ? (
        <Link to={props.link}>
          <Button>
            Acceder
          </Button>
        </Link>
      ) : (
        <Button>
          Acceder
        </Button>
      )}
    </div>

    <style jsx>{`
      .body {
        padding: 0 1.5em;
      }

      .card {
        background-color: #fff;
        height: 419px;
        margin: 0 1em 1em 0;
        max-width: 215px;
      }

      .description {
        text-align: center;
      }

      .description-container {
        height: 80px;
      }

      .image {
        width: 100%;
      }

      .image-container {
        height: 196px;
      }

      .title {
        font-weight: 900;
        height: 80px;
        text-align: center;
        text-transform: uppercase;
      }
    `}</style>
  </article>
)

export default Card
