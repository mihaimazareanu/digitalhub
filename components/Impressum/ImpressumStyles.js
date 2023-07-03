import styled from "styled-components";

export const LegalsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 100px auto 0;
    justify-content: center;
    font-size: 1rem;
    
    h1 {
        margin: 1rem 0 0.5rem;
        font-family: "Futura", sans-serif;
        font-size: 2rem;
        letter-spacing: 5px;
        text-align: center;
    }
    
    h2, h3, h4 {
        font-family: "Futura", sans-serif;
        letter-spacing: 2px;
        margin: 0.5rem 0; 
        font-size: 1.4rem;
    }

    h2 {
        font-size: 1.7rem;
    }

    h4 {
        font-size: 1.3rem;
        margin-bottom: 0;
    }

    p {
        padding: 0 1rem;
        font-size: 1.1rem;
        line-height: 1.5rem;
        letter-spacing: 1px;
        text-align: justify;
        margin-bottom: 0.5rem;
    }
`
export const Address = styled.div`
    margin-bottom: 1rem;

    p {
        margin: 0 auto;
    }
`

export const ContactContainer = styled.div`
    display: flex;
    align-items: center;
`

export const GoldTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    //color: ${(props)=>props.theme.colors.accent1};

    p:first-of-type {
        margin: 0;
    } 

    & p:last-of-type {
        margin-top: 1rem;
    }
`
export const NoMarginBottom = styled.div`
    p {
        margin-bottom: 0;
    }
`