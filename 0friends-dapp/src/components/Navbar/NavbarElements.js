import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import COLORS from '../Colors';

export const Nav = styled.nav`
    background: ${ ({scrollNav}) => ( scrollNav ? COLORS.black : 'transparent' ) };
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
    color: ${COLORS.white};
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`;

export const MobileIcon = styled.div`
    display: none;
    
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: ${COLORS.white};
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;  
`;

export const NavLinks = styled(LinkS)`
    color: ${COLORS.white};
    font-size: 16px;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:hover {
        font-size: 22px;
        text-shadow: white 20px;
        transition: 0.2s ease-in-out;
    }

    &.active {
        border-bottom: 3px solid ${COLORS.primary};
        border-image: 3px linear-gradient(90deg, ${COLORS.tertiary} 0%, ${COLORS.secondary} 50%, ${COLORS.primary} 80% );
        background: -webkit-linear-gradient(180deg, ${COLORS.tertiary} 0%, ${COLORS.secondary} 50%, ${COLORS.primary} 80% );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 22px;
        text-shadow: white 20px;
        transition: 0.2s ease-in-out;
    }
`;

export const NavbarWalletBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavbarWalletBtnRoute = styled(LinkR)`
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
    padding: 10px 22px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        background-position: right center;
        color: ${COLORS.white2};
        box-shadow: 0 0 14px ${COLORS.secondary};
        text-decoration: none;
    } 
`;
