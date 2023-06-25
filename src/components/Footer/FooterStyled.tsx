import styled from "styled-components";

import Link from "next/link";
import { Wrapper } from "@/styles/globalStyles/Commom";

export const ContainerFooter = styled.footer`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 0;
`;

export const GridLinks = styled.div`
    display: flex;
    align-items: stretch;
    justify-content: center;
    gap: 8px;
    margin: 30px 0;
    width: 100%;
    flex-wrap: wrap;

    @media (max-width: 840px) {
        gap: 20px;
    }
`;

export const Items = styled.div<{ marginBottom?: string }>`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 20%;

    h2 {
        margin-bottom: ${props => props.marginBottom ?? '20px'};
    }

    @media (max-width: 840px) {
        width: 45%;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    @media (max-width: 470px) {
        width: 90%;

        h2 {
            margin-bottom: 8px;
        }
    }
`;

export const FooterLink = styled(Link)`
    color: #969696;
    font-size: 0.875rem;
    transition: all 0.4s ease;

    :hover {
        color: #101010;
    }
`;

export const WrapperIcons = styled(Wrapper)`
    @media (max-width: 840px) {
        align-items: center;
        justify-content: center;
    }
`;

export const IconStyled = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #e2e2e2;
    padding: 12px;
    transition: all 0.4s ease;

    :hover {
        background-color: var(--main);
    }

    :hover svg {
        color: #fff !important;
    }
`;

export const LightLine = styled.div`
    width: 100%;
    height: 1px;
    background-color: #d1d1d1;
    margin: 20px;
`;

export const Copyright = styled(Wrapper)`
    flex-wrap: wrap;

    @media (max-width: 1002px) {
        gap: 12px;
        
        p {
            width: 100%;
            text-align: center;
        }

        justify-content: center;
    }
`;