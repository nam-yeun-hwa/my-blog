import type { Metadata } from 'next';
import { Inter, IBM_Plex_Sans_KR } from 'next/font/google';
import './globals.css';
import './style-reset.css';

// const inter = Inter({ subsets: ['latin'] });

type Props = {
  children: React.ReactNode;
};

const imb_plex_sans_kR = IBM_Plex_Sans_KR({
  weight: ['400', '500', '600', '700'],
  variable: '--font-IBM_Plex_Sans_KR',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          as="style"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
