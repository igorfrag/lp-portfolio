import Image from 'next/image';
import IconComponent from '@/shared/Icons/IconComponent';
import icons from '@/shared/Icons/icons';

interface ProjectCardProps {
    title: string;
    description: string;
    githubLink: string;
    directLink?: string;
    img: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    githubLink,
    directLink,
    img,
}) => {
    return (
        <div className=' bg-gray-800 w-[330px] aspect-square rounded-lg hover:scale-105 hover:shadow-lg transition-transform duration-200 hover:border p-10 max-sm:w-[200px] max-sm:h-[350px]'>
            <div className='flex flex-col items-center justify-center '>
                <Image
                    src={img}
                    width={150}
                    height={150}
                    alt={title}
                    className='mb-3'
                />
                <h3 className='text-xl'>{title}</h3>
                <p className='text-center'>{description}</p>
            </div>
            <div className='flex flex-row items-center gap-4 justify-center mt-3'>
                <a href={githubLink}>
                    <IconComponent title='Github' path={icons[1].path} />
                </a>
                {directLink ? (
                    <a href={directLink}>
                        <IconComponent
                            title='Link'
                            path={icons[2].path}
                            size={30}
                        />
                    </a>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
