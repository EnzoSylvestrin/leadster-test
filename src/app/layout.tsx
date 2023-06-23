import './globals.css';

import { Plus_Jakarta_Sans } from 'next/font/google';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Leadster test',
  description: 'site made to leadster test',
}

export const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="pt">
      <body className={`${jakarta.className} font-sans`}>{children}</body>
    </html>
  )
}

export default RootLayout;
