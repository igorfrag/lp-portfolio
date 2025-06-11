import { useTranslations } from 'next-intl';

const HeroSection = () => {
    const t = useTranslations('HeroSection');
    return (
        <div className="flex  items-center  align-center  justify-center h-screen  text-white bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(16,24,40,1)),url('/assets/black.webp')] bg-cover bg-center w-full ">
            <div className=' p-10 pt-0 max-w-4xl '>
                <h1 className='text-7xl text-center'>
                    {t('hello')}{' '}
                    <span className='text-secondary font-bold '>
                        {t('name')}
                    </span>
                </h1>

                <p className='text-2xl pt-5'>{t('callText')}</p>
            </div>
        </div>
    );
};

export default HeroSection;
