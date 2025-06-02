import IconComponent from '../Icons/IconComponent';
import { socials } from '../Icons/icons';

const Header = () => {
    return (
        <header className='bg-gray-800 text-white p-4 text-center justify-center flex border-b border-white w-screen max-md:pr-10 max-md:pl-10 fixed z-10'>
            <nav className='flex gap-10 justify-between w-full max-w-5xl'>
                <ul className='flex flex-row gap-5 text-xl '>
                    <a href='#sobre'>
                        <li className='opacity-100 hover:opacity-80'>Sobre</li>
                    </a>
                    <a href='#projetos'>
                        <li className='opacity-100 hover:opacity-80'>
                            Projetos
                        </li>
                    </a>
                    <a href='#contato'>
                        <li className='opacity-100 hover:opacity-80'>
                            Contato
                        </li>
                    </a>
                </ul>
                <ul className='flex flex-row gap-6'>
                    <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href='https://www.linkedin.com/in/igor-fragoso-220583161/'
                    >
                        <li className='opacity-100 hover:opacity-80'>
                            <IconComponent
                                title='Github'
                                path={socials[0].path}
                                size={30}
                                color='white'
                            />
                        </li>
                    </a>
                    <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href='  https://www.github.com/igorfrag'
                    >
                        <li className='opacity-100 hover:opacity-80'>
                            <IconComponent
                                title='LinkedIn'
                                path={socials[1].path}
                                size={30}
                                color='white'
                            />
                        </li>
                    </a>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
