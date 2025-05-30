'use client'
import React from 'react'
import Navigation from '@/components/Navigation/nav'
import Image from 'next/image';
import { useState } from 'react';
import { socialLinks } from '@/data/socialLinks'
import Link from 'next/link';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <header className='main-header fixed w-full left-0 right-0 z-50'>
            <div className='fluid-container'>
                {/* Desktop normal navigation */}
                {/* <div className=' bg-opacity-60 backdrop-blur-xs rounded-full flex justify-between items-center gap-2.5 py-8 '>
                    <h1 className='text-3xl font-bold masked-text'>LOGO</h1>
                    <Navigation />
                </div> */}

                <div className='flex justify-between items-center gap-2.5 py-6 '>
                    <h1 className='masked-text text-3xl font-bold tracking-widest text-white'><em className='p-0! animated'>LOGO</em></h1>
                    <Image src="hamBurger.svg" alt="humBurger" width={45} height={45} className=' masked-text cursor-pointer' onClick={toggleMenu} />
                </div>

                {/* Desktop Toggle Navigation */}

                <div className={`fixed top-0 right-0 backdrop-blur-3xl bg-opacity-60 w-96 h-screen flex items-center justify-center transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className='flex flex-col items-center h-full'>

                        {/* navigation */}
                        <Navigation />

                        {/* socialLinks */}
                        <ul className='flex items-center space-x-4 justify-center py-4'>
                            {socialLinks.map((items) => (
                                <li key={items.id} className='flex items-center justify-center'>
                                    <Link href={items.href} className='w-10 h-10 bg-[var(--secondary-color)] hover:bg-[#e85b1d] transition p-3 rounded-full '> <img src={items.src} alt={items.alt} width={24} height={24} /></Link>
                                </li>
                            ))}
                        </ul>

                        {/* Cross icon */}
                        <Image src="close.svg" alt="close" width={30} height={30} className='absolute top-8 right-8 animate-ping' onClick={toggleMenu} />

                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header