import Image from "next/image";
import styled from "styled-components";

export const HeaderStyled = styled.header`
    width: 100%;
    background-color: var(--bgMain);
    padding: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ImageStyled = styled(Image)`
    height: auto;
    width: 150px;
`