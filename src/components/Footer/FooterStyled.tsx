import styled from "styled-components";

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
`;

export const Items = styled.div<{ marginBottom?: string }>`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 20%;

    h2 {
        margin-bottom: ${props => props.marginBottom ?? '20px'};
    }
`;

export const IconStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #e2e2e2;
    padding: 12px;
`;

export const LightLine = styled.div`
    width: 100%;
    height: 1px;
    background-color: #d1d1d1;
    margin: 20px;
`;

export const Copyright = styled.div`
    width: 82%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;