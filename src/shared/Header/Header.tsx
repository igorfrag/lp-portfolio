import IconComponent from '../Icons/IconComponent';
import { socials } from '../Icons/icons';

const Header = () => {
    return (
        <header
            className={`left-0 right-0 bg-gray-800 text-white p-4 mr-4 text-center justify-center flex border-b border-white fixed z-10 max-md:hidden top-0  `}
        >
            <nav className='flex gap-10 justify-evenly w-full max-w-5xl'>
                <ul className='flex flex-row gap-5 text-xl '>
                    <li className='opacity-100 hover:opacity-80'>
                        <a href='#sobre'>Sobre</a>
                    </li>

                    <li className='opacity-100 hover:opacity-80'>
                        <a href='#projetos'>Projetos</a>
                    </li>
                    <li className='opacity-100 hover:opacity-80'>
                        <a href='#contato'>Contato</a>
                    </li>
                </ul>
                <ul className='flex flex-row gap-6 max-lg:hidden'>
                    <li className='opacity-100 hover:opacity-80'>
                        <a
                            target='_blank'
                            rel='noopener noreferrer'
                            href='https://www.linkedin.com/in/igor-fragoso-220583161/'
                        >
                            <IconComponent
                                title='Github'
                                path={socials[0].path}
                                size={30}
                                color='white'
                            />
                        </a>
                    </li>

                    <li className='opacity-100 hover:opacity-80'>
                        <a
                            target='_blank'
                            rel='noopener noreferrer'
                            href='  https://www.github.com/igorfrag'
                        >
                            <IconComponent
                                title='LinkedIn'
                                path={socials[1].path}
                                size={30}
                                color='white'
                            />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
