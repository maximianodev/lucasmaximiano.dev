import React, { Dispatch, ReactElement, SetStateAction } from 'react'
import styled, { css } from 'styled-components';
import media from 'styled-media-query';

interface Props {
    children: React.ReactNode;
    openModal: boolean;
    setModalIsOpen: Dispatch<SetStateAction<boolean>>;
}

const ModalStyle = styled.div`
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

        transition: opacity .2s ease-in-out;

        .overlay {
            background-color: ${theme.colors.overlay};  
            width: 100%;
            height: 100%;   
            z-index:-1;   

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

export default function Modal({ children, openModal, setModalIsOpen }: Props): ReactElement {
    return (
        <ModalStyle style={openModal ? {top: '0', opacity: '1'} : { top: '-250vw', opacity: '0'}}>
            <div className="overlay" onClick={() => setModalIsOpen(false)}></div>
            <div className="children">
                <div className="close" onClick={() => setModalIsOpen(false)}><span className="material-icons material-icons-outlined">close</span></div>
                {children}
            </div>
        </ModalStyle>
    )
}
