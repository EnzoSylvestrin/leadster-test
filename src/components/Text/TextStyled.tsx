import styled, { css } from "styled-components";

type TextProps = {
    size: 'sm' | 'md' | 'lg' | string,
    align?: 'left' | 'center' | 'right'
    color?: string | 'main',
    gradient?: boolean,
    weight?: "bold" | string,
    select?: "none" | "normal",
    line?: string | number
};

export const TextStyled = styled.p<TextProps>`
    font-size: ${props =>
        props.size === 'sm'
            ? '0.875rem'
            : props.size === 'md'
                ? '1rem'
                : props.size === 'lg'
                    ? '1.125rem'
                    : props.size
    };
    text-align: ${props => props.align ?? 'left'};
    font-weight: ${props => props.weight ?? 'normal'};
    user-select:  ${props => props.select ?? 'normal'};
    line-height: ${props => props.line ?? '1'};
    ${props => {
        if (!props.gradient) {
            return;
        }
        return css`
            background-image: linear-gradient(45deg, var(--main), var(--secondary));
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent; 
            -moz-text-fill-color: transparent;
            color: transparent;
        `
    }};
    ${props => {
        if (!props.color || props.gradient) {
            return;
        }
        switch (props.color) {
            case "main":
                return css`
                    color: var(--main)
                `
            default:
                return css`
                    color: ${props.color}
                `
        }
    }};
`;