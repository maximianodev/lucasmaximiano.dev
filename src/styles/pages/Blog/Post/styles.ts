import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.article`
  ${({ theme }) => css`
    ${media.lessThan('large')`
            padding: 15px;
		`}
    h1 {
      font-size: 60px;
      ${media.lessThan('large')`
                font-size: 30px;
            `}
    }
    .author {
      display: flex;
      align-items: center;
      margin: 2rem 0;
      img {
        width: 80px;
        height: 80px;
        object-fit: cover;
        object-position: center;
        border-radius: 100%;
      }
      span {
        margin-left: 1rem;
        font-size: 1rem;
        font-weight: bold;
      }
    }
    .tags {
      display: flex;
      gap: 1rem;
      margin-bottom: 3rem;
      margin-top: 1rem;
      span {
        background-color: ${theme.colors.colorText};
        color: ${theme.colors.background};
        padding: 0.15rem 0.25rem;
        font-weight: bold;
        text-transform: uppercase;
        display: block;
        font-size: 0.75rem;
        line-height: 1;
      }
    }
    .content {
      font-size: 1.2rem;
      p {
        margin: 1.3rem 0;
        line-height: 2;
      }
      a {
        font-size: 2rem;
        color: ${theme.colors.colorText};
      }
    }
  `}
`
