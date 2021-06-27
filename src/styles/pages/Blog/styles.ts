import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
	${({ theme }) => css`
		${media.lessThan('large')`
		`}
		.container {
			min-height: 60vh;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-bottom: 2rem;
			${media.lessThan('large')`
				padding: 15px;
			`}
			.cards {
				width: 100%;
				display: flex;
				justify-content: space-around;
				${media.lessThan('large')`
					flex-direction: column;
					text-align: center;
				`}
				a {
					display: block;
					margin: 2rem 0;
					font-size: 60px;
					line-height: 0.7;
					color: ${theme.colors.background};
					-webkit-text-stroke: 2px ${theme.colors.colorText};
					font-weight: ${theme.font.weight.bold};
					text-transform: lowercase;
					text-decoration: none;
					&::after {
						content: '';
						display: block;
						width: 0%;
						border-bottom: 3px solid transparent;
						-webkit-transition: all 0.2s linear;
						transition: all 0.2s linear;
						margin-top: .4rem;
					}
					&:hover {
						&::after {
							border-color: ${theme.colors.colorText};
							width: 100%;
						}
					}
				}
			}
		}
	`}
`;
