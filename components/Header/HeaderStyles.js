import Link from "next/link";
import { styled } from "styled-components";

export const HeaderContainer = styled.div`
    width: 100%;
    height: 100px;
    background: linear-gradient(154deg, rgba(0, 32, 82, 1) 0%, rgba(0, 62, 109, 1) 25%, rgba(0, 92, 153, 1) 100%);
    color: ${props => props.theme.colors.background1};
    display: flex;
    gap: 2rem;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 5;
`
export const LinksMenu = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1.5rem;
  margin-left: auto;
  margin-right: 1rem;
  
  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`;

export const LinkDiv = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.background1};
  margin: 0.5rem 0;

  &:hover {
    transform: scale(1.2);
    border-bottom: 5px solid ${(props) => props.theme.colors.background1};
    border-radius: 5px; 
  }

  &.active,
  &:active {
    border-bottom: 5px solid ${(props) => props.theme.colors.background1};
    border-radius: 5px;
  }
`

export const BurgerMenu = styled.div`
  display: none;
  position: relative;
  margin-left: auto;
  z-index: 5;

  svg {
    fill: ${(props)=>props.theme.colors.background1};
    transition: 0.3s ease;
    border-radius: 50px;
    margin-right: 1rem;
    
    &:hover {
      transform: scale(1.2);
      cursor: pointer;
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: block;
  }
`;

export const BurgerContainer = styled.div`
  display: flex;
  z-index: 0;
  background: linear-gradient(20deg, rgba(0, 62, 109, 1) 0%, rgba(0, 92, 153, 1) 100%);
  align-items: flex-end;
  flex-direction: column;
  padding: 0 2rem 2rem 2rem;
  font-size: 1.8rem;
  position: fixed;
  top: 100px;
  right: 0;
  border-radius: 0 0 25px 25px;
  box-shadow: 0 0 5 rgba(0,0, 0,0.2);
`;

export const TextContainer = styled.div`
  color: ${(props)=>props.theme.colors.accent1};
  font-size: 1rem;
  width: 25%;
  z-index: 5;

  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }

  @media screen and (min-width: 954px) {
    display: block;  
  }
`