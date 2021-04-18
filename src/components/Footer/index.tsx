import * as S from '../../styles/components/Footer/styles'

function Footer() {
    return (
        <S.Container>
            <div className="container">
                <p>
                    <a href="https://www.google.com.br/maps/place/Bragança Paulista - São Paulo - Brazil" target="_blank" rel="noopener noreferrer">
                        Bragança Paulista - São Paulo - Brazil
                    </a>
                </p>
                <p>
                    <a href="mailto:lucas97lopes@hotmail.com" target="_blank" rel="noopener noreferrer">
                        lucas97lopes@hotmail.com
                    </a>
                </p>
                <p className="social">
                    <a href="https://www.instagram.com/lu.max__/" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://github.com/sr-max" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/lucaslopesmaximiano/" target="_blank" rel="noopener noreferrer">Linkedin</a>
                </p>
            </div>
        </S.Container>
    )
}

export default Footer