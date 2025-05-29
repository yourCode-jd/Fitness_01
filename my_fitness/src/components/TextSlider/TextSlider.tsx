import React from 'react'
import { textSlider } from '@/data/textSlider'

function TextSlider() {
    return (
        <div className='overflow-hidden bg-[var(--secondary-color)] '>
            <ul className=' textSlider flex items-center space-x-3 py-10'>
                {textSlider.map((text, index) => (
                    <li key={index} className='text-4xl font-bold text-[var(--white-color)] font-cormorant'>{text}<span>⚬</span></li>
                ))}
            </ul>
        </div>
    )
}

export default TextSlider