import React, { useEffect, useRef, useState } from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { HiLocationMarker } from 'react-icons/hi';
export default function Navbar() {
    const [showSlider, setShowSlider] = useState(false);

    return (<>
        <nav className="flex flex-row items-center justify-between container mx-auto text-white py-5 font-light pl-5 md:px-0">

            <div className='flex items-center space-x-6'>
                <div className='md:pr-10 border-gray-300 md:border-r'>
                    <h1 className='font-bold text-lg'>BrandLogo</h1>
                </div>
                <Link className='hidden md:flex text-sm font-medium hover:text-blue-800 hover:underline transition-all delay-75' to="/">Home</Link>
                <Link className='hidden md:flex text-sm font-medium hover:text-blue-800 hover:underline transition-all delay-75' to="/services">Our Services</Link>
                <Link className='hidden md:flex text-sm font-medium hover:text-blue-800 hover:underline transition-all delay-75' to='/contact'>Contact Us</Link>
            </div>
            <button className='hidden md:flex bg-white px-3 py-2 text-gray-900'>
                Get in touch
            </button>

            <button onClick={() => {
                setShowSlider(prev => !prev)
            }} className='bg-blue-500 p-2 flex md:hidden'>
                <HiBars3BottomRight size={30} />
            </button>
        </nav>

        {showSlider && <motion.div className={` md:hidden absolute top-0 left-0 h-dvh right-0 flex justify-end overflow-y-hidden z-50 bg-black/30 backdrop-blur-sm`}>
            <div className='bg-transparent flex-1' onClick={() => setShowSlider(prev => !prev)}>

            </div>
            <motion.div exit={{ x: "80vw" }} initial={{ x: "80vw" }} animate={{ x: 0 }} className='flex flex-col space-y-6 bg-white w-3/4 p-6 h-full overflow-y-auto transition-all delay-75 duration-200'>
                <div className='md:pr-10 border-gray-300 md:border-r'>
                    <h1 className='font-bold text-lg'>BrandLogo</h1>
                </div>
                <Link onClick={() => setShowSlider(prev => !prev)} className='text-gray-500 text-sm font-medium hover:text-blue-800 hover:underline transition-all delay-75' to="/">Home</Link>
                <Link onClick={() => setShowSlider(prev => !prev)} className='text-gray-500 text-sm font-medium hover:text-blue-800 hover:underline transition-all delay-75' to="/services">Our Services</Link>
                <Link onClick={() => setShowSlider(prev => !prev)} className='text-gray-500 text-sm font-medium hover:text-blue-800 hover:underline transition-all delay-75' to='/contact'>Contact Us</Link>
                <div className='flex-1'></div>
                <div>

                </div>
                <div className='flex flex-col space-y-2 border-b pb-5'>
                    <h3 className='font-medium text-lg'>Call us</h3>
                    <p className='text-sm text-gray-600'>get support 24/7, with our ward winning support network of growth experts.</p>
                    <Link to="" className='underline font-medium text-sm'>support@domain.com</Link>
                    <Link to="" className='underline font-medium text-sm'>support@domain.com</Link>
                </div>
                <div className='flex flex-col space-y-2 border-b pb-5'>
                    <h3 className='font-medium text-lg'>Melborne</h3>
                    <p className='text-sm text-gray-600'>get support 24/7, with our ward winning support network of growth experts.</p>
                    <div className='flex flex-row items-start space-x-3'>
                        <div className='pt-1'>
                            <HiLocationMarker />
                        </div>
                        <div className='flex flex-col'>
                            <Link to="" className='underline font-medium text-sm'>support@domain.com</Link>
                            <Link to="" className='underline font-medium text-sm'>support@domain.com</Link>
                        </div>

                    </div>
                </div>
                <Link to="contact" className='flex items-center flex-row justify-center bg-blue-800 text-white gap-2 px-5 py-3 rounded-full'>
                Send message
              </Link>
            </motion.div>
        </motion.div>}

    </>
    )
}
