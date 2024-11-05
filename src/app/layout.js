import '../styles/globals.css'

export const metadata = {
  title: "ByteFlow Studio",
  description: "Creating the best apps!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
