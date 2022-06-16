import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    div > span {
      display: flex;
      align-items: center;
      cursor: pointer;
    }
    .material-icons {
      margin-right: 0.5rem;
    }
    img {
      ${media.lessThan('large')`
                width: 250px;
            `}
    }
  `}
`
