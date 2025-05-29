import React from 'react'
import { socialLinks } from '@/data/socialLinks'
import Link from 'next/link'



function Footer() {
    return (
        <footer className=' border-t border-[var(--secondary-color)]'>
            <div className='container'>
                <ul className='flex items-center space-x-4 justify-center py-4'>
                    {socialLinks.map((items) => (
                        <li key={items.id} className='w-10 h-10 bg-[var(--secondary-color)] p-3 rounded-full flex items-center justify-center'>
                            <Link href={items.href}> <img src={items.src} alt={items.alt} width={24} height={24} /></Link>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}

export default Footer 