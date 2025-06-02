import ProjectCard from './ProjectCard';

const Projects = () => {
    return (
        <div className=' pt-10 pb-10 flex flex-wrap flex-row  max-xl:flex-col  justify-center items-center gap-10 max-w-3xl'>
            <ProjectCard
                title='Weatherapp'
                description='Acompanhe climas do mundo inteiro em tempo real.'
                githubLink='https://github.com/igorfrag/weatherapp'
                directLink='https://igorfrag.github.io/weatherapp/'
                img='/assets/weather.png'
            />
            <ProjectCard
                title='Lightwiki'
                description='Blog pessoal, com database própria e suporte a upload de imagens.'
                githubLink='https://github.com/igorfrag/lightwiki-front'
                img='/assets/lightwiki.png'
            />
        </div>
    );
};

export default Projects;
