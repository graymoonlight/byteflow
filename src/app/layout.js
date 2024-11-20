import '../styles/globals.css'
import Header from '@/modules/header';
import Footer from '@/modules/footer';

export const metadata = {
  title: "ByteFlow Studio",
  description: "Creating the best apps!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
