import styled from "styled-components";

type LineProps = {
    width?: string,
    margin?: string
    height?: string
}

export const Line = styled.div<LineProps>`
    margin: ${props => props.margin ?? '20px 0 0 0'};
    width: ${props => props.width ?? '600px'};
    height: ${props => props.height ?? '2px'};
    background-color: #d4d1d1;
`;