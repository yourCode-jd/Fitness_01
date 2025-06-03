import React from 'react'

function ContactForm() {
    return (
        <section className='pb-20 lg:pb-40'>
            <div className='container'>
                <h1 className='main_heading text-center max-w-full md:max-w-1/2 mx-auto!'>Receive <em className='animated'>Exclusive </em>Promotions</h1>
                <div className=" bg-[#f6e9db] flex items-center justify-center">
                    <form className="bg-[#f6e9db] pt-15 rounded-md space-y-4 w-full max-w-3xl">
                        <div className="flex flex-wrap md:flex-nowrap gap-4">
                            <input
                                type="text"
                                placeholder="Name"
                                className="flex-1 p-4 bg-[#eee1d2] text-gray-500 placeholder-gray-500 rounded-md focus:outline-none"
                            />
                            <input
                                type="text"
                                placeholder="Phone Number"
                                className="flex-1 p-4 bg-[#eee1d2] text-gray-500 placeholder-gray-500 rounded-md focus:outline-none"
                            />
                        </div>
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full p-4 bg-[#eee1d2] text-gray-500 placeholder-gray-500 rounded-md focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="w-full py-4 bg-[var(--secondary-color)] text-white font-semibold rounded-md hover:bg-[#e85b1d] transition"
                        >
                            Contact Us
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactForm