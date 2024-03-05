import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import Header from '@/components/navbar/header';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Next.js 14 Homepage',
    template: '%s | Next.js 14',
  },
  description: 'Next.js starter app description',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@700..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className={inter.className}>
        {/* <ClientSideProviderTest> */}
        <div className={`absolute h-screen w-full top-0 `}>
          <Navbar />
          {children}
          <Footer />
        </div>
        {/* </ClientSideProviderTest> */}
      </body>
    </html>
  );
}
