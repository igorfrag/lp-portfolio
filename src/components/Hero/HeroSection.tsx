const HeroSection = () => {
    return (
        <div className="flex  items-center  align-center  justify-center h-screen  text-white bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(16,24,40,1)),url('/assets/black.jpg')] bg-cover bg-center w-full max-h-120">
            <div className=' pl-15 max-w-4xl '>
                <h1 className='text-7xl'>
                    Olá, eu sou{' '}
                    <span className='text-secondary font-bold '>Igor.</span>
                </h1>

                <p className='text-2xl pt-5'>
                    Desenvolvo soluções Full-Stack eficientes e escaláveis
                </p>
            </div>
        </div>
    );
};

export default HeroSection;
