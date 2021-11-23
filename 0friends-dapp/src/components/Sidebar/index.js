import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink onClick={toggle} to="about">
                        About
                    </SidebarLink>
                    <SidebarLink onClick={toggle} to="discover">
                        Discover
                    </SidebarLink>
                    <SidebarLink onClick={toggle} to="services">
                        Services
                    </SidebarLink>
                    <SidebarLink onClick={toggle} to="media">
                        Media
                    </SidebarLink>
                    <SideBtnWrap>
                        <SidebarRoute onClick={toggle} to="/connect">Connect Wallet</SidebarRoute>
                    </SideBtnWrap>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
