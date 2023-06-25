import styled from "styled-components";

import { Container, Wrapper } from "../../../styles/globalStyles/Commom";

export const ContainerVideos = styled(Container)`
    margin: 40px 0;
    display: flex;
    justify-content: center;
    align-items: center;
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