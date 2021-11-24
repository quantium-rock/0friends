import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaDiscord, FaTwitter, FaReddit, FaInstagram } from 'react-icons/fa';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons,  SocialIconLink } from './FooterElements';

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Index</FooterLinkTitle>
                            <FooterLink to='about'>About</FooterLink>
                            <FooterLink to='/discover'>Discover</FooterLink>
                            <FooterLink to='/services'>Services</FooterLink>
                            <FooterLink to='/media'>Media</FooterLink>                 
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Community</FooterLinkTitle>
                            <FooterLink to='/signin'>Discord</FooterLink>
                            <FooterLink to='/signin'>Twitter</FooterLink>
                            <FooterLink to='/signin'>Reddit</FooterLink>
                            <FooterLink to='/signin'>Instagram</FooterLink>                    
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Markets</FooterLinkTitle>
                            <FooterLink to='/www.discord.com/'>Artentic.nft</FooterLink> 
                            <FooterLink to='/signin'>Solanart.io</FooterLink>
                            <FooterLink to='/signin'>Margiceden.io</FooterLink>
                            <FooterLink to='/signin'>Opensea.io</FooterLink>                  
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Governance</FooterLinkTitle>
                            <FooterLink to='/terms'>Terms</FooterLink>
                            <FooterLink to='/privacy'>Privacy</FooterLink>
                            <FooterLink to='/charity'>Charity</FooterLink>
                            <FooterLink to='/solana'>Solana</FooterLink>                 
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            orus
                        </SocialLogo>
                        <WebsiteRights>orus © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//www.discord.com/" target="@0friendsclub" aria-label="Discord">
                                <FaDiscord />
                            </SocialIconLink>
                            <SocialIconLink href="//www.twitter.com/" target="@0friendsclub" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="//www.reddit.com/" target="_blank" aria-label="Reddit">
                                <FaReddit />
                            </SocialIconLink>
                            <SocialIconLink href="//www.instagram.com/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>       
        </FooterContainer>
    );
};

export default Footer;
