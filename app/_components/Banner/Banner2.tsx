import React from 'react';
import Image from 'next/image';

function Banner2() {
    return (
        <section>
            <div className='container py-14 md:py-10 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0'>
                {/* Banner Text */}
                <div className='flex flex-col justify-center'>
                    <div className='text-center md:text-left space-y-4 lg:max-w-[450px]'>
                        <h1 className='text-4xl font-bold !leading-snug'>
                            Join Our Community to Start Your Journey
                        </h1>
                        <p className='text-dark2'>
                            Join our vibrant community of web developers and start building, learning, and growing together.
                        </p>
                        <a href="https://chat.whatsapp.com/HyXDEtvH37jCiZts5BtUSB" className='primary-btn !mt-8'>
                            Join Now
                        </a>
                    </div>
                </div>

                {/* Banner Image */}
                <div className='flex justify-center items-center'>
                    <Image 
                        src='/community.jpg'  // Ensure the image is in the "public" folder
                        alt='Community'
                        width={450}  // Adjust as needed
                        height={350} // Adjust as needed
                        className='object-cover drop-shadow rounded-lg' 
                    />
                </div>
            </div>
        </section>
    );
}

export default Banner2;
