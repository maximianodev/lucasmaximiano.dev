import React, { useState } from 'react'
import Head from 'next/head'
import * as S from '../styles/pages/Index/styles'
import { request, gql } from 'graphql-request'
import { getDataHome } from '../graphql/queries/getHomeData'
import Modal from '../components/Modal'

export const getStaticProps = async () => {
  const response = await request(process.env.GRAPHQL_URL, getDataHome)

  return {
    revalidate: 518400, // 6 Days
    props: {
      data: response
    }
  }
}
interface Me {
  data: {
    author: {
      name: string
      biography: string
      projects: [
        {
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
      ]
      timelines: [
        {
          content: [
            {
              age: number
              content: [
                {
                  title: string
                  description: string
                }
              ]
            }
          ]
        }
      ]
    }
  }
}

const Index: React.FC<Me> = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const me = props.data.author
  
  function timeOfMoment() {
    const date = new Date();
    const hours = date.getHours();
    let time;
    if (hours < 12) {
      time = "Bom Dia"
    } else if (hours < 18) {
      time = "Boa Tarde"
    } else {
      time = "Boa Noite"
    }
    return time;
  }

  const handleClickItem = (ev) => {
    ev.stopPropagation()
    setModalIsOpen(!modalIsOpen)
  }

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <div className="container">
          <S.Section1>
            <h2>Desenvolvedor</h2>
            <p>e Analista de Sistemas</p>
          </S.Section1>
        </div>
        <div className="container">
          <S.Section2>
            <small>Olá <i>{timeOfMoment()}!</i></small>
            <h2>
              <span>Sou</span>
              {me.name}
            </h2>
            <p>
              {me.biography}
            </p>
          </S.Section2>
        </div>
        <div className="container">
          <S.Section3>
            <h2>
              Projetos
            </h2>
            <img src="/images/building.gif" />
            <div className="projects">
              {
                me.projects.map((item, index) => (
                  <div key={index}>
                    <div className="item" onClick={handleClickItem}>
                      <img src={item.image.url} alt={item.title} />
                      <span className="title">{item.title}
                        <div className="links">
                          <a href={item.github} target="_blank" rel="noopener noreferrer">
                            <span className="material-icons material-icons-outlined">code</span>
                          </a>
                          <a href={item.url} target="_blank" rel="noopener noreferrer">
                            <span className="material-icons material-icons-outlined">link</span>
                          </a>
                        </div></span>
                      <span className="flag-type">{item.typeAplication.map((type, index) => <i key={index}>{type}</i>)}</span>
                      <span className="short-description">{item.shortDescription.text}</span>
                    </div>
                    <Modal openModal={modalIsOpen} setModalIsOpen={setModalIsOpen}>
                      <ul className="description">
                        <span className="title">{item.title}</span>
                        {item.language ? <li><strong><span className="material-icons material-icons-outlined">language</span>Linguagem:</strong> {item.language}</li> : null}
                        {item.framework ? <li><strong><span className="material-icons material-icons-outlined">build</span>Framework:</strong> {item.framework}</li> : null}
                        {item.libraries ? <li><strong><span className="material-icons material-icons-outlined">library_books</span>Libraries:</strong> {item.libraries}</li> : null}
                        {item.github ? <li><strong><span className="material-icons material-icons-outlined">code</span>GitHub:</strong> <a href={item.github} target="_blank" rel="noopener noreferrer">{item.github}</a></li> : null}
                        {item.url ? <li><strong><span className="material-icons material-icons-outlined">link</span>Url:</strong> <a href={item.url} target="_blank" rel="noopener noreferrer">{item.url}</a></li> : null}
                        {item.typeAplication ? <li><strong><span className="material-icons material-icons-outlined">developer_board</span>Tipo de Aplicação:</strong> <span className="flag-type">{item.typeAplication.map((type, index) => <i key={index}>{type}</i>)}</span></li> : null}
                        {item.databases ? <li><strong><span className="material-icons material-icons-outlined">save</span>Databases:</strong> {item.databases}</li> : null}
                      </ul>
                    </Modal>
                  </div>
                ))
              }
            </div>
          </S.Section3>
        </div>
        <S.Section4>
          <h2>
            linha do tempo
          </h2>
          <div className="container">
            {
              me.timelines[0].content.map((item, index) => (
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
              ))
            }
          </div>
        </S.Section4>
      </div>
    </>
  )
}

export default Index;