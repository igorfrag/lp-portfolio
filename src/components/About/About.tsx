import AboutStack from './AboutStack';
import { useTranslations } from 'next-intl';

const About = () => {
    const t = useTranslations('About');
    return (
        <div className=' pt-0 pb-10 flex flex-col min-xl:flex-row min-2xl:flex-row justify-center items-center gap-10 h-screen'>
            <div className='max-w-2xl  min-xl:pr-30 pre max-sm:pr-0 text-2xl  self-center items-center'>
                <p className='  max-md:m-10 text-center'>
                    {t('textOne')}
                    <br />
                    <br />
                    {t('textTwo')}
                </p>
            </div>
            <AboutStack />
        </div>
    );
};

export default About;
