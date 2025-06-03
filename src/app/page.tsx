import About from '@/components/About/About';
import HeroSection from '@/components/Hero/HeroSection';
import Projects from '@/components/Projects/Projects';
import Contact from '@/components/Contact/Contact';

export default function Home() {
    return (
        <section className='align-center flex flex-col items-center justify-center  '>
            <section className='w-full snap-start '>
                <HeroSection />
            </section>
            <section id='sobre' className='snap-start mb-10'>
                <About />
            </section>
            <section id='projetos' className=''>
                <Projects />
            </section>
            <section id='contato' className='snap-start mt-15'>
                <Contact />
            </section>
        </section>
    );
}
