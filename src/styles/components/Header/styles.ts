import styled, { css } from 'styled-components'
import media from 'styled-media-query'

const Container = styled.div`
  ${({ theme }) => css`
    padding: 4rem 0;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    position: relative;
    ${media.lessThan('large')`
            padding: 2rem 15px;
       `}
  `}
`
const Logo = styled.h1`
  ${({ theme }) => css`
    a {
      font-family: ${theme.font.family.primary};
      font-size: 36px;
      font-weight: ${theme.font.weight.bold};
      color: ${theme.colors.colorText};
      img {
        width: 100px;
      }
      ${media.lessThan('large')`
                font-size: 24px;
				img {
					width: 80px;
				}
            `}
    }
  `}
`
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background: transparent;

  border: none;
  cursor: pointer;
  margin-bottom: 15px;
  position: relative;

  img {
    transition: all 0.3s ease;
  }
`

const Alert = styled.span`
  @keyframes bounceRight {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-5px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
  ${({ theme }) => css`
    animation: bounceRight 2s infinite;
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    position: absolute;
    top: -50%;
    color: ${theme.colors.colorText};
  `}
`

const Nav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    a {
      color: ${theme.colors.colorText};
      text-decoration: none;
      font-weight: ${theme.font.weight.normal};
      font-size: ${theme.sizes.large};
      text-transform: lowercase;
      text-align: right;
      ${media.lessThan('large')`
                font-size: ${theme.sizes.medium};
            `}
      &:not(:last-child) {
        margin-bottom: 15px;
      }
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
  `}
`

export { Container, Button, Logo, Nav, Alert }
