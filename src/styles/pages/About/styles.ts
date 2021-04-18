import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const AboutMk = styled.section`
	${({ theme }) => css`
		.container {
            ${media.lessThan('large')`
                padding: 0 15px; 
                text-align: center;
            `}
			section {
				margin-bottom: 5rem;
                ${media.lessThan('large')`
				    margin-bottom: 2.5rem;
                `}
				img {
					max-width: 500px;
                    ${media.lessThan('large')`
                        width: 100%;
                    `}
				}
				h2 {
					padding-bottom: 2rem;
                    ${media.lessThan('large')`
                        padding-bottom: 1rem;
                    `}
				}
				p {
					line-height: 1.8;
				}
				a {
					color: ${theme.colors.colorText};
					font-weight: ${theme.font.weight.bold};
				}
			}
			.section-1 {
				p {
					margin-bottom: 2rem;
				}
				.images {
					div {
						&:not(:last-child) {
							margin-bottom: 1.5rem;
						}
						img {
							border-radius: 0.3rem;
						}
						small {
							display: flex;
							flex-direction: column;
							color: ${theme.colors.colorText};
							font-weight: ${theme.font.weight.bold};
							span {
								color: ${theme.colors.colorLabel};
								font-weight: ${theme.font.weight.normal};
								font-size: ${theme.sizes.xsmall};
							}
						}
					}
				}
			}
			.section-4 {
				img {
					padding-bottom: 2rem;
					width: 300px;
                    ${media.lessThan('large')`
                        width: 100%;
					    padding-bottom: 1rem;
                    `}
				}
			}
		}
	`}
`;
