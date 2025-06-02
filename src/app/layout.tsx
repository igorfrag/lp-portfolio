import '../styles/globals.css';
import Header from '@/shared/Header/Header';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='pt-BR'>
            <head>
                <meta charSet='utf-8' />
                <meta name='author' content='Igor Fragoso' />
                <meta
                    name='description'
                    content='Portfolio do desenvolvedor Igor Fragoso'
                />
                <link rel='icon' href='/assets/favicon.ico' />
                <title>Igor Fragoso - Developer</title>
            </head>
            <body className='flex flex-col  text-white bg-gray-900  '>
                <Header />
                <main className='mb-auto h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth overflow-x-hidden'>
                    {children}
                </main>
            </body>
        </html>
    );
}
