import About from '@/components/About/About';
import HeroSection from '@/components/Hero/HeroSection';
import Projects from '@/components/Projects/Projects';
import Contact from '@/components/Contact/Contact';

export default function Home() {
    return (
        <section className='align-center flex flex-col items-center justify-center  '>
            <section className='w-screen snap-start'>
                <HeroSection />
            </section>
            <section id='sobre' className='snap-start'>
                <About />
            </section>
            <section id='projetos' className='snap-start'>
                <Projects />
            </section>
            <section id='contato' className='snap-start'>
                <Contact />
            </section>
        </section>
    );
}
