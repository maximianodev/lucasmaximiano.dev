import React from 'react'

import Modal from '../Modal'

export type AuthorProjectProps = {
  id: number
  shortDescription: {
    text: string
  }
  title: string
  image: {
    url: string
  }
  language: string
  libraries: string
  typeAplication: []
  url: string
  github: string
  framework: string
  databases: string
}

type AuthorProjectsProps = {
  data: AuthorProjectProps[]
}

const AuthorProjects = ({ data }: AuthorProjectsProps) => {
  return (
    <div>
      <div className="container">
        <h2>Projetos</h2>
        <img src="/images/building.gif" />
        <div className="projects">
          {data.map((item, index) => (
            <Modal data={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export { AuthorProjects }
