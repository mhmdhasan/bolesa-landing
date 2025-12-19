import Header from './(home-sections)/Header';
import Hero from './(home-sections)/Hero';
import LogoSlider from './(home-sections)/LogoSlider';
import './globals.css';

export default function Home() {
    return (
        <div className='flex flex-col overflow-x-hidden relative'>
            <Header />
            <Hero />
            <LogoSlider />
            <div className='max-w-[1300px] h-full border-foreground/20 w-full border-l border-r border-dotted absolute top-0 start-[50%] translate-x-[50%]'></div>
            <div className='h-[500px] w-full'></div>
        </div>
    );
}
