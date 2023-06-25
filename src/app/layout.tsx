'use client';

import '../styles/globalStyles/globals.css';

import { Container } from '@/styles/globalStyles/Main';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="pt">
      <body>
        <Container>
          <Header />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  )
}

export default RootLayout;
