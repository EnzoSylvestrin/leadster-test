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
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px 30px;
    margin: 30px 0px;
`;

export const ThumbnailImage = styled(SimpleImage)`
    background-size: cover;
`;

export const Video = styled(motion.div)`
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-radius: 0px 0px 8px 8px;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
    cursor: pointer;

    p {
        padding: 10px 10px 10px 15px;
        margin-bottom: 10px;
        transition: all 0.4s ease;
    }

    :hover {
        border-radius: 8px;
        color: var(--main);
    }

    :hover img {
        border-radius: 8px 8px 0 0;
        z-index: 1;
    }

    :hover .overlay {
        display: block;
    }

    :hover .play {
        display: flex !important;
    }
`;

export const OverlayImage = styled.div`
    position: absolute;
    inset: 0;
    background-color: rgba(44, 131, 251, 0.5);
    z-index: 2;
    border-radius: 8px 8px 0 0;
    transition: all 0.3s ease;
    display: none;
`;

export const PlayButton = styled.div`
    position: absolute;
    display: none;
    width: 15%;
    height: 50%;
    z-index: 3;
    inset: 50% 50% auto auto;
    align-items: center;
    justify-content: center;
    transform: translate(50%, -50%);
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