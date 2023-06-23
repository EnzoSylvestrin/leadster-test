'use client';

import '../styles/globals.css';

import { Container } from '@/styles/Main';

import Header from '@/components/Header/Header';

export const metadata = {
  title: 'Leadster test',
  description: 'site made to leadster test',
}

export const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="pt">
      <body>
        <Container>
          <Header />
          {children}
        </Container>
      </body>
    </html>
  )
}

export default RootLayout;
