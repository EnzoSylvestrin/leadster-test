import styled from "styled-components";

export const Container = styled.section<{ lightBg?: boolean }>`
    width: 100%;
    background-color: ${props => props.lightBg ? 'var(--bgSecondary)' : 'var(--bgMain)'};
`;