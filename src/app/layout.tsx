import '../styles/globals.css';

export const metadata = {
  title: 'Leadster test',
  description: 'site made to leadster test',
}

export const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  )
}

export default RootLayout;
