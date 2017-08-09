import React from 'react'

const Project = (props) => (
  <div className="project">
    <img className="image" src={props.image}/>
    <p className="description">{props.description}</p>
    <style jsx>{`
      .project {
        background-color: #fff;
        height: 189px;
        margin: 0 1em 1em 0;
        width: 215px;
      }

      .image {
        width: 100%;
      }
    `}</style>
  </div>
)

export default Project
