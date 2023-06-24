import Image from "next/image";
import styled from "styled-components";

type ContainerProps = {
    lightBg?: boolean
}

export const Container = styled.section<ContainerProps>`
    width: 100%;
    background-color: ${props => props.lightBg ? 'var(--bgSecondary)' : 'var(--bgMain)'};
`;

type WrapperProps = {
    gap?: string,
    width?: string,
    align?: 'start' | 'center' | 'end',
    justify?: 'start' | 'center' | 'end',
    direction?: 'row' | 'column',
    margin?: string,
}

export const Wrapper = styled.div<WrapperProps>`
    display: flex;
    width: ${props => props.width ?? '100%'};
    gap: ${props => props.gap ?? '0px'};
    align-items: ${props => props.align ?? 'flex-start'};
    justify-content: ${props => props.justify ?? 'flex-start'};
    flex-direction: ${props => props.direction ?? 'row'};
    margin: ${props => props.margin ?? '0px'}
`;

type ImageProps = {
    widthIntern: string
}

export const SimpleImage = styled(Image) <ImageProps>`
    height: auto;
    width: ${props => props.widthIntern ?? 'auto'};
`;