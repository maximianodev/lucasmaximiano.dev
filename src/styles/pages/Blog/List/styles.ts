import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  ${({ theme }) => css`
    ${media.lessThan('large')`
		`}
    .back-button {
      ${media.lessThan('large')`
                margin-left: 15px;
            `};
    }
    > div {
      margin-top: 3rem;
      margin-bottom: 3rem;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 2rem;
      ${media.lessThan('large')`
                grid-template-columns: 1fr;
            `};
      .post {
        width: 100%;
        ${media.lessThan('large')`
                    width: calc(100% - 30px);
                    margin-left: 15px;
                `}
        a {
          display: flex;
          text-decoration: none;
          padding: 15px;
          border-radius: 4px;
          position: relative;
          overflow: hidden;
          &::before {
            position: absolute;
            content: '';
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
          }
          h2 {
            color: #fff;
            z-index: 1;
          }
        }
      }
    }
  `}
`
