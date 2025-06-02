import IconComponent from '../Icons/IconComponent';
import icons from '../Icons/icons';

const Header = () => {
    return (
        <header className='bg-gray-800 text-white p-4 text-center justify-center flex border-b border-white  max-md:pr-10 max-md:pl-10'>
            <nav className='flex gap-10 justify-between w-full max-w-5xl'>
                <ul className='flex flex-row gap-5 text-xl '>
                    <li>Sobre</li>
                    <li>Contato</li>
                    <li>Projetos</li>
                </ul>
                <ul className='flex flex-row gap-6'>
                    <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href='https://www.github.com/igorfrag'
                    >
                        <li>
                            <IconComponent
                                title='Github'
                                path={icons[0].path}
                                size={30}
                                color='white'
                            />
                        </li>
                    </a>
                    <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href='https://www.linkedin.com/in/igor-fragoso-220583161/'
                    >
                        <li>
                            <IconComponent
                                title='LinkedIn'
                                path={icons[1].path}
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
