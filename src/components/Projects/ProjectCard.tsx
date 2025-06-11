import Image from 'next/image';
import IconComponent from '@/shared/Icons/IconComponent';
import { socials } from '@/shared/Icons/icons';

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
        <div className=' bg-gray-800 w-[330px] snap-center aspect-square rounded-lg hover:scale-105 hover:shadow-lg transition-transform duration-200 hover:border p-10 max-sm:w-[200px] max-sm:h-[350px]'>
            <div className='flex flex-col items-center justify-center '>
                <Image
                    src={img}
                    width={120}
                    height={120}
                    alt={title}
                    className='mb-3'
                />
                <h3 className='text-xl'>{title}</h3>
                <p className='text-center'>{description}</p>
            </div>
            <div className='flex flex-row items-center gap-4 justify-center mt-3'>
                <a href={githubLink} rel='noopener noreferrer' target='_blank'>
                    <IconComponent title='Github' path={socials[1].path} />
                </a>
                {directLink ? (
                    <a
                        href={directLink}
                        rel='noopener noreferrer '
                        target='_blank'
                    >
                        <IconComponent
                            title='Link'
                            path={socials[3].path}
                            size={30}
                        />
                    </a>
                ) : (
                    <div />
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
