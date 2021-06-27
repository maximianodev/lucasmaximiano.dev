import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
	${({ theme }) => css`
		${media.lessThan('large')`
		`}
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
                height: 220px;
                position: relative;
                ${media.lessThan('large')`
                    width: calc(100% - 30px);
                    height: 300px;
                    margin-left: 15px;
                `}
                h2 {
                    padding: 15px;
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    color: #fff;
                    z-index: 1;
                }
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center;
                    border-radius: 5px;
                    position: relative;
                    filter: brightness(.5);
                }
            }
        }
	`}
`;
