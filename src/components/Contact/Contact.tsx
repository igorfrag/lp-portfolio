import { socials } from '@/shared/Icons/icons';
import IconComponent from '@/shared/Icons/IconComponent';
const Contact = () => {
    return (
        <div className=' pt-10 pb-10 flex flex-col justify-center items-center gap-10 h-screen'>
            <h1 className='text-3xl'>Contate-me</h1>
            <div>
                <ul className='flex flex-row gap-6'>
                    {socials.map((icon, index) => {
                        if (icon.link === null) return null;
                        return (
                            <a
                                key={index}
                                target='_blank'
                                rel='noopener noreferrer'
                                href={
                                    icon.title === 'Gmail'
                                        ? 'mailto:' + icon.link
                                        : icon.link
                                }
                            >
                                <li className='opacity-100 hover:opacity-80 hover:scale-125 transition ease-in'>
                                    <IconComponent
                                        title={icon.title}
                                        path={socials[index].path}
                                        size={50}
                                        color='white'
                                    />
                                </li>
                            </a>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Contact;
