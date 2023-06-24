import styled from "styled-components";
import { Container } from "./Commom";

export const ContainerVideos = styled(Container)`
    margin: 40px 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const WrapperVideos = styled.div`
    width: 75%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const WrapperFilters = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

export const Cards = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
`

export const SelectFilters = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
`;

export const WrapperPagination = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
`;