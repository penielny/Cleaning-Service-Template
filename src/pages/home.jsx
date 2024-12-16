import React from 'react'
import { Link } from 'react-router-dom'
import hnmLogo from './../assets/HM_logo.png'
import postnordLogo from './../assets/postnord.png'
import tntLogo from './../assets/tnt_logo.png'
import dhlLogo from './../assets/dhl.png'
import { PiClockCounterClockwise, PiHandCoins } from "react-icons/pi";
import { LuMedal } from "react-icons/lu";
import { MdArrowOutward } from "react-icons/md";
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Testimonials from '../components/Testimonials'



export default function Home() {
  return (
    <div className="w-screen h-dvh overflow-y-auto">

      <header className="h-[60dvh] md:h-[85dvh] flex flex-col justify-between w-full bg-black/20 bg-blend-multiply" style={{ backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", backgroundImage: `url(https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }}>

        <Navbar />
        <div className='container mx-auto py-10 px-5 md:px-0'>
          <div className='md:w-3/4 flex flex-col space-y-5 text-white leading-relaxed  md:pr-40'>
            <h1 className='text-2xl md:text-5xl font-medium leading-snug'>Professional Cleaning Services for Your Best Space</h1>
            <p className='text-sm md:text-2xl font-light'>Your go-to for professional cleaning services. Elevate your space with Brand</p>
          </div>
        </div>
      </header>



      <div className="h-[15dvh] flex flex-row space-x-6 md:space-x-32 items-center justify-center bg-blue-500">
        <img className="h-6 md:h-10 invert" src={hnmLogo} />
        <img className="h-6 md:h-10 invert" src={postnordLogo} />
        <img className="h-16 md:h-32 invert" src={tntLogo} />
        <img className="h-20 md:h-36 invert" src={dhlLogo} />
      </div>

      <div className="bg-gray-200 flex flex-row min-h-20">
        <div className="container flex flex-col space-y-5 md:space-y-0 px-5 md:px-0 md:flex-row mx-auto py-20">
          <div className="md:w-1/2">
            <h1 className='text-3xl font-medium leading-snug'>Elevate your lifestyle with Professional Cleaning Services</h1>
          </div>
          <div className="md:w-2/3 flex flex-col space-y-10">
            <p className='text-gray-800 leading-relaxed'><span className="hidden md:flex">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> We are Reged, where cleanliness meets excellence. Our profossional cleaning services redefine your spaces, creating on environment that goes boyond clean--it's a lifestyle elevation.
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

      <div className="flex container mx-auto flex-col md:flex-row space-y-10 md:space-y-0 md:items-center space-x-10 min-h-[40vh] py-10">
        <div className="md:w-1/2 flex flex-1 flex-row space-x-2">
          <div className="w-1/2 flex flex-col space-y-2 h-full">
            <div className="w-full h-40 flex bg-blue-500 overflow-hidden ">
              <img className="flex-1 object-cover object-center" src={"https://images.unsplash.com/flagged/photo-1560532886-43f59bee690d?q=80&w=2968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />

            </div>
            <div className="w-full h-40 flex bg-blue-500 overflow-hidden ">
              <img className="flex-1 object-cover object-center" src={"https://images.unsplash.com/photo-1445991842772-097fea258e7b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />

            </div>
          </div>
          <div className="w-1/2 flex bg-blue-500 overflow-hidden ">
            <img className="flex-1 object-cover object-center" src={"https://plus.unsplash.com/premium_photo-1723514470777-e03c36f6b3a7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />

          </div>
        </div>
        <div className="md:w-1/2 flex flex-col space-y-5 flex-1">
          <h3 className="text-3xl font-medium">Crafting Clean Spaces, Creating Happy Places</h3>
          <p className="text-lg leading-relaxed text-gray-500">Discover our story, mission, and the team behind the impeccable service that elevates your living and working environments. Your satisfaction is our inspiration, and cleanliness is our commitment."</p>
          <button className='w-fit px-5 py-3 text-white bg-blue-600'>
            Learn More
          </button>
        </div>
      </div>


      <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 items-center container mx-auto py-10 px-5 md:px-0">

        <div className="md:w-1/2 flex flex-col space-y-2 flex-1 pr-10">
          <h3 className="text-2xl font-medium tracking-wider">Why Choose Reged?</h3>
          <p className="text-lg leading-relaxed text-gray-500">
            Elevate Your Space with Confidence. Explore the compelling reasons why clients consistently choose us for their cleaning needs.</p>
        </div>

        <div className="md:w-1/2 flex flex-col space-y-5 flex-1">
          <div className="border p-5 flex flex-col space-y-3 hover:bg-blue-50 hover:translate-x-10 cursor-pointer transition-all hover:shadow-sm">
            <div className="flex flex-row space-x-3 items-center">
              <div className="border text-blue-500 rounded-full p-1">
                <PiClockCounterClockwise size={23} />
              </div>
              <p className="font-medium">Exceptional Expertise</p>
            </div>
            <p className="text-sm font-light text-gray-600">
              Our seasoned professionals bring wealth of knowledge, ensuring meticulous cleaning tailored to your specific needs.
            </p>
          </div>

          <div className="border p-5 flex flex-col space-y-3 hover:bg-blue-50 hover:translate-x-10 cursor-pointer transition-all hover:shadow-sm">
            <div className="flex flex-row space-x-3 items-center">
              <div className="border text-blue-500 rounded-full p-1">
                <LuMedal size={23} />
              </div>
              <p className="font-medium">Trusted and Reliable</p>
            </div>
            <p className="text-sm font-light text-gray-600">
              Our seasoned professionals bring wealth of knowledge, ensuring meticulous cleaning tailored to your specific needs.
            </p>
          </div>

          <div className="border p-5 flex flex-col space-y-3 hover:bg-blue-50 hover:translate-x-10 cursor-pointer transition-all hover:shadow-sm">
            <div className="flex flex-row space-x-3 items-center">
              <div className="border text-blue-500 rounded-full p-1">
                <PiHandCoins size={23} />
              </div>
              <p className="font-medium">Customize Solutions</p>
            </div>
            <p className="text-sm font-light text-gray-600">
              Our seasoned professionals bring wealth of knowledge, ensuring meticulous cleaning tailored to your specific needs.
            </p>
          </div>
        </div>

      </div>


      <Testimonials />


      <div className="py-10 flex flex-col space-y-5">

        <div className="md:w-1/3 px-5 md:px-0 mx-auto flex flex-col space-y-3 items-center text-center">
          <h3 className="text-2xl">Discover Our Cleaning Expertise </h3>
          <p className="text-gray-500">Tailored Services for Homes, Offices, and Beyond Reged, Where Cleanliness Meets Precision.</p>
        </div>

        <div className="flex flex-col space-y-10 pt-10 px-5 md:px-0">
          <div className="border-b pb-5">

            <Link to="/services" className="text-xl text-gray-500 cursor-pointer hover:font-bold transition-all hover:text-gray-700  container mx-auto flex items-center justify-between">
              <p className=" font-bold text-blue-400">01</p>
              <p>Residential Cleaning</p>
              <div> <MdArrowOutward size={30} /> </div>
            </Link>
          </div>
          <div className="border-b pb-5">

            <Link to="/services" className="text-xl text-gray-500 cursor-pointer hover:font-bold transition-all hover:text-gray-700  container mx-auto flex items-center justify-between">
              <p className=" font-bold text-blue-400">02</p>
              <p>Commercial Cleaning</p>
              <div> <MdArrowOutward size={30} /> </div>
            </Link>
          </div>
          <div className="border-b pb-5">

            <Link to="/services" className="text-xl text-gray-500 cursor-pointer hover:font-bold transition-all hover:text-gray-700  container mx-auto flex items-center justify-between">
              <p className=" font-bold text-blue-400">03</p>
              <p>Special Cleaning</p>
              <div > <MdArrowOutward size={30} /> </div>
            </Link>
          </div>
        </div>

      </div>


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
