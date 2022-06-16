import React from 'react'

type BiographyProps = {
  data: string
}

const AuthorBiography = ({ data }: BiographyProps) => {
  return (
    <div>
      <h2>Software Engineer</h2>
      <p>{data}</p>
    </div>
  )
}

export { AuthorBiography }
