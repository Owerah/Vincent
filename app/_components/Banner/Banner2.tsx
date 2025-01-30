import React from 'react'


function Banner2() {
    return (
        <section>
            <div className='container py-14 md:py-10 grid grid-cols-1
            md:grid-cols-2 gap-8 space-y-6 md:space-y-0'>
                {/* Banner Text */}
                  <div className='flex flex-col justify-center'>
                    <div className='text-center md:text-left space-y-4
                    lg:mx-w-[450px]'>
                    <h1 className='text-4xl font-bold
                    !leading-snug'>Join Our Community to start your journey</h1>
                    <p className='text-dark2'>Join our vibrant community of web developers and start
                     building, learning, and growing together</p>
                     <a href="https://chat.whatsapp.com/HyXDEtvH37jCiZts5BtUSB" className='primary-btn !mt-8'>
                        Join now
                     </a>
                  </div>
                  </div>
               {/* Banner Image */}
               <div className='flex justify-center items-center'>
                <img src='community.jpg' className='w-[350px] md:max-w-[450px]
                object-cover drop-shadow'/>
               </div>
            </div>
        </section>
    )
}

export default Banner2