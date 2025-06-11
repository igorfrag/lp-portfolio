'use client';

import { useLocale } from 'next-intl';

export default function ToggleLocale() {
    const locale = useLocale();

    const toggleLocale = () => {
        const newLocale = locale === 'en' ? 'pt-BR' : 'en';

        document.cookie = `NEXT_LOCALE=${newLocale}; path=/`;

        window.location.reload();
    };

    return (
        <button
            onClick={toggleLocale}
            className='px-3 py-1 rounded border hover:opacity-80 cursor-pointer'
        >
            {locale === 'en' ? 'PT-BR' : 'ENG'}
        </button>
    );
}
