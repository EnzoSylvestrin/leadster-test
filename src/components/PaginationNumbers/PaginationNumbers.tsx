import styled from "styled-components";

export const PaginationNumber = styled.div`
    border-radius: 4px;
    padding: 6px 10px;
    border: 1px solid transparent;
    user-select: none;
    cursor: pointer;

    &.active {
        border-color: var(--main);
        color: var(--main);
    }
`;