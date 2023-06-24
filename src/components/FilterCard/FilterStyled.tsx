import styled from "styled-components";

export const FilterCard = styled.div`
    border-radius: 20px;
    border: 1px solid black;
    padding: 4px 20px;
    font-size: 1rem;
    cursor: pointer;
    user-select: none;

    :hover {
        border-color: var(--main);
        color: var(--main);
    }
`;