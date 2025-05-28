import React from 'react'
import { testimonialsList } from '@/data/testimonial'

function Testimonial() {
    return (
        <section className=''>
            <div className='flex bg-[var(--primary-color)] bg-opacity-60 backdrop-blur-xs h-[800px]'>
                <ul className='grid grid-cols-2 gap-12 py-30 px-20 masked-text'>
                    {testimonialsList.map((testimonial, index) => (
                        <li key={testimonial.id} className={`${index === 1 ? 'mt-auto' : ''} `}>
                            <p className='main_smallHeading text-4xl! leading-normal font-open-sans! text-[var(--background)]!'>{testimonial.description}</p>
                            <h3 className='text-[var(--background)]! font-bold! mt-3! '>{testimonial.title}</h3>
                            <h4 className='text-[var(--background)]! text-sm '>{testimonial.designation}</h4>
                        </li>
                    ))}

                </ul>
            </div>
        </section>
    )
}

export default Testimonial