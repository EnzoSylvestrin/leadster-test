import styled from "styled-components";

import Skeleton from "@/components/Skeleton/Skeleton";

export const LoadingCard = styled(Skeleton)`
    border-radius: 20px 20px 20px 0px;
`;

export const LoadingChat = styled(Skeleton)`
    @media (max-width: 487px) {
        width: 200px !important;
    }
`;

export const LoadingConvertion = styled(Skeleton)`
    margin: 0 25px;

    @media (max-width: 487px) {
        width: 300px !important;
    }
`;

export const LoadingNote = styled(Skeleton)`
    @media (max-width: 487px) {
        width: 300px !important;
        height: 80px !important;
    }
`;