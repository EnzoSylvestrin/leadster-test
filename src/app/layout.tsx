'use client';

import { useEffect, useState } from 'react';

import '../styles/globalStyles/globals.css';
import 'react-loading-skeleton/dist/skeleton.css';

import { Container } from '@/styles/globalStyles/Main';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import LoadingPresentation from '@/components/sections/LoadingPresentation/LoadingPresentation';

const RootLayout = ({ children }: { children: React.ReactNode }) => {

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
    <html lang="pt">
      <body>
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
      </body>
    </html>
  )
}

export default RootLayout;
