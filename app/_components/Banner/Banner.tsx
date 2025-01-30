import React from 'react';
import Image from 'next/image';
import { FaBookReader } from 'react-icons/fa';
import { GrUserExpert } from 'react-icons/gr';
import { MdOutlineAccessTime } from 'react-icons/md';

function Banner() {
    return (
        <section>
            <div className='container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0'>
                {/* Banner Image */}
                <div className='flex justify-center items-center'>
                    <Image 
                        src='/social.jpg'  // Make sure this path is correct
                        alt='Social Learning' 
                        width={600}  // Adjust as needed
                        height={400} // Adjust as needed
                        className='object-cover drop-shadow rounded-lg' // Added rounded corners
                    />
                </div>

                {/* Banner Text */}
                <div className='flex flex-col justify-center'>
                    <div className='text-center md:text-left space-y-12'>
                        <h1 className='text-3xl md:text-4xl font-bold !leading-snug'>
                            The World's Leading Online Learning Platform
                        </h1>
                        <div className='flex flex-col gap-6'>
                            <div className='flex items-center gap-4 p-6 bg-sky-300 rounded-2xl hover:bg-white duration-300 hover:shadow-2xl'>
                                <FaBookReader className='text-2xl' />
                                <p className='text-lg'>10,000+ Courses</p>
                            </div>
                            <div className='flex items-center gap-4 p-6 bg-sky-300 rounded-2xl hover:bg-white duration-300 hover:shadow-2xl'>
                                <GrUserExpert className='text-2xl' />
                                <p className='text-lg'>Expert Instructions</p>
                            </div>
                            <div className='flex items-center gap-4 p-6 bg-sky-300 rounded-2xl hover:bg-white duration-300 hover:shadow-2xl'>
                                <MdOutlineAccessTime className='text-2xl' />
                                <p className='text-lg'>Lifetime Access</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;
