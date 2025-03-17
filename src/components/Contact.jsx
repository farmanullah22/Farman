import React from 'react'
import Navbar from './Navbar'
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
    return (
        <div className='md:rounded-xl bg-gray-600 md:m-7 flex-1 p-7'>
            <Navbar />
            <div className='mt-7'>
                <h1 className='text-white font-bold text-3xl mb-2'>Contact Me</h1>
                <hr className='border-3 text-yellow-500 w-12 rounded-4xl' />
                <div className='mt-10'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1739.5030828370284!2d71.52673583971121!3d33.96342474317599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d9182d8f5ce6b5%3A0xc7ccb333f2b5d3e6!2sSarhad%20University%20of%20Science%20%26%20Information%20Technology!5e0!3m2!1sen!2s!4v1742246418305!5m2!1sen!2s" width="600" height="450" loading="lazy" className='w-full rounded-2xl'></iframe>
                </div>
                <div className='mt-10'>
                    <h1 className='text-white font-bold text-2xl mb-2'>Contact Form</h1>
                    <div className='grid grid-cols-2 gap-3 md:gap-7 my-7'>
                        <input type="text" placeholder='Full Name' className='text-white font-semibold border-2 p-3 rounded-xl bg-gray-800'/>
                        <input type="email" placeholder='Email Address' className='text-white font-semibold border-2 p-3 rounded-xl bg-gray-800'/>
                    </div>
                    <textarea rows={4} cols={50} placeholder='Your Message' className='text-white font-semibold border-2 p-3 rounded-xl bg-gray-800 w-full'></textarea>
                    <div className='flex justify-end mt-7'>
                        <button className='flex gap-3 items-center px-4 py-3 rounded-xl font-semibold bg-gray-800 text-yellow-600 border border-gray-300 cursor-pointer'><FaPaperPlane/> Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
