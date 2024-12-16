import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { MdArrowOutward } from 'react-icons/md'
import { FaChevronDown } from "react-icons/fa";
import ServicesList from '../components/ServicesList';

export default function Services() {
    return (
        <div className="h-dvh w-screen overflow-y-auto">
            <header className="h-[60dvh] flex flex-col w-screen bg-black/40 bg-blend-multiply" style={{ backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", backgroundImage: `url(https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }}>

                <Navbar />
                <div className="flex flex-1 flex-col items-center justify-center space-y-5">
                    <h3 className="text-5xl font-bold text-white">Our Services</h3>
                    <p className="md:w-2/5 text-gray-200 text-center">We are Reged, where cleanliness meets excellence. Our profossional cleaning services redefine your spaces, creating on environment that goes </p>
                </div>
            </header>
            <div className="bg-gray-200 flex flex-row min-h-20">
                <div className="container flex flex-col md:flex-row mx-auto py-20 px-5 mx:px-0 space-y-5">
                    <div className="md:w-1/2">
                        <h1 className='text-3xl font-medium leading-snug'>Elevate your lifestyle with Professional Cleaning Services</h1>
                    </div>
                    <div className="md:w-2/3 flex flex-col space-y-10">
                        <p className='text-gray-800 leading-relaxed'><span className='hidden md:flex'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> We are Reged, where cleanliness meets excellence. Our profossional cleaning services redefine your spaces, creating on environment that goes boyond clean--it's a lifestyle elevation.
                            From homes to offices, trust Reged to bring joy and freshness to every cornor.</p>
                        <div className='flex flex-row'>
                            <div className="w-1/3 flex flex-col items-center justify-center space-y-1">
                                <p className='text-xl text-blue-700 font-bold'>+300</p>
                                <p className='text-sm text-gray-500 font-light'>Happy Clients</p>
                            </div>
                            <div className="w-1/3 flex flex-col items-center justify-center space-y-1 border-gray-300 border-x">
                                <p className='text-xl text-blue-700 font-bold'>+300</p>
                                <p className='text-sm text-gray-500 font-light'>Happy Clients</p>
                            </div>
                            <div className="w-1/3 flex flex-col items-center justify-center space-y-1">
                                <p className='text-xl text-blue-700 font-bold'>+300</p>
                                <p className='text-sm text-gray-500 font-light'>Happy Clients</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ServicesList />

            <div className="bg-blue-500/70 bg-blend-multiply min-h-[50vh] bg-no-repeat flex flex-col items-center justify-center bg-center bg-cover" style={{ backgroundImage: `url(https://plus.unsplash.com/premium_photo-1661780846403-f76bb9854746?q=80&w=2895&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }}>
        <div className="flex flex-col space-y-10 items-center justify-center w-3/4 md:w-2/4 text-center">
          <p className=" text-3xl md:text-5xl text-white leading-tight font-medium">Awaken the Brilliance of Your Space with Reged</p>
          <button className='bg-white w-[40vw] md:w-[20vw] px-3 py-5 text-gray-900'>
            Contact us
          </button>
        </div>
      </div>

            <Footer />
        </div>
    )
}
