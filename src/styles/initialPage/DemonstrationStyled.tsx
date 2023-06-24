import styled from "styled-components";

import { Container } from "../globalStyles/Commom";
import Image from "next/image";

export const ContainerDemonstration = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const WrapperImage = styled.div`
    width: 100%;
    display: grid;
    place-content: center;
`;

export const DemonstrationImage = styled(Image)`
    height: auto;
    width: 550px;
`;

export const WrapperDemonstration = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;