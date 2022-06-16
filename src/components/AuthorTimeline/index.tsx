import React from 'react'

export type AuthorTimeLineContent = {
  content: {
    age: number
    content: {
      title: string
      description: string
    }[]
  }[]
}

type AuthorTimeLineProps = {
  data: AuthorTimeLineContent[]
}

const AuthorTimeline = ({ data }: AuthorTimeLineProps) => {
  return (
    <div>
      <h2>linha do tempo</h2>
      <div className="container">
        {data[0].content.map((item, index) => (
          <div className="items" key={index}>
            <div className="title">{item.age}</div>
            <div className="container-items">
              {item.content.map((content, index2) => (
                <div className="item" key={index2}>
                  <div className="sub-title">{content.title}</div>
                  <div className="content">{content.description}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export { AuthorTimeline }
