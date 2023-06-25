import styled from "styled-components";

import Image from "next/image";

import { Container } from "../globalStyles/Commom";

export const ContainerPresentation = styled(Container)`
    min-height: calc(100vh - 80px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
`;

export const ContainerAttention = styled.div`
    width: auto;
    position: relative;
`;

export const ImageStyled = styled(Image)`
    position: absolute;
    inset: -5px -15px auto auto;
    user-select: none;
`;

export const Holder = styled.div`
    width: 200px;
    border-radius: 20px 20px 20px 0px;
    background-color: transparent;
    border: 2px solid var(--main);
    color: var(--main);
    padding: 6px 12px;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    user-select: none;
`;