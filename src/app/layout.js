import '../styles/globals.css'
import Header from '@/modules/header';
import Footer from '@/modules/footer';
import { LanguageProvider } from '../context/LanguageContext';

export const metadata = {
  title: "ByteFlow Studio",
  description: "Creating the best apps!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <LanguageProvider>
        <Header />
        {children}
        <Footer/>
      </LanguageProvider>
      </body>
    </html>
  );
}
