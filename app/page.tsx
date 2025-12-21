import Header from './(home-sections)/Header';
import Hero from './(home-sections)/Hero';
import LogoSlider from './(home-sections)/LogoSlider';
import './globals.css';
import HowItWorksSection from './(home-sections)/HowItWorksSection';
import WhoIsItForSection from './(home-sections)/WhoIsItForSection';
import FeaturesSection from './(home-sections)/FeaturesSection';
import CarriersSection from './(home-sections)/CarriersSection';

export default function Home() {
    return (
        <div className='flex flex-col overflow-x-hidden relative'>
            <Header />
            <Hero />
            <LogoSlider />
            <HowItWorksSection />
            <WhoIsItForSection />
            <FeaturesSection />
            <CarriersSection />
            <div
                className="
                    pointer-events-none 
                    max-w-[1300px] 
                    h-full 
                    w-full 
                    absolute 
                    top-0 
                    left-1/2 
                    -translate-x-1/2 
                    z-50 
                    border-none 
                    before:content-[''] 
                    before:absolute 
                    before:top-0 
                    before:left-0 
                    before:h-full 
                    before:w-0 
                    before:border-l 
                    before:border-dotted 
                    before:border-foreground/20 
                    before:z-50
                    after:content-[''] 
                    after:absolute 
                    after:top-0 
                    after:right-0 
                    after:h-full 
                    after:w-0 
                    after:border-r 
                    after:border-dotted 
                    after:border-foreground/20 
                    after:z-50
                "
                style={{
                    pointerEvents: 'none',
                }}
            />
            <div className='h-[500px] w-full'></div>
        </div>
    );
}
