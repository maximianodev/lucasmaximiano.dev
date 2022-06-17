import React, { useContext } from 'react'
import Link from 'next/link'
import { ThemeContext } from 'styled-components'

import { combineTheme, light, dark } from '../../styles/themes/index'

interface HeaderProps {
  toggleTheme: () => void
}

function Header({ theme, setTheme }: any) {
  const { title } = useContext(ThemeContext)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? combineTheme(dark) : combineTheme(light))
  }

  function handleSwitchTheme() {
    toggleTheme()

    if (title === 'dark') {
      return new Audio('/sounds/switch-on.mp3').play()
    } else {
      return new Audio('/sounds/switch-off.mp3').play()
    }
  }

  return (
    <div>
      <Link href="/">
        <a>
          <img src="/icons/logo.svg" alt="Lucas Maximiano" title="Inicio" />
        </a>
      </Link>

      <button onClick={handleSwitchTheme}>
        <span className="material-icons material-icons-outlined">
          expand_more
        </span>
        <img
          src="/images/sol.svg"
          alt="sol"
          style={title === 'dark' ? { width: '40px' } : { width: '0px' }}
        />
        <img
          src="/images/lua.svg"
          alt="lua"
          style={title === 'light' ? { width: '40px' } : { width: '0px' }}
        />
      </button>

      <nav>
        <ul>
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <Link href="/about">Sobre</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
