import React, { useState } from 'react';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElements';

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
                <HeroH1> Virtual Banking Made Easy </HeroH1>
                <HeroP>
                    Connect your wallet and start generating profits now
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="services" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                        Get started { hover ? <ArrowForward /> : <ArrowRight /> }
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
