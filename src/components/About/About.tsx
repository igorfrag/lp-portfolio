import AboutStack from './AboutStack';

const About = () => {
    return (
        <div className=' pt-10 pb-10 flex flex-col min-xl:flex-row min-2xl:flex-row justify-center items-center gap-10'>
            <div className='max-w-2xl  min-xl:pr-30 pre max-sm:pr-0 text-2xl text-justify self-center items-center'>
                <p className='pt-10 pb-10 max-md:m-10'>
                    Código limpo, design fluido e paixão por boas interfaces.
                    <br />
                    <br />
                    Desenvolvo produtos digitais com atenção aos detalhes e
                    tecnologias modernas.
                </p>
            </div>
            <AboutStack />
        </div>
    );
};

export default About;
