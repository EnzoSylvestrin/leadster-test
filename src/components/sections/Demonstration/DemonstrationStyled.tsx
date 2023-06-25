import styled from "styled-components";

import { TextStyled } from "@/components/Text/TextStyled";

import { Container, SimpleImage, Wrapper } from "../../../styles/globalStyles/Commom";

import { motion } from 'framer-motion';

export const ContainerDemonstration = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px 0;

    @media (max-width: 840px) {
        flex-direction: column-reverse;
        gap: 30px;
    }
`;

export const WrapperText = styled(Wrapper)`
    @media (max-width: 840px) {
        justify-content: center;
        align-items: center;
    }
`;

export const TextReady = styled(TextStyled)`
    @media (max-width: 840px) {
        text-align: center;
        margin: 8px 10px;
    }
`;

export const TextCriation = styled(TextStyled)`
    @media (max-width: 840px) {
        text-align: center;
    }
`;

export const Separator = styled.div`
    width: 2px;
    height: 20px;
    background-color: #acaaaa;

    @media (max-width: 1052px) {
        background-color: transparent;        
    }
`;

export const ComparationImageAnimation = styled(motion.div)`

`;

export const ComparationImage = styled(SimpleImage)`
    
    @media (max-width: 1100px) {
        width: 450px;
    }

    @media (max-width: 950px) {
        width: 380px;
    }

    @media (max-width: 430px) {
        width: 280px;
    }
`;

export const WrapperButton = styled(Wrapper)`
    flex-wrap: wrap;

    @media (max-width: 840px) {
        justify-content: center;
        align-items: center;
    }
`;

export const WrapperNotes = styled(Wrapper)`
    flex-wrap: wrap;

    @media (max-width: 840px) {
        justify-content: center;
        align-items: center;
    }
`;