import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
	${({ theme }) => css`
        margin: 1rem 0;
        > span {
            display: flex;
            align-items: center;
            cursor: pointer;
        }
        .material-icons {
            margin-right: .5rem;
        }
	`}
`;
