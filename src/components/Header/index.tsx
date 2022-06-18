import React from 'react'
import Link from 'next/link'

const Header = (): JSX.Element => {
  return (
    <header>
      <Link href="/">
        <a>
          <span>Lucas Maximiano</span>
        </a>
      </Link>

      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export { Header }
