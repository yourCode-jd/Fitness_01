'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { features, featuresList } from '@/data/feature'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'

export const Features = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    const fadeBlurUp = {
        hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
                duration: 0.6,
                ease: 'easeOut',
                delay: i * 0.2,
            },
        }),
    }

    return (
        <section ref={ref} className="py-24 overflow-hidden">
            <div className="container">
                <div className="flex flex-col items-center justify-center gap-20">
                    {/* Heading with masked reveal */}
                    <motion.p
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                        variants={{
                            hidden: { opacity: 0, y: 20, clipPath: 'inset(100% 0 0 0)' },
                            visible: {
                                opacity: 1,
                                y: 0,
                                clipPath: 'inset(0 0 0 0)',
                                transition: { duration: 0.8, ease: 'easeOut' },
                            },
                        }}
                        className="main_medHeading masked-text"
                    >
                        <em className='animated link'><Link href="/membership">Achieve</Link></em> your goals easier than ever before. We offer a wide range of rewarding amenities which are all <em className='animated link'><Link href="/membership">personalized</Link></em> to specific <em className='animated link'><Link href="/clients">your needs</Link></em>.
                    </motion.p>

                    {/* Features Grid */}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                        {features.map((items, index) => (
                            <motion.li
                                key={index}
                                custom={index}
                                initial="hidden"
                                animate={isInView ? 'visible' : 'hidden'}
                                variants={fadeBlurUp}
                            >
                                <div className="relative min-h-[400px] bg-[#0d0d0d] overflow-hidden p-10 rounded-xl shadow-xl flex justify-end flex-col">

                                    {/* Floating Icon with Parallax Effect */}
                                    <motion.div className='absolute top-0 left-0 w-full h-full object-cover blur-sm '>
                                        <Image
                                            src={items.src}
                                            alt={items.title}
                                            width={400}
                                            height={400}
                                            className=" w-full h-full object-cover"
                                        />
                                    </motion.div>

                                    {/* Masked Title */}
                                    <motion.h3
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: index * 0.2 + 0.2, duration: 0.4 }}
                                        className="main_medHeading textGradient mb-3 masked-text text-white!"
                                    >
                                        <em className='animated'>{items.title}</em>
                                    </motion.h3>

                                    {/* Description */}
                                    <motion.p
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: index * 0.2 + 0.3, duration: 0.4 }}
                                        className="main_paragraph text-white! z-[1] relative mt-0!"
                                    >
                                        {items.description}
                                    </motion.p>

                                    {/* Glow hover ring */}
                                    {/* <div className="absolute -inset-px bg-gradient-to-r from-fuchsia-500 to-purple-500 opacity-0 group-hover:opacity-30 blur-lg rounded-xl transition-opacity duration-500 pointer-events-none" /> */}
                                </div>
                            </motion.li>
                        ))}
                    </ul>
                </div>
                <div className="relative mt-18 masked-text">
                    <ul className='grid grid-cols-4 gap-4'>
                        {featuresList.map((section, index) => (
                            <li key={index}>
                                <h4 className="main_smallHeading font-bold! tracking-normal!">{section.title}</h4>
                                <ul>
                                    {section.items.map((item, idx) => (
                                        <li key={idx} className='main_paragraph mt-0!'>{item}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </section>
    )
}
