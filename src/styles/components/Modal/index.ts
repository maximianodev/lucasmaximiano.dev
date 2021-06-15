import styled, { css } from 'styled-components';
import media from 'styled-media-query';

const Title = styled.div`
	${({ theme }) => css`
		width: 100%;

		padding: 15px;

		position: relative;
		overflow: hidden;

		border: 1px solid ${theme.colors.overlay};

		display: flex;
		justify-content: center;
		flex-direction: column;

		cursor: pointer;

		> img {
			width: 100%;
			height: auto;
			margin-bottom: 1rem;
		}

		span {
			&:not(:last-child) {
				margin-bottom: 0.3rem;
			}
		}

		.title {
			font-weight: ${theme.font.weight.bold};
			font-size: ${theme.sizes.large};

			display: flex;
			justify-content: space-between;
			.links {
				a {
					text-decoration: none;
					color: ${theme.colors.colorText};
					span {
						display: inline-block;
						&:first-child {
							margin-right: 0.3rem;
						}
					}
				}
			}
		}

		.flag-type {
			display: inline-block;
			font-size: 12px;
			width: max-content;
			text-transform: uppercase;
			font-weight: bold;

			i {
				background: ${theme.colors.colorText};
				color: ${theme.colors.background};
				padding: 0.09rem 0.3rem;
				font-style: normal;
				margin-right: 0.2rem;
				display: inline-block;
			}
		}

		.short-description {
			z-index: 1;
			font-size: ${theme.sizes.small};
			font-style: italic;
			width: 100%;
		}
	`}
`;
const Content = styled.div`
	${({ theme }) => css`
		width: 100vw;
		height: 100vh;

		position: fixed;
		top: 0;
		left: 0;
		z-index: 10;

		display: flex;
		justify-content: center;
		align-items: center;

		transition: opacity 0.2s ease-in-out;

		.overlay {
			background-color: ${theme.colors.overlay};
			width: 100%;
			height: 100%;
			z-index: -1;

			position: absolute;
			left: 0;
			top: 0;
		}
		.children {
			position: relative;

			padding: 30px;

			background-color: ${theme.colors.background};
			z-index: 1;
			${media.lessThan('large')`
                margin: 0 15px;
                padding: 15px;
            `}
			.close {
				position: absolute;
				top: 0;
				right: 0;
				font-size: 26px;
				cursor: pointer;
				span {
					color: ${theme.colors.colorText};
					display: block;
					border: 2px solid ${theme.colors.colorText};
				}
				${media.lessThan('large')`
                `}
			}
		}
	`}
`;
export { Content, Title };
