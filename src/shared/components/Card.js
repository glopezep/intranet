import React from 'react'
import PrimaryButton from './PrimaryButton'

const Card = (props) => (
  <article className="card">
    <figure className="image-container">
      <img className="image" src={props.image} />
    </figure>
    <div className="body">
      <h2 className="title">{props.title}</h2>
      <div className="description-container">
        <p className="description">{props.description}</p>
      </div>
      <PrimaryButton>
        Acceder
      </PrimaryButton>
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
        height: 70px;
      }

      .image {
        width: 100%;
      }

      .image-container {
        height: 196px;
      }

      .title {
        height: 80px;
        text-align: center;
      }
    `}</style>
  </article>
)

export default Card
