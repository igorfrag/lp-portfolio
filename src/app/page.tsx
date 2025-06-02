import About from '@/components/About/About';
import HeroSection from '@/components/Hero/HeroSection';

export default function Home() {
    return (
        <section className='align-center flex flex-col items-center justify-center  '>
            <HeroSection />
            <About />
        </section>
    );
}
