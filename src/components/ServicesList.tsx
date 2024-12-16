import { label } from 'motion/react-client'
import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'



export const SERVICE_LISTING = [
    {
        label: 'Residential Cleaning',
        services: [
            {
                image: "https://plus.unsplash.com/premium_photo-1679775634064-93628bf1d0cd?q=80&w=2782&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                label: "Mattress Cleaning"
            },
            {
                image: "https://plus.unsplash.com/premium_photo-1661304818621-0fceeb066f2d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                label: "End of Tenancy"
            },
            {
                image: "https://plus.unsplash.com/premium_photo-1678718604563-5268de669666?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                label: "Upholstrey Cleaning"
            },
            {
                image: "https://plus.unsplash.com/premium_photo-1677452907417-efabc1535aff?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                label: "Carpet Cleaning"
            },
            {
                image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                label: "Wall Cleaning"
            }
        ]
    },
    {
        label: 'Commercial Cleaning',
        services: [
            {
                image: "https://plus.unsplash.com/premium_photo-1679500355493-2a1ce67cb938?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                label: "Oven Cleaning"
            }
        ]
    },
    {
        label: 'Special Cleaning',
        services: [
            {
                image: "https://plus.unsplash.com/premium_photo-1679500355493-2a1ce67cb938?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                label: "Some other service"
            }
        ]
    }
]



export default function ServicesList() {

    const [currentState, setCurrentState] = useState(0);

    return (
        <div className="py-10 flex flex-col space-y-5 px-3 md:px-0">

            <div className="md:w-1/3 mx-auto flex flex-col space-y-3 items-center text-center">
                <h3 className="text-2xl">Discover Our Cleaning Expertise </h3>
                <p className="text-gray-500">Tailored Services for Homes, Offices, and Beyond Reged, Where Cleanliness Meets Precision.</p>
            </div>

            <div className="flex flex-col space-y-10 py-10">
                {SERVICE_LISTING.map((service, index) => <div key={`main-service-${index}`} className="border-b pb-5 flex flex-col space-y-10">

                    <div className="text-xl text-gray-500 cursor-pointer hover:font-bold transition-all hover:text-gray-700  container mx-auto flex items-center justify-between">
                        <p className=" font-bold text-blue-400">0{index + 1}</p>
                        <p>{service.label}</p>
                        <button onClick={() => {
                            if (currentState !== index) {
                                setCurrentState(index)
                                return
                            }
                            setCurrentState(NaN)
                        }}>
                            <FaChevronDown className={`${currentState !== index ? '' : 'rotate-180'} transition-all`}  />
                        </button>
                    </div>
                    <div className={`bg-white ${currentState == index ? ' min-h-20' : 'h-0 '} transition-all overflow-hidden container mx-auto grid grid-cols-2 md:grid-cols-4 gap-5`}>
                        {service.services.map((data, idx) => <div key={`sub-${index}-${idx}`} className='flex-1 border rounded flex flex-col min-h-36 bg-white shadow-sm overflow-hidden'>
                            <div className='bg-gray-100 h-[30vh] overflow-hidden'>
                                <img className='flex-1 h-full w-full object-center object-cover' src={data.image} />
                            </div>
                            <div className='bg-white shrink-0'>
                                <p className="text-center text-sm py-3 ">{data.label}</p>
                            </div>

                        </div>)}

                    </div>
                </div>)}

            </div>

        </div>
    )
}
