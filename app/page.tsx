import Header from './(home-sections)/Header';
import Hero from './(home-sections)/Hero';
import './globals.css';

export default function Home() {
    return (
        <div className='flex overflow-x-hidden relative'>
            <Header />
            <Hero />
            <div className='max-w-[1300px] h-full border-foreground/20 w-full border-l border-r border-dotted absolute top-0 start-[50%] translate-x-[50%]'></div>
        </div>
    );
}
