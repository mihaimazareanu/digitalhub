import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
   background: linear-gradient(154deg, rgba(0, 32, 82, 1) 0%, rgba(0, 62, 109, 1) 25%, rgba(0, 92, 153, 1) 100%);
    //background-color: ${(props)=>props.theme.colors.background2};
    color: ${(props)=>props.theme.colors.background1};
    width: 100%;
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    margin-top: 1rem;
    //padding: 1rem 0 1rem 1rem;
    z-index: 5;
`

export const Links = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    font-size: 1.4rem;
    margin-top: 1rem;
`

export const TextDiv = styled.div`
    margin: 1rem 0 0 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    /* Safari specific styling for phone numbers */
    @media not all and (min-resolution:.001dpcm) { 
        @supports (-webkit-appearance:none) {
          color: ${(props) => props.theme.colors.background1};
          text-decoration: none;
        }
      }
`

export const LinkDiv = styled(Link)`
  color: ${(props)=>props.theme.colors.background1};
  text-decoration: none;
    
  :hover {
    transform: scale(1.2);
  }
`

export const NoHoverLink = styled(Link)`
  color: ${(props)=>props.theme.colors.background1};
  text-decoration: none;
`