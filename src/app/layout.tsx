import '../styles/globals.css';
import Header from '@/shared/Header/Header';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='pt-BR'>
            <body className='flex flex-col  text-white bg-gray-900  '>
                <Header />
                <main className='mb-auto h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth overflow-x-hidden'>
                    {children}
                </main>
            </body>
        </html>
    );
}
