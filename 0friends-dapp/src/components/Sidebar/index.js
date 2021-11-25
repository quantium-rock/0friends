import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarWalletBtn, SidebarWalletBtnRoute } from './SidebarElements';

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
                    <SidebarLink onClick={toggle} to="rarities">
                        Rarities
                    </SidebarLink>
                    <SidebarLink onClick={toggle} to="gamearn">
                        Gamearn
                    </SidebarLink>
                    <SidebarLink onClick={toggle} to="roadmap">
                        Roadmap
                    </SidebarLink>
                    <SidebarWalletBtn>
                        <SidebarWalletBtnRoute onClick={toggle} to="/connect">Connect Wallet</SidebarWalletBtnRoute>
                    </SidebarWalletBtn>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
