import { Poppins } from 'next/font/google';
import React from 'react';
import Footer from '@/components/footer';
import Nav from '@/components/nav';
import './globals.scss';

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '600', '700'] });

export const metadata = {
  title: 'My website',
  description: 'Next website',
};

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => (
  <html lang="en">
    <body className={poppins.className}>
      <div className="container">
        <Nav />
        {children}
        <Footer />
      </div>
    </body>
  </html>
);

export default RootLayout;
