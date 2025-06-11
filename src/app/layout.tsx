import { getLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import '../styles/globals.css';
import Header from '@/shared/Header/Header';

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const locale = await getLocale();
    return (
        <html lang={locale}>
            <head>
                <meta charSet='utf-8' />
                <meta name='author' content='Igor Fragoso' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1.0'
                />
                <meta
                    name='description'
                    content='Portfolio do desenvolvedor Igor Fragoso'
                />
                <link rel='icon' href='/assets/favicon.ico' />
                <title>Igor Fragoso - Developer</title>
            </head>
            <NextIntlClientProvider>
                <body className='flex flex-col  text-white bg-gray-900   '>
                    <Header />
                    <main className=' pt-[64px] max-md:pt-0 mb-auto h-screen snap-y snap-mandatory overflow-y-scroll  scroll-smooth  '>
                        {children}
                    </main>
                </body>
            </NextIntlClientProvider>
        </html>
    );
}
