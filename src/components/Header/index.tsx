import { ThemeContext } from 'styled-components'
import { useContext } from 'react'
import * as S from '../../styles/components/Header/styles'
import Image from 'next/image'
import Link from 'next/link'
import useSound from 'use-sound';
interface Props {
    toggleTheme: () => void;
}

function Header(props: Props) {
    const { colors, title } = useContext(ThemeContext)
    
    return (
        <div className="container">
            <S.Container>
                <S.Logo>
                    <Link href="/">
                        Sr.Max  
                    </Link>
                </S.Logo>
                <S.Nav>
                    <S.Button
                        onClick={props.toggleTheme}
                    >
                        <S.Alert className="material-icons material-icons-outlined">expand_more</S.Alert>
                        <img src="/images/sol.svg" alt="sol" style={title === 'dark' ? {width: '40px'} : {width: '0px'}} />
                        <img src="/images/lua.svg" alt="lua" style={title === 'light' ? {width: '40px'} : {width: '0px'}} />
                    </S.Button>
                    <Link href="/">Inicio</Link>
                    <Link href="/about">Sobre</Link>
                </S.Nav>

            </S.Container>
        </div>
    )
}

export default Header