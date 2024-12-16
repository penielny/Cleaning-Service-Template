import React from 'react'
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md'
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri'

export default function Testimonials() {
    return (
        <div className="bg-black/80 min-h-[30vh] bg-blend-multiply py-20 px-5 md:px-0" style={{ backgroundImage: `url(https://static.vecteezy.com/system/resources/previews/041/885/563/non_2x/floral-pattern-background-with-flowers-leaf-ornamental-design-dark-blue-colors-for-fashionable-modern-wallpaper-or-textiles-book-covers-digital-interfaces-graphic-printing-design-templates-vector.jpg)` }}>
            <div className="container mx-auto flex flex-col md:flex-row items-start space-y-10 md:space-y-0">
                <div className="md:w-1/2 flex flex-col space-y-3 flex-1 pr-10">
                    <h3 className="text-2xl font-medium tracking-wider text-gray-100">Reged in the Eyes of Our Clients</h3>
                    <p className="text-lg leading-relaxed text-gray-500">
                        Explore the testimonials from our valued clients who have experienced the Reged difference. Hear their stories of transformed spaces and unparalleled service
                    </p>
                </div>
                <div className="md:w-1/2 flex flex-col space-y-5">
                    <div className="border border-gray-500/50 p-5 flex flex-col space-y-3 text-gray-600 hover:text-white cursor-pointer transition-all hover:shadow-sm">
                        <p className="text-lg flex items-start font-light  ">
                            <span>
                                <RiDoubleQuotesL size={10} />
                            </span>
                            I appreciate their dedication to providing a top-notch cleaning service. My living space has never looked and felt this good. Thank you.
                            <span>
                                <RiDoubleQuotesR size={10} />
                            </span>
                        </p>
                        <p className="text-lg font-bold ">--Jame Blake</p>
                    </div>
                    <div className="flex flex-row items-center space-x-5 justify-between">
                        <button className="text-gray-500 hover:text-gray-200 border-gray-600 transition-all hover:border-gray-300 px-5 py-2 border">
                            <MdNavigateBefore size={20} />
                        </button>
                        <div className="text-gray-500">
                            <p>1 / 10</p>
                        </div>
                        <button className="text-gray-500 hover:text-gray-200 border-gray-600 transition-all hover:border-gray-300 px-5 py-2 border">
                            <MdNavigateNext size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
