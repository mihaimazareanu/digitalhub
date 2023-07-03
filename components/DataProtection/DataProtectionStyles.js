import Link from "next/link";
import styled from "styled-components";

export const LinksDiv = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    margin-bottom: 1rem;
    justify-content: center;

    p {
        margin: 0;
    }
`

export const StyledLink = styled(Link)`
    color: ${(props)=>props.theme.colors.primary1};
    text-decoration: none;
    margin-left: 1rem;
`

export const StyledList = styled.ul`
    list-style-type: disc;
    margin: 0 0 1rem 2rem;

    li {
        padding: 0 1rem 0 -1rem;
        font-size: 1.2rem;
        line-height: 1.5rem;
        letter-spacing: 1px;
        text-align: justify;
    }

    li::marker {
        color: ${(props)=>props.theme.colors.primary1};
    }
`