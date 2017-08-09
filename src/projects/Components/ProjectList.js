import React from 'react'
import Project from './Project'

const ProjectList = (props) => (
  <div className="project-list">
    {props.projects.map(project => (
      <Project key={project.id} {...project} />
    ))}
    <style jsx>{`
      .project-list {
        display: flex;
        flex: 1;
      }
    `}</style>
  </div>
)

export default ProjectList
