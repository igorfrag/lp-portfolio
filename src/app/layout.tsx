import Footer from '@/shared/Footer/Footer';
import '../styles/globals.css';
import Header from '@/shared/Header/Header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="flex flex-col min-h-screen text-white bg-gray-900">
        <Header />
        <main className="mb-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
