import type { Metadata } from 'next';
import { Inter, IBM_Plex_Sans_KR } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import './style-reset.css';

type Props = {
  children: React.ReactNode;
};

// const imb_plex_sans_kR = IBM_Plex_Sans_KR({
//   weight: ['400', '500', '600', '700'],
//   variable: '--font-IBM_Plex_Sans_KR',
//   preload: false,
//   subsets: ['latin'],
//   display: 'swap',
// });

export const metadata: Metadata = {
  title: 'be come 💡',
  description: 'App for an Ant Who Wants to Become a Bejjangyi',
};

// const myFont = localFont({
//   src: './fonts/IBMPlexSansKR-Medium.woff',
//   display: 'swap',
// });

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={``}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          as="style"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR&display=swap"
          as="style"
        />
      </head>

      <body>{children}</body>
    </html>
  );
}
