import React, { ReactNode } from 'react'
import Head from 'next/head'

interface MetaProps {
  dynamicMeta?: ReactNode
}

const Meta = ({ dynamicMeta }: MetaProps): JSX.Element => {
  if (dynamicMeta) {
    return (
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        {dynamicMeta}
      </Head>
    )
  }

  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <meta property="og:title" content="Lucas Maximiano" />
      <meta property="og:url" content="https://lucasmaximiano.vercel.app/" />
      <meta property="og:type" content="Web Development" />
      <meta
        property="og:image"
        content="https://media.graphassets.com/resize=height:300,width:300/wQP1y5QwR0GPUhLC95bQ"
      />
      <meta
        property="og:description"
        content="
      Hi!

      My name is Lucas, I'm Software Engineer and graduated in Systems Analysis and Development at UNICSUL.
      
      During my journey I worked on several projects, from national to international. My focus today is e-commerce.
      
      My working Stack is Front-end based with React. However, I like to venture into the Back-end a bit, but nothing too deep.
      
      Here you will find a little bit of everything, Technical Knowledge, Soft Skills and other topics.
      
      Be welcome."
      />
      <meta
        name="description"
        content="
      Hi!

      My name is Lucas, I'm Software Engineer and graduated in Systems Analysis and Development at UNICSUL.
      
      During my journey I worked on several projects, from national to international. My focus today is e-commerce.
      
      My working Stack is Front-end based with React. However, I like to venture into the Back-end a bit, but nothing too deep.
      
      Here you will find a little bit of everything, Technical Knowledge, Soft Skills and other topics.
      
      Be welcome."
      />
    </Head>
  )
}

export { Meta }
