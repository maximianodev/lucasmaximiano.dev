import React, { ReactElement } from 'react'
import * as S from '../styles/pages/404/styles'
import BackButton from '../components/BackButton/index'
interface Props {}

export default function Custom404({}: Props): ReactElement {
  return (
    <S.Container className="container">
      <div>
        <BackButton />
        <img src="/images/building.gif" />
      </div>
    </S.Container>
  )
}
