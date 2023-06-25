import styled from "styled-components";

import Image from "next/image";

import { motion } from "framer-motion";

import { TextStyled } from "@/components/Text/TextStyled";

import { Container } from "../../../styles/globalStyles/Commom";
import { Line } from "@/components/Line/LineStyled";

export const ContainerPresentation = styled(Container)`
    min-height: calc(100vh - 80px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
`;

export const ContainerAttention = styled.main`
    width: auto;
    position: relative;
`;

export const ImageAnimation = styled(motion.div)`
    position: absolute;
    inset: -1px 2px auto auto;
    user-select: none;

    @media (max-width: 670px) {
        inset: -6px 1px auto auto;   
    }

    @media (max-width: 487px) {
        inset: 48px 20px auto auto;
    }

    @media (max-width: 352px) {
        inset: 34px 30px auto auto;
    }

`;

export const ImageStyled = styled(Image)`
    height: auto;

    @media (max-width: 352px) {
        width: 36px;
    }
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

export const TextConvertion = styled(TextStyled)`
    margin: 0 25px;

    @media (max-width: 670px) {
        font-size: 3.5rem;
    }

    @media (max-width: 487px) {
        width: 336px;
    }

    @media (max-width: 352px) {
        width: 260px;
        font-size: 2.5rem;
    }
`;

export const TextChat = styled(TextStyled)`
    margin: 0 12px;
    @media (max-width: 352px) {
        font-size: 1.5rem;
    }
`;

export const LinePresentation = styled(Line)`
    @media (max-width: 670px) {
        width: 80%;       
    }
`;