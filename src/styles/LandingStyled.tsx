import styled from "styled-components";

import { Container } from "./Commom";

export const ContainerPresentation = styled(Container)`
    min-height: calc(100vh - 80px);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Holder = styled.div`
    width: 120px;
    border-radius: 20px 20px 20px 10px;
    background-color: transparent;
    border: 2px solid var(--main);
`;