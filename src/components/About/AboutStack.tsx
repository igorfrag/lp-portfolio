'use client';
import { icons } from '@/shared/Icons/icons';
import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';

const AboutStack = () => {
    const t = useTranslations('About');
    const [stackText, setStackText] = useState(t('click'));
    const containerRef = useRef<HTMLDivElement>(null);
    const [size, setSize] = useState(300); // tamanho base do círculo

    useEffect(() => {
        const updateSize = () => {
            const w = window.innerWidth;
            if (w < 430) setSize(230);
            else if (w < 640) setSize(300);
            else if (w < 768) setSize(360);
            else setSize(400);
        };

        updateSize();
        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    const center = size / 2;
    const radius = center - 10;
    return (
        <div
            ref={containerRef}
            className='relative mx-auto'
            style={{ width: size, height: size }}
        >
            {/* Círculo central */}
            <div
                className='absolute border-2 border-gray-500 rounded-full'
                style={{
                    width: size,
                    height: size,
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
            />

            {/* Texto central */}
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center max-sm:text-[12px]'>
                <p
                    className='text-white transition-all duration-500 ease-in-out animate-fadeIn'
                    key={stackText}
                >
                    {stackText}
                </p>
            </div>

            {/* Ícones ao redor */}
            {icons.map((icon, index) => {
                const angle = (2 * Math.PI * index) / icons.length;
                const x = center + radius * Math.cos(angle) - 32;
                const y = center + radius * Math.sin(angle) - 32;

                return (
                    <div
                        key={icon.title}
                        onClick={() => setStackText(t(`${icon.text}`))}
                        className='absolute aspect-square w-20  max-sm:w-15 flex items-center justify-center flex-col bg-gray-800 text-white rounded-lg hover:scale-110 hover:shadow-lg transition-transform duration-100'
                        style={{ top: y, left: x }}
                    >
                        <svg
                            viewBox='0 0 24 24'
                            fill='currentColor'
                            className='w-6 h-6 mb-1'
                        >
                            {icon.path}
                        </svg>
                        <span className='text-xs'>{icon.title}</span>
                    </div>
                );
            })}
        </div>
    );
};

export default AboutStack;
