'use client'
import React, { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation/nav'
import Image from 'next/image'
import { socialLinks } from '@/data/socialLinks'
import Link from 'next/link'

function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    // Add/remove `overflow-hidden` on <body> when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden')
        } else {
            document.body.classList.remove('overflow-hidden')
        }

        // Clean up on unmount
        return () => {
            document.body.classList.remove('overflow-hidden')
        }
    }, [isOpen])

    return (
        <header className='main-header fixed w-full left-0 right-0 z-50'>
            <div className='fluid-container'>
                <div className='flex justify-between items-center gap-2.5 py-6 '>
                    <h1 className='masked-text text-3xl font-bold tracking-widest text-white'>
                        <em className='p-0! animated'>LOGO</em>
                    </h1>
                    <Image
                        src="hamBurger.svg"
                        alt="hamburger"
                        width={45}
                        height={45}
                        className='masked-text cursor-pointer'
                        onClick={toggleMenu}
                    />
                </div>

                {/* Mobile/Tablet Menu */}
                <div className={`fixed top-0 right-0 backdrop-blur-xl md:backdrop-blur-lg bg-opacity-60 w-80 h-screen flex items-center justify-center transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className='flex flex-col items-center h-full'>

                        <Navigation />

                        <ul className='flex items-center space-x-4 justify-center py-4'>
                            {socialLinks.map((items) => (
                                <li key={items.id} className='flex items-center justify-center'>
                                    <Link href={items.href} className='w-10 h-10 bg-[var(--secondary-color)] hover:bg-[#e85b1d] transition p-3 rounded-full'>
                                        <img src={items.src} alt={items.alt} width={24} height={24} />
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <Image
                            src="close.svg"
                            alt="close"
                            width={30}
                            height={30}
                            className='absolute top-8 right-8 animate-ping cursor-pointer'
                            onClick={toggleMenu}
                        />

                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
