import React, { Dispatch, ReactElement, SetStateAction } from 'react'
import { useState } from 'react'
import * as S from '../../styles/components/Modal/index'
interface Props {
  data: {
    image: {
      url: string
    }
    title: string
    github: string
    url: string
    typeAplication: Array<string>
    shortDescription: {
      text: string
    }
    language: string
    framework: string
    libraries: string
    databases: string
  }
}

export default function Modal({ data }: Props): ReactElement {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <S.Title className="data" onClick={handleClick}>
        <img src={data.image.url} alt={data.title} />
        <span className="title">
          {data.title}
          <div className="links">
            <a href={data.github} target="_blank" rel="noopener noreferrer">
              <span className="material-icons material-icons-outlined">
                code
              </span>
            </a>
            <a href={data.url} target="_blank" rel="noopener noreferrer">
              <span className="material-icons material-icons-outlined">
                link
              </span>
            </a>
          </div>
        </span>
        <span className="flag-type">
          {data.typeAplication.map((type, index) => (
            <i key={index}>{type}</i>
          ))}
        </span>
        <span className="short-description">{data.shortDescription.text}</span>
      </S.Title>
      <S.Content
        style={
          isOpen ? { top: '0', opacity: '1' } : { top: '-250vw', opacity: '0' }
        }
      >
        <div className="overlay" onClick={() => setIsOpen(false)}></div>
        <div className="children">
          <div className="close" onClick={() => setIsOpen(false)}>
            <span className="material-icons material-icons-outlined">
              close
            </span>
          </div>
          <ul className="description">
            <span className="title">{data.title}</span>
            {data.language ? (
              <li>
                <strong>
                  <span className="material-icons material-icons-outlined">
                    language
                  </span>
                  Linguagem:
                </strong>{' '}
                {data.language}
              </li>
            ) : null}
            {data.framework ? (
              <li>
                <strong>
                  <span className="material-icons material-icons-outlined">
                    build
                  </span>
                  Framework:
                </strong>{' '}
                {data.framework}
              </li>
            ) : null}
            {data.libraries ? (
              <li>
                <strong>
                  <span className="material-icons material-icons-outlined">
                    library_books
                  </span>
                  Libraries:
                </strong>{' '}
                {data.libraries}
              </li>
            ) : null}
            {data.github ? (
              <li>
                <strong>
                  <span className="material-icons material-icons-outlined">
                    code
                  </span>
                  GitHub:
                </strong>{' '}
                <a href={data.github} target="_blank" rel="noopener noreferrer">
                  {data.github}
                </a>
              </li>
            ) : null}
            {data.url ? (
              <li>
                <strong>
                  <span className="material-icons material-icons-outlined">
                    link
                  </span>
                  Url:
                </strong>{' '}
                <a href={data.url} target="_blank" rel="noopener noreferrer">
                  {data.url}
                </a>
              </li>
            ) : null}
            {data.typeAplication ? (
              <li>
                <strong>
                  <span className="material-icons material-icons-outlined">
                    developer_board
                  </span>
                  Tipo de Aplicação:
                </strong>{' '}
                <span className="flag-type">
                  {data.typeAplication.map((type, index) => (
                    <i key={index}>{type}</i>
                  ))}
                </span>
              </li>
            ) : null}
            {data.databases ? (
              <li>
                <strong>
                  <span className="material-icons material-icons-outlined">
                    save
                  </span>
                  Databases:
                </strong>{' '}
                {data.databases}
              </li>
            ) : null}
          </ul>
        </div>
      </S.Content>
    </>
  )
}
