import styled from "styled-components";

export const FilterCard = styled.div`
    border-radius: 20px;
    border: 1px solid black;
    padding: 4px 20px;
    font-size: 1rem;
    cursor: pointer;
    user-select: none;
    transition: all 0.4s ease;

    :hover {
        border-color: var(--main);
        color: var(--main);
    }

    &.active {
        background-color: var(--main);
        color: #fff;
        border: 1px solid transparent;
    }

    &.active:hover {
        background-color: var(--hoverColor);
    }

    @media (max-width: 420px) {
        width: 80%;
        text-align: center;
    }

    @media (max-width: 320px) {
        width: 95%;
    }
`;