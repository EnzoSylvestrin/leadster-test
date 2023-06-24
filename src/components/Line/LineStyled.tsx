import styled from "styled-components";

export const Line = styled.div<{ width?: string, margin?: string }>`
    margin: ${props => props.margin ?? '20px 0 0 0'};
    width: ${props => props.width ?? '600px'};
    background-color: #d4d1d1;
    height: 2px;
`;