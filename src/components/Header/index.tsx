import React from 'react'
import Link from 'next/link'

import type { CustomTheme, DefaultTheme } from 'styled-components'

import { light, dark } from '../../styles/themes/index'

interface HeaderProps {
  themeContext: {
    theme: DefaultTheme
    setTheme: (theme: DefaultTheme) => void
    combineTheme: (theme: CustomTheme) => DefaultTheme
  }
}

const Header = ({ themeContext }: HeaderProps): JSX.Element => {
  const { theme, setTheme, combineTheme } = themeContext

  const isLightTheme = theme.title === 'light' ? true : false

  const toggleTheme = () => {
    if (isLightTheme) {
      return setTheme(combineTheme(dark))
    }

    return setTheme(combineTheme(light))
  }

  function handleSwitchTheme() {
    toggleTheme()

    if (!isLightTheme) {
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
          style={!isLightTheme ? { width: '40px' } : { width: '0px' }}
        />
        <img
          src="/images/lua.svg"
          alt="lua"
          style={isLightTheme ? { width: '40px' } : { width: '0px' }}
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

export { Header }
