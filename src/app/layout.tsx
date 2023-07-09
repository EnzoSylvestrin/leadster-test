import '../styles/globalStyles/globals.css';
import 'react-loading-skeleton/dist/skeleton.css';

import LayoutLoader from '@/components/LayoutLoader/LayoutLoader';

export const metadata = {
  title: "Home | Leadster",
  description: "Site feito para teste da Leadster"
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="pt">
      <body>
        <LayoutLoader>
          {children}
        </LayoutLoader>
      </body>
    </html>
  )
}

export default RootLayout;
