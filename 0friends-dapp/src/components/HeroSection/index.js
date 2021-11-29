import React, { useState } from 'react';
import { HeroContainer, HeroBg, VideoBg, HeroContent, Column1, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Column2, Column3 } from './HeroElements';
import Video from '../../videos/video8.mp4';
import { Button } from '../Buttons';
import { FaDiscord, FaTwitter, FaReddit, FaInstagram } from 'react-icons/fa';
import { InfoRow, SocialMedia, SocialMediaWrap, SocialIcons,  SocialIconLink, InfoWrapper } from './HeroElements';
import Card from '../CardComponent/CardComponent.tsx';

function HeroSection() {

    const [ hover, setHover ] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <InfoRow>
                <Column1>
                    <TextWrapper>
                        <TopLine>CHERRY SOLANA MINTING</TopLine>
                        <Heading>NEW CHERRY COLLECTION</Heading>
                        <Subtitle>3,728 NFTs & 3,728 PLAYING TOKENS</Subtitle>
                        
                        <SocialMedia>
                            <SocialMediaWrap>
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
                        
                            <BtnWrap>
                                <Button to='home' smooth={true} duration={500} spy={true} exact="true" offset={-80} >MINT NOW!</Button>
                            </BtnWrap> 
                  
                    </TextWrapper>
                </Column1>
                <Column2>
                    <InfoWrapper>
                        <Card />
                    </InfoWrapper>
                </Column2>
                <Column3>
                    <InfoWrapper>
                    <Card />
                    </InfoWrapper>
                </Column3>
                </InfoRow>
            </HeroContent>
            
     </HeroContainer>
    );
};

export default HeroSection;
