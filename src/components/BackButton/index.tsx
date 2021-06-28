import React, { ReactElement } from 'react'
import * as S from "../../styles/components/BackButton/styles"
import { useRouter } from 'next/router'

interface Props {

}

export default function BackButton({ }: Props): ReactElement {
    const router = useRouter()

    return (
        <S.Container>
            <span onClick={() => router.back()} className="back-button">
                <span className="material-icons material-icons-outlined">
                    arrow_back
                </span>
                voltar
            </span>
        </S.Container>
    )
}
