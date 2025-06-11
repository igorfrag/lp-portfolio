import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
    output: 'standalone',
};
const withNextIntl = createNextIntlPlugin('src/i18n/requests.ts');

export default withNextIntl(nextConfig);
