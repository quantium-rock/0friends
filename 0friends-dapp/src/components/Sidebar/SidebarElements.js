import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import COLORS from '../Colors';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: ${COLORS.black2};
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${ ({ isOpen }) => ( isOpen ? '100%' : '0%' ) };
    top: ${ ({ isOpen }) => ( isOpen ? '0' : '-100%' ) };
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const CloseIcon = styled(FaTimes)`
    color: ${COLORS.white};
`;

export const SidebarWrapper = styled.div`
    color: ${COLORS.white};
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;
    
    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`;


export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: ${COLORS.white};
    cursor: pointer;

    &:hover {
        color: ${COLORS.black};
        background-image: linear-gradient(to right, ${COLORS.primary} 0%, ${COLORS.secondary}  51%, ${COLORS.tertiary}  100%);
        transition: 0.2s ease-in-out;
    }
`;

export const SidebarWalletBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15%;
`;

export const SidebarWalletBtnRoute = styled(LinkR)`
    background-image: linear-gradient(to right, ${COLORS.primary} 0%, ${COLORS.secondary}  51%, ${COLORS.tertiary}  100%);
    margin: 10px;
    padding: 15px 45px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: ${COLORS.white};            
    box-shadow: 0 0 7px ${COLORS.primary};
    border-radius: 50px;
    display: block;
    white-space: nowrap;
    font-size: 18px;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        background-position: right center;
        color: ${COLORS.black};
        box-shadow: 0 0 14px ${COLORS.secondary};
        text-decoration: none;
    } 
`;
