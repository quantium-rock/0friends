import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { About, Discover, Services, Media } from '../components/InfoSection/Data';
import Footer from '../components/Footer';

const Home = () => {

    const [ isOpen, setIsOpen ] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...About} />
            <InfoSection {...Discover} />
            <InfoSection {...Services} />
            <InfoSection {...Media} />
            <Footer />
        </>
    )
}

export default Home;
