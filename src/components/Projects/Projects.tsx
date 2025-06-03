import ProjectCard from './ProjectCard';

const Projects = () => {
    return (
        <>
            <h1 className='text-2xl text-center'>Projetos</h1>
            <div className=' pt-10 pb-10 flex flex-wrap flex-row  min-lg:flex-col  justify-center items-center gap-10 max-w-3xl h-screen'>
                <ProjectCard
                    title='Weatherapp'
                    description='Acompanhe climas do mundo inteiro em tempo real.'
                    githubLink='https://github.com/igorfrag/weatherapp'
                    directLink='https://igorfrag.github.io/weatherapp/'
                    img='/assets/weather.png'
                />
                <ProjectCard
                    title='Lightwiki'
                    description='Blog pessoal, com database própria e upload de imagens.'
                    githubLink='https://github.com/igorfrag/lightwiki-front'
                    img='/assets/lightwiki.png'
                />
            </div>
        </>
    );
};

export default Projects;
