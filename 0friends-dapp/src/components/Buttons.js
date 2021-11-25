import styled from 'styled-components';
import { Link } from 'react-scroll';
import COLORS from './Colors';

export const Button = styled(Link)` 
    border-radius: 50px;
    background: ${ ({primary}) => ( primary ? COLORS.primary : COLORS.secondary ) };
    whit-space: nowrap;
    padding: ${ ({big}) => ( big ? '14px 48px' : '12px 30px' ) };
    color: ${ ({dark}) => ( dark ? COLORS.black2 : COLORS.white ) };
    font-size: ${ ({fontBig}) => ( fontBig ? '20px' : '16px' ) };
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${ ({primary}) => ( primary ? COLORS.white : COLORS.primary ) };
    }

`;

export const WalletBtn = styled(Link)` 
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
      display: none;
  }
`;

export const WalletBtnLink = styled(Link)` 
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
    font-size: 14px;
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
