import React, { useState } from 'react'
import Head from 'next/head'
import * as S from '../styles/pages/Index/styles'
import { request, gql } from 'graphql-request'
import { getDataHome } from '../graphql/queries/home'
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
        <title>Lucas Maximiano</title>
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
                  <Modal data={item} key={index} />
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