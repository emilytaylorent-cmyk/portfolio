// src/App.tsx (or main.tsx, depending on your setup)

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.tsx';

import Header from './components/Header';
import Line1 from './assets/Line1.png'

import Project from './pages/Project.tsx';
import Logos from './pages/Logos.tsx';
import Websites from './pages/Websites.tsx';

function App() {
    return (
        <BrowserRouter>
        <Link to="/"><Header /></Link>
            
            <div className='bg-[#619394] gap-3 flex justify-center text-white h-full items-center'>
                <Link to="/Logos" className='no-underline hover:bg-[#D2E4E4] hover:text-black p-2 hover:cursor-pointer px-4'>
                    <p>Logos</p>
                </Link>
                <img src={Line1} className='h-6' />
                <Link to="/Project" className=' overwrite hover:bg-[#D2E4E4] no-underline hover:text-black p-2 hover:cursor-pointer px-4'>
                    <p className='no-underline'>Design Project</p>
                </Link>
                <img src={Line1} className='h-6' />
                <Link to="/Websites" className='hover:bg-[#D2E4E4]  no-underline hover:text-black p-2 hover:cursor-pointer px-4'>
                    <p>Websites</p>
                </Link>

            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Logos" element={<Logos />} />
                <Route path="/Project" element={<Project/>} />
                <Route path="/Websites" element={<Websites/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;