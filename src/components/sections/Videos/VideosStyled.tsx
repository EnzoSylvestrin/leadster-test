import styled from "styled-components";

import { motion } from 'framer-motion';

import { Container, SimpleImage, Wrapper } from "@/styles/globalStyles/Commom";

export const ContainerVideos = styled(Container)`
    margin: 40px 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const GridVideos = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
`;

export const ThumbnailImage = styled(SimpleImage)`
    background-size: cover;
`;

export const Video = styled(motion.div)`
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-radius: 0px 0px 8px 8px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;

    p {
        padding: 0px 10px;
        margin-bottom: 10px;
    }

    :hover {
        border-radius: 8px;
        color: var(--main);
    }
`;

export const WrapperVideos = styled(Wrapper)`
    @media (max-width: 1020px) {
        width: 85%;
    }

    @media (max-width: 768px) {
        width: 93%;
    }
`;

export const WrapperFilters = styled(Wrapper)`
    flex-wrap: wrap;
`;

export const WrapperPagination = styled(Wrapper)`
`;

export const WrapperCards = styled(Wrapper)`
    flex-wrap: wrap;

    @media (max-width: 1100px) {
        width: 100%;
    }
`;

export const WrapperSelect = styled(Wrapper)`

    @media (max-width: 1100px) {
        margin-top: 16px;
        width: 100%;
    }
`;