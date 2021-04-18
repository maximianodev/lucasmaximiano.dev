import { ThemeContext } from 'styled-components'
import { useContext } from 'react'
import * as S from '../../styles/components/Header/styles'
import Link from 'next/link'
interface Props {
    toggleTheme: () => void;
}

function Header(props: Props) {
    const { colors, title } = useContext(ThemeContext)

    function handleClick() {
        props.toggleTheme()

        if(title === "dark") {
            return new Audio('/sounds/switch-on.mp3').play()
        } else {
            return new Audio('/sounds/switch-off.mp3').play()
        }
    }

    function mouseOnMenu() {
        return new Audio('/sounds/menu-open.mp3').play()
    }

    return (
        <div className="container">
            <S.Container>
                <S.Logo>
                    <a href="/" onMouseOver={mouseOnMenu}>
                        Sr.Max
                    </a>
                </S.Logo>
                <S.Nav>
                    <S.Button
                        onClick={handleClick}
                    >
                        <S.Alert className="material-icons material-icons-outlined">expand_more</S.Alert>
                        <img src="/images/sol.svg" alt="sol" style={title === 'dark' ? { width: '40px' } : { width: '0px' }} />
                        <img src="/images/lua.svg" alt="lua" style={title === 'light' ? { width: '40px' } : { width: '0px' }} />
                    </S.Button>
                    <a href="/" onMouseOver={mouseOnMenu}>Inicio</a>
                    <a href="/about" onMouseOver={mouseOnMenu}>Sobre</a>
                </S.Nav>

            </S.Container>
        </div>
    )
}

export default Header