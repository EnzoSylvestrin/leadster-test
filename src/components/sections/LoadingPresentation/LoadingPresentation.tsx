import { HeaderStyled } from "@/components/Header/HeaderStyled";
import Skeleton from "@/components/Skeleton/Skeleton";

import { ContainerPresentation, LinePresentation } from "../Presentation/PresentationStyled";

import { LoadingCard, LoadingChat, LoadingConvertion, LoadingNote } from "./LoadingStyled";
import { useState, useEffect } from "react";

const LoadingPresentation = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 500);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <>
            <HeaderStyled>
                {
                    loading
                        ?
                        <></>
                        :
                        <Skeleton width={160} height={30} />
                }
            </HeaderStyled>
            <ContainerPresentation lightBg>
                {
                    loading
                        ?
                        <></>
                        :
                        <>
                            <LoadingCard width={200} height={28} />
                            <LoadingChat width={220} height={40} />
                            <LoadingConvertion width={400} height={60} />
                            <LinePresentation />
                            <LoadingNote width={450} height={25} />
                        </>
                }
            </ContainerPresentation>
        </>
    );
}

export default LoadingPresentation;