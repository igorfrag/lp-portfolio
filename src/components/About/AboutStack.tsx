'use client';
import { icons } from '@/shared/Icons/icons';
import { useState } from 'react';
import { useWindowSize } from '@/hooks/useWindowSize';

const AboutStack = () => {
    const [stackText, setStackText] = useState('Clique em um item');
    const { width } = useWindowSize();
    const getCircleConfig = () => {
        if (width <= 430) return { radius: 145, center: 145 };
        if (width > 430 && width <= 640) return { radius: 165, center: 150 };
        if (width > 640 && width <= 768) return { radius: 200, center: 200 };
        return { radius: 200, center: 200 };
    };

    const { radius, center } = getCircleConfig();
    return (
        <div className='relative w-[400px] h-[400px] mx-auto max-sm:w-[300px] max-sm:h-[300px]'>
            <div className='absolute inset-0 border-2 border-gray-500 rounded-full' />
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center'>
                <p
                    className='text-white text-center transition-all duration-500 ease-in-out opacity-0 translate-x-[-10px] animate-fadeIn'
                    key={stackText}
                >
                    {stackText}
                </p>
            </div>
            {icons.map((icon, index) => {
                const angle = (2 * Math.PI * index) / icons.length;
                const x = center + radius * Math.cos(angle) - 40;
                const y = center + radius * Math.sin(angle) - 40;

                return (
                    <div
                        onClick={() =>
                            setStackText(icon.text || 'Clique em um item')
                        }
                        key={icon.title}
                        className='absolute w-20 h-20 flex flex-col items-center justify-center bg-gray-800 text-white rounded-lg hover:scale-105 hover:shadow-lg transition-transform duration-200'
                        style={{ left: `${x}px`, top: `${y}px` }}
                    >
                        <svg
                            viewBox='0 0 24 24'
                            fill='currentColor'
                            className='h-8 w-8 mb-1'
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
