import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className="container mx-auto pb-10">
      <footer className='py-10 flex flex-col space-y-10 md:space-y-0 md:flex-row items-start justify-between px-3 md:px-0'>
        <h1>BrandLogo</h1>
        <div className='flex flex-row space-x-5 w-full'>
          <div className='flex flex-col flex-1 md:w-[10vw] space-y-3'>
            <h3 className='text-black font-medium text-sm'>About</h3>
            <Link to="/" className="text-gray-500 text-sm font-light">Company</Link>
            <Link to="/" className="text-gray-500 text-sm font-light">Our Service</Link>
            <Link to="/" className="text-gray-500 text-sm font-light">Featured</Link>
            <Link to="/" className="text-gray-500 text-sm font-light">Testimonials</Link>
          </div>
          <div className='flex flex-col flex-1 md:w-[10vw] space-y-3'>
            <h3 className='text-black font-medium text-sm'>Help</h3>
            <Link to="/" className="text-gray-500 text-sm font-light">Contact Us</Link>
            <Link to="/" className="text-gray-500 text-sm font-light">FAQ</Link>
            <Link to="/" className="text-gray-500 text-sm font-light">Terms of Service</Link>
            <Link to="/" className="text-gray-500 text-sm font-light">Customer Service</Link>
          </div>
          <div className='flex flex-col flex-1 md:w-[10vw] space-y-3'>
            <h3 className='text-black font-medium text-sm'>Legal</h3>
            <Link to="/" className="text-gray-500 text-sm font-light">Privacy Policy</Link>
            <Link to="/" className="text-gray-500 text-sm font-light">Copyright</Link>
          </div>
        </div>
      </footer>
      <div className="border-t md:mx-36 flex items-center justify-center pt-5">
        <p className="text-sm text-gray-500">Copyright &copy;reged 2023. All rights reserved.</p>
      </div>
    </div>
  )
}
