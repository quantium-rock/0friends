import styled from 'styled-components';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';
import COLORS from '../Colors';

export const HeroContainer = styled.div`
    background-color: ${COLORS.black};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 1000px;
    position: relative;
    z-index: 1;
    width: 100%;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient( 180deg, rgba(0,0,0,0.2) 0%,  rgba(0,0,0,0.6) 100% ), linear-gradient( 180deg, rgba(0,0,0,0.2) 0%, transparent 100% );
        z-index: 2;
    }
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: transparent;
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: transparent;
    filter: brightness(100%);
`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`;

export const InfoContainer = styled.div`
    color: ${COLORS.white};
    background: ${ ({lightBg}) => ( lightBg ? COLORS.white2 : COLORS.black2 ) };

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const InfoWrapper = styled.div`
    display: flex;
    z-index: 4;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
    align-items: center;
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: 'col2 col1 col3';

    @media screen and (max-width: 768px) {
        grid-template-areas: ${ ({imgStart}) => ( imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'` ) };
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    justify-content: center;
    align-items: center;
    grid-area: col2;
    margin-left: 400px;
`;

export const Column3 = styled.div`
    justify-content: center;
    align-items: center;
    grid-area: col3;
    margin-right: 400px;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;

`;

export const TopLine = styled.p`
    text-align: center;
    background: -webkit-linear-gradient(180deg,${COLORS.tertiary}, ${COLORS.secondary}, ${COLORS.primary} );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    text-align: center;
    margin-bottom: 24px;
    font-size: 52px;
    line-height: 1.1;
    font-weight: 800;
    color: ${COLORS.white};
    text-shadow: 0px 0px 28px ${COLORS.secondary};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const Subtitle = styled.h2`
    text-align: center;
    font-size: 24px;
    line-height: 1.1;
    font-weight: 300;
    color: ${COLORS.primary};

    @media screen and (max-width: 480px) {
        font-size: 16px;
    }
`;

export const BtnWrap = styled.div`
    margin: 24px;
    display: flex;
    justify-content: center;
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
    align-items: center;
    justify-content: center;
`;

export const Img = styled.img`
    width: 20%;
    margin: auto auto;
    padding-right: 0;
`;

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`;

export const SocialMediaWrap = styled.div` 
    display: flex;
    margin: 32px ;
    justify-content: center;
    align-items: center;
    max-width: 1100px;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 340px;
`;

export const SocialIconLink = styled.a`
    color: ${COLORS.white};
    font-size: 32px;
    margin: 14px 0 14px;

    &:hover {
        color: ${COLORS.secondary};
        font-size: 38px;
    }
`;
