import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Section1 = styled.section`
	margin: 4rem 0;
	${media.lessThan('large')`
        padding: 0 15px;
	    margin: 2rem 0;
    `}
	${({ theme }) => css`
		h2 {
			font-size: ${theme.sizes.xxxlarge};
			line-height: 0.9;
			${media.lessThan('large')`
                font-size: ${theme.sizes.xxlarge};
            `}
		}
		.section-2 {
			display: flex;
			flex-direction: column;
			align-items: flex-end;

			small,
			span {
				display: block;
			}
			small {
				font-size: ${theme.sizes.small};
			}
		}
	`}
`;
export const Section2 = styled.section`
	margin-bottom: 4rem;
	${media.lessThan('large')`
        padding: 0 15px;
	    margin-bottom: 2rem;
    `}
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		align-items: flex-end;

		small {
			display: block;
			margin-bottom: 2rem;
			font-size: ${theme.sizes.medium};
			${media.lessThan('large')`
                font-size: ${theme.sizes.small};
			    margin-bottom: 1rem;
            `}
			i {
				border-bottom: 2px solid ${theme.colors.colorText};
			}
		}
		h2 {
			font-size: ${theme.sizes.xxxlarge};
			text-align: right;
			line-height: 0.7;
			color: ${theme.colors.background};
			-webkit-text-stroke: 2px ${theme.colors.colorText};
			${media.lessThan('large')`
                font-size: ${theme.sizes.xxlarge};
			    line-height: .9;
            `}
			span {
				display: block;
				font-size: ${theme.sizes.xlarge};
				-webkit-text-stroke: unset;
				color: ${theme.colors.colorText};
				${media.lessThan('large')`
                    font-size: ${theme.sizes.small};
                    font-weight: ${theme.font.weight.normal};
                `}
			}
		}
		p {
			width: 70%;
			text-align: right;
			margin-top: 1rem;
			line-height: 1.5;
			${media.lessThan('large')`
			    width: 100%;
            `}
		}
	`}
`;

export const Section3 = styled.section`
	${({ theme }) => css`
		margin-bottom: 4rem;
		${media.lessThan('large')`
			padding: 0 15px;
			margin-bottom: 2rem;
		`}
		h2 {
			text-transform: uppercase;
			letter-spacing: 1rem;
		}

		> img {
			width: 100px;
		}
		.projects {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr ;
			grid-gap: 2rem;

			${media.lessThan('large')`
				grid-template-columns: 1fr 1fr;
				grid-gap: 15px;
			`}

			.item {
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
			}
			.description {
				list-style: none;
				font-size: 16px;
				.title {
					display: block;
					margin-bottom: 1rem;
					font-size: ${theme.sizes.xlarge};
					font-weight: bold;
					color: ${theme.colors.background};
					-webkit-text-stroke: 1.5px ${theme.colors.colorText};
				}
				li {
					display: flex;
					align-items: center;
					&:not(:last-child) {
						margin-bottom: 0.3rem;
					}
					strong {
						display: flex;
						align-items: center;
						margin-right: .4rem;
						span {
							font-size: 18px;
							display: block;
							margin-right: .2rem;
						}
					}
					a {
						display: inline-block;
						color: ${theme.colors.colorText};
						font-style: italic;
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
				}
			}
		}
	`}
`;
export const Section4 = styled.section`
	${({ theme }) => css`
		@-moz-keyframes spin {
			100% {
				-moz-transform: rotate(360deg);
			}
		}
		@-webkit-keyframes spin {
			100% {
				-webkit-transform: rotate(360deg);
			}
		}
		@keyframes spin {
			100% {
				-webkit-transform: rotate(360deg);
				transform: rotate(360deg);
			}
		}
		background-color: ${theme.colors.colorText};
		color: ${theme.colors.background};
		.container {
			padding: 4rem 0;
			${media.lessThan('large')`
                padding: 2rem 15px;
            `}
		}
		h2 {
			font-size: 200px;
			line-height: 0.7;
			padding-top: 1rem;
			${media.lessThan('large')`
                font-size: 87px;
            `}
		}
		.items {
			margin-top: 2rem;
			&:not(:last-child) {
				margin-bottom: 1rem;
			}
			.title {
				margin-bottom: 1rem;
			}
			.container-items {
				position: relative;
				margin-bottom: 1rem;
				padding-left: 1.5rem;

				.item {
					position: relative;
					&:not(:last-child) {
						margin-bottom: 1rem;
					}
					&::before {
						content: '';
						position: absolute;
						display: block;
						height: 10px;
						width: 10px;
						left: -1.5rem;
						top: 7px;
						/* transform: translate(-47%, -50%); */
						background: ${theme.colors.background};
						-webkit-animation: spin 4s linear infinite;
						-moz-animation: spin 4s linear infinite;
						animation: spin 4s linear infinite;
					}
					.sub-title {
						font-weight: ${theme.font.weight.bold};
					}
					.content {
						padding-left: 1rem;
						font-style: italic;
					}
				}
			}
		}
	`}
`;
