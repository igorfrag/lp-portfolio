import About from '@/components/About/About';
import HeroSection from '@/components/Hero/HeroSection';
import Projects from '@/components/Projects/Projects';

export default function Home() {
    return (
        <section className='align-center flex flex-col items-center justify-center  '>
            <HeroSection />
            <About />
            <Projects />
        </section>
    );
}
