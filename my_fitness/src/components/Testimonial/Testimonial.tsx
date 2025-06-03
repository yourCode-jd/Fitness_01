import React from 'react'
import { testimonialsList } from '@/data/testimonial'

function Testimonial() {
    return (
        <section className=''>
            <div className='flex bg-[var(--primary-color)] bg-opacity-60 backdrop-blur-xs h-full lg:h-[800px]'>
                <ul className='grid grid-cols-1 md:grid-cols-2 gap-12 px-6 py-10 md:py-30 md:px-20 masked-text'>
                    {testimonialsList.map((testimonial, index) => (
                        <li key={testimonial.id} className={`${index === 1 ? 'mt-auto' : ''} `}>
                            <p className='main_smallHeading text-2xl lg:text-4xl! leading-normal! tracking-normal! font-open-sans! text-[var(--background)]!'>{testimonial.description}</p>
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