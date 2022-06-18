import React from 'react'

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
        <div className="projects">
          {data.map((item) => (
            <div key={item.id}>{item.title}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

export { AuthorProjects }
