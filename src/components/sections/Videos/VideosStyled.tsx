import styled from "styled-components";

import { motion } from 'framer-motion';

import * as Dialog from '@radix-ui/react-dialog';

import { Container, SimpleImage, Wrapper } from "@/styles/globalStyles/Commom";
import { TextStyled } from "@/components/Text/TextStyled";

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
        opacity: 1 !important;
    }

    :hover .play {
        opacity: 1 !important;
    }
`;

export const OverlayImage = styled.div`
    position: absolute;
    inset: 0;
    background-color: rgba(44, 131, 251, 0.5);
    z-index: 2;
    border-radius: 8px 8px 0 0;
    transition: all .5s ease;
    opacity: 0;
`;

export const PlayButton = styled.div`
    position: absolute;
    opacity: 0;
    width: 15%;
    height: 50%;
    z-index: 3;
    inset: 50% 50% auto auto;
    transition: all .5s ease;
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

export const DialogOverlay = styled(Dialog.Overlay)`
    background-color: rgba(10, 10, 10, 0.2);
    position: fixed;
    inset: 0;
    z-index: 3;
`;

export const DialogContent = styled(Dialog.Content)`
    border-radius: 12px;
    border-top: 3px solid var(--main);
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
    box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
    position: fixed;
    top: 50%;
    left: 50%;
    width: 60%;
    max-width: 470px;
    min-width: 300px;
    transform: translate(-50%, -50%);
    outline: 0;
    z-index: 3;
`;

export const DialogClose = styled(Dialog.Close)`
    position: absolute;
    inset: 10px 10px auto auto;
    cursor: pointer;

    :hover {
        color: #727272 !important;
    }
`;

export const DialogTitle = styled(TextStyled)`
    width: 60%;
    padding: 20px;
`;

export const DownloadButtons = styled.div`
    display: flex;
    align-items: stretch;
    justify-content: center;
    flex-wrap: wrap;
    cursor: pointer;
    
    div {
        display: flex;
        align-items: center;
        padding: 6px;
    }
`;