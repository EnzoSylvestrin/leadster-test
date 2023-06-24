import Link from "next/link";
import styled from "styled-components"

const buttonStyles = `
    display: flex;
    text-transform: uppercase;
    border-radius: 25px;
    background-color: var(--main);
    color: #fff;
    padding: 16px 24px;
    font-weight: bold;
    border: none;
`

export const Button = styled.button`
    ${buttonStyles}
`

export const ButtonLink = styled.a`
    ${buttonStyles}
`;

export const ButtonNextLink = styled(Link)`
    ${buttonStyles}
`;