import React from 'react'
import Button from './PrimaryButton'

const ProjectCard = (props) => (
  <article className="card">
    <figure className="image-container">
      <img className="image" src={props.image} />
    </figure>
    <div className="body">
      <div className="description-container">
        <p className="description">{props.description}</p>
      </div>
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
    `}</style>
  </article>
)

export default ProjectCard
