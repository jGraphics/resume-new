// app/layout.js
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './_components/Header';
import Footer from './_components/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
