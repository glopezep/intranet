import React from 'react'
import Project from './Tool'

const ToolList = (props) => (
  <div className="project-list">
    {props.projects.map(project => (
      <Project key={project.id} {...project} />
    ))}
    <style jsx>{`
      .project-list {
        display: flex;
        flex: 1;
        flex-wrap: wrap;
      }
    `}</style>
  </div>
)

export default ToolList
