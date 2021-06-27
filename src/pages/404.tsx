import React, { ReactElement } from 'react'
import * as S from "../styles/pages/404/styles"
import { useRouter } from 'next/router'

interface Props {

}

export default function Custom404({ }: Props): ReactElement {
    const router = useRouter()

    return (
        <S.Container className="container">
            <div>
                <span onClick={() => router.back()}>
                    <span className="material-icons material-icons-outlined">
                        arrow_back
                    </span>
                    voltar
                </span>
                <img src="/images/building.gif" />
            </div>
        </S.Container>
    )
}
