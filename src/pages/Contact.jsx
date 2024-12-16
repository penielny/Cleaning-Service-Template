import React from 'react'
import Navbar from '../components/Navbar'
import { FiPhoneCall } from "react-icons/fi";
import { SERVICE_LISTING } from '../components/ServicesList';
import { Link } from 'react-router-dom';
import { HiLocationMarker } from 'react-icons/hi';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';


export default function Contact() {
  return (
    <div className='h-dvh w-screen overflow-y-auto'>
      <div className='invert'>
        <Navbar />
      </div>
      <div className='container mx-auto text-center flex flex-col items-center space-y-3 justify-center py-24 px-5 md:px-0'>
        <h3 className='text-blue-700 text-sm font-medium'>Contact us</h3>
        <h4 className='text-4xl font-semibold text-gray-900'>Our team of expert are here to help</h4>
        <p className='text-sm text-gray-600'>get support 24/7, with our ward winning support network of growth experts.</p>
        <div className='flex items-center space-x-3 py-5 text-sm font-medium'>
          <button className='flex items-center flex-row justify-center bg-gray-200 gap-2 px-5 py-2 rounded-full'>
            <FiPhoneCall size={16} /> Call Us
          </button>
          <button className='flex items-center flex-row justify-center bg-blue-500 text-white gap-2 px-5 py-2 rounded-full'>
            Book an appointment
          </button>
        </div>
      </div>
      <div className='flex items-center flex-row md:justify-center space-x-5 overflow-x-auto px-10 pb-10'>
        {Array(6).fill(0, 1, 10).map((data, index) => <div className={` h-72 shrink-0 w-60 bg-gray-200 rounded-lg overflow-hidden relative z-10 `}>
          <img className='h-full w-full object-cover' src='https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=2844&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
          <div className='bg-white/30 p-3  absolute bottom-2 left-2 right-2 rounded-sm backdrop-blur-sm z-20'>
            <p className='text-sm font-medium'>Christable Darko</p>
            <p className='text-xs'>Lead Organizer</p>
          </div>
        </div>)}
      </div>
      <div className='container mx-auto flex flex-col md:flex-row  justify-center gap-16 py-20 px-5 md:px-0'>
        <div className='md:w-2/5 flex flex-col'>
          <div className='bg-gray-100 flex flex-col gap-5 p-6 rounded-lg'>
            <h4 className='font-medium text-lg'>Contact our sales team</h4>
            <form method='POST' className='flex flex-col gap-5'>
              <div className='flex flex-row items-center gap-3'>
                <div className='flex flex-col w-1/2 space-y-3 leading-relaxed'>
                  <label className='text-sm text-gray-900 font-medium'>First name</label>
                  <input type='text' placeholder='First Name' className='border p-2 rounded-md text-sm flex-1' />
                </div>
                <div className='flex flex-col w-1/2 space-y-3 leading-relaxed'>
                  <label className='text-sm text-gray-900 font-medium'>Last name</label>
                  <input type='text' placeholder='Last Name' className='border p-2 rounded-md text-sm flex-1' />
                </div>
              </div>
              <div className='flex flex-col w-full space-y-3 leading-relaxed'>
                <label className='text-sm text-gray-900 font-medium'>E-mail</label>
                <input type='email' placeholder='email@domain.com' className='border p-2 rounded-md text-sm flex-1' />
              </div>
              <div className='flex flex-col w-full space-y-3 leading-relaxed'>
                <label className='text-sm text-gray-900 font-medium'>Phone number</label>
                <input type='tel' placeholder='' className='border p-2 rounded-md text-sm flex-1' />
              </div>
              <div className='flex flex-col w-full space-y-3 leading-relaxed'>
                <label className='text-sm text-gray-900 font-medium'>Locality</label>
                <input type='text' className='border p-2 rounded-md text-sm flex-1' />
              </div>
              <div className='flex flex-col w-full space-y-3 leading-relaxed'>
                <label className='text-sm text-gray-900 font-medium'>Choose the most suitable option</label>
                <select className='p-2 rounded-sm'>
                  {SERVICE_LISTING.map((data, index) => <option key={index} value="">{data.label}</option>)}
                </select>
              </div>
              <div className='flex flex-col w-full space-y-3 leading-relaxed'>
                <label className='text-sm text-gray-900 font-medium'>Additional information</label>
                <textarea className='resize-none h-40 rounded-md'>

                </textarea>
              </div>
              <button className='flex items-center flex-row justify-center bg-blue-800 text-white gap-2 px-5 py-3 rounded-full'>
                Send message
              </button>
            </form>
          </div>
        </div>
        <div className='md:w-2/5 flex flex-col space-y-5'>
          <div className='flex flex-col space-y-2 border-b pb-5'>
            <h3 className='font-medium text-lg'>Chat to sales</h3>
            <p className='text-sm text-gray-600'>get support 24/7, with our ward winning support network of growth experts.</p>
            <Link to="" className='underline font-medium text-sm'>support@domain.com</Link>
          </div>
          <div className='flex flex-col space-y-2 border-b pb-5'>
            <h3 className='font-medium text-lg'>Email support</h3>
            <p className='text-sm text-gray-600'>get support 24/7, with our ward winning support network of growth experts.</p>
            <Link to="" className='underline font-medium text-sm'>support@domain.com</Link>
          </div>
          <div className='flex flex-col space-y-2 border-b pb-5'>
            <h3 className='font-medium text-lg'>Chat support</h3>
            <p className='text-sm text-gray-600'>get support 24/7, with our ward winning support network of growth experts.</p>
            <Link to="" className='underline font-medium text-sm'>support@domain.com</Link>
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
          <div className='flex flex-col space-y-2 border-b pb-5'>
            <h3 className='font-medium text-lg'>Sydney</h3>
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
        </div>
      </div>
      <Testimonials/>

      <Footer/>
    </div>
  )
}
