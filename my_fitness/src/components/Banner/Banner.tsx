'use client'
import React from 'react'

function Banner() {
    return (
        <div className='relative h-screen overflow-hidden'>
            {/* Video Background */}
            <video
                className='absolute top-0 left-0 w-full h-full object-cover z-0'
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="/bannerVideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay Content */}
            <div className='relative z-10 flex items-center justify-start h-full bg-opacity-60 backdrop-blur-xs'>
                <div className='container'>
                    <div className='flex items-center justify-center gap-8 h-full masked-text'>
                        <div className='masked-text'>
                            <h1 className='main_bannerHeading text-[var(--background)]! leading-[70px] text-center'>
                                Outside Health <br />
                                Starts <em className="animated">Inside</em>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
