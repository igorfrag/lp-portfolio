import { useTranslations } from 'next-intl';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const t = useTranslations('Projects');
    return (
        <>
            <h1 className='text-2xl text-center'>{t('title')}</h1>
            <div className=' pt-10 pb-10 flex flex-wrap flex-row  min-lg:flex-col  justify-center items-center gap-10 max-w-3xl h-screen'>
                <ProjectCard
                    title='Weatherapp'
                    description={t('weatherapp')}
                    githubLink='https://github.com/igorfrag/weatherapp'
                    directLink='https://igorfrag.github.io/weatherapp/'
                    img='/assets/weather.png'
                />
                <ProjectCard
                    title='Lightwiki'
                    description={t('lightwiki')}
                    githubLink='https://github.com/igorfrag/lightwiki-front'
                    img='/assets/lightwiki.png'
                />
            </div>
        </>
    );
};

export default Projects;
