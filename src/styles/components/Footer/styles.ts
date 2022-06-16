import styled, { css } from 'styled-components'
import media from 'styled-media-query'

const Container = styled.div`
  ${({ theme }) => css`
    border-top: 2px solid ${theme.colors.colorText};
    padding: 4rem 0;

    ${media.lessThan('large')`
            padding: 4rem 15px;
        `}
    a {
      display: inline-block;
      color: ${theme.colors.colorText};
      text-decoration: none;
      &::after {
        content: '';
        display: block;
        width: 0%;
        border-bottom: 3px solid transparent;
        transition: all 0.2s linear;
      }
      &:hover {
        &::after {
          width: 100%;
          border-color: ${theme.colors.colorText};
        }
      }
    }
    p {
      font-size: ${theme.sizes.large};
      ${media.lessThan('large')`
                font-size: ${theme.sizes.small};
            `}
      &:not(:last-child) {
        margin-bottom: 2rem;
        ${media.lessThan('large')`
                    margin-bottom: 1rem;
                `}
      }
    }
    .social {
      a {
        width: max-content;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        color: ${theme.colors.colorText};
        &:not(:last-child) {
          margin-bottom: 0.5rem;
          ${media.lessThan('large')`
                        margin-bottom: .2rem;
                    `}
        }
      }
    }
  `}
`

export { Container }
