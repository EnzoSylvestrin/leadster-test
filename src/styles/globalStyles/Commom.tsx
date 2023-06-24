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
}

export const Wrapper = styled.div<WrapperProps>`
    display: flex;
    width: ${props => props.width ?? '100%'};
    gap:  ${props => props.gap ?? '0px'};
    align-items: ${props => props.align ?? 'flex-start'};
    justify-content: ${props => props.justify ?? 'flex-start'};
`;