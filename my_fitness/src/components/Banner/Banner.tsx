'use client'
import React from 'react'


function Banner() {
    return (
        <div className='flex items-center justify-start h-screen bg-[var(--primary-color)]'>
            <div className='container'>
                <div className='flex items-center justify-center gap-8 relative h-full masked-text'>
                    <div className='h-full masked-text'>
                        <h1 className='main_heading leading-[70px] text-center'>Outside Health <br />
                            Starts <em className="animated">Inside</em></h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner