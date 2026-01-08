// src/App.tsx (or main.tsx, depending on your setup)

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.tsx';

import Header from './components/Header';
import Line1 from './assets/Line1.png'

import Project from './pages/Project.tsx';

import Websites from './pages/Websites.tsx';
import Designs from './pages/Designs.tsx';
import Footer from './components/Footer.tsx';

function App() {
    return (
        <BrowserRouter>
        <Link to="/" className="!no-underline border-none shadow-none" style={{ textDecoration: 'inherit' }}><Header /></Link>
            
            <div className='bg-[#619394] gap-3 flex justify-center text-white h-full items-center'>
                <Link to="/Websites" className=' hover:bg-[#D2E4E4] hover:text-black p-2 hover:cursor-pointer px-4'>
                    <p>Websites</p>
                </Link>
                <img src={Line1} className='h-6' />
                <Link to="/Designs" className=' hover:bg-[#D2E4E4] hover:text-black p-2 hover:cursor-pointer px-4'>
                    <p className='no-underline'>Designs</p>
                </Link>
                                <img src={Line1} className='h-6' />
                <Link to="/Project" className=' hover:bg-[#D2E4E4] hover:text-black p-2 hover:cursor-pointer px-4'>
                    <p className='no-underline'>Project</p>
                </Link>

            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Project" element={<Project/>} />
                <Route path="/Websites" element={<Websites/>} />
                <Route path="/Designs" element={<Designs/>} />

            </Routes>
             <Link to="/" className="!no-underline border-none shadow-none" style={{ textDecoration: 'inherit' }}><Footer /></Link>
        </BrowserRouter>
    );
}

export default App;