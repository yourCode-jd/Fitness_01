'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'

function About() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section ref={ref}>
            <div className='container'>
                <div className='relative flex flex-col lg:flex-row items-center justify-center gap-20'>
                    {/* <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className='w-1/2 p-0 h-[700px] masked-text'
                    >
                        <Image
                            src="/flower2.jpg"
                            alt="About Me"
                            width={500}
                            height={500}
                            className='w-full h-full object-cover'
                        />
                    </motion.div> */}

                    <div className='w-1/2 p-0 h-[700px] masked-text'>
                        <Image
                            src="/flower2.jpg"
                            alt="About Me"
                            width={500}
                            height={500}
                            className='w-full h-full object-cover'
                        />
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                        className='w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left '>
                        <h2 className='main_heading relative -left-40'>Elevate Your Body <br></br>and <em className='animated'>Mind</em></h2>
                        <p className='main_paragraph mt-14! '>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos earum eius harum! Laborum et cum quaerat maiores sit, distinctio deserunt quas minima odit.
                        </p>
                        <button className='main_btn mt-6 '><span>-</span> Read More</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About
