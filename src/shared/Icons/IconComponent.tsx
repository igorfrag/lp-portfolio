import React from 'react';

type IconProps = {
    size?: number;
    color?: string;
    title: string;
    path: React.ReactNode;
};

const IconComponent: React.FC<IconProps> = ({
    size = 24,
    color = 'white',
    title,
    path,
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox='0 0 24 24'
            fill={color}
            xmlns='http://www.w3.org/2000/svg'
            role='img'
            aria-label={title || 'Icon'}
        >
            <title>{title}</title>
            {path}
        </svg>
    );
};

export default IconComponent;
