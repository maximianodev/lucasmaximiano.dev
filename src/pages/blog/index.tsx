import React from 'react'
import Link from 'next/link'
import * as S from '../../styles/pages/Blog/styles'
import Head from 'next/head'

export default function Blog() {
  return (
    <S.Container>
      <div className="container">
        <Head>
          <title>Blog</title>
        </Head>
        <div className="cards">
          <div className="card">
            <Link href="/blog/list/profissional">Profissional</Link>
          </div>
          <div className="card">
            <Link href="/blog/list/pessoal">Pessoal</Link>
          </div>
        </div>
      </div>
    </S.Container>
  )
}
