import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { Nav, NavbarContainer, MobileIcon, NavMenu, NavItem, NavLinks, NavbarWalletBtn, NavbarWalletBtnRoute, ImgWrap, Img } from './NavbarElements';
import img from '../../assets/img/logo-ct.png'

const Navbar = ({ toggle }) => {

    const [ scrollNav, setScrollNav ] = useState(false) 

    const changeNav = () => {
        if( window.scrollY >= 80 ) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    useEffect( () => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <ImgWrap to="/" onClick={toggleHome}>
                        <Img src={img} alt={''}/>
                    </ImgWrap>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" smooth={true} duration={500} spy={true} exact="true" offset={-80}>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="rarities" smooth={true} duration={500} spy={true} exact="true" offset={-80}>Rarities</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="gamearn" smooth={true} duration={500} spy={true} exact="true" offset={-80}>Gamearn</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="roadmap" smooth={true} duration={500} spy={true} exact="true" offset={-80}>Roadmap</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavbarWalletBtn>
                        <NavbarWalletBtnRoute to="/">Connect Wallet</NavbarWalletBtnRoute>
                    </NavbarWalletBtn>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    );
};

export default Navbar;
