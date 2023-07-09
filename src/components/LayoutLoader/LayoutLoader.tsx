'use client';

import { useState, useEffect, ReactNode } from "react";

import { Container } from "@/styles/globalStyles/Commom";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import LoadingPresentation from "../sections/LoadingPresentation/LoadingPresentation";

const LayoutLoader = ({ children }: { children: ReactNode }) => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 800);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <Container>
            {
                loading
                    ?
                    <LoadingPresentation />
                    :
                    <>
                        <Header />
                        {children}
                        <Footer />
                    </>
            }
        </Container>
    );
}

export default LayoutLoader;