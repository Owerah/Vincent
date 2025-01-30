import React from 'react'
import { FaBell } from 'react-icons/fa6';

const bgStyle = {
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

function Subscribe() {
  return (
   <section className='bg-[#f7f7f7]'>
      <div style={bgStyle} className='container py-10 md:py-20'>
        <div className='flex flex-col justify-center'>
          <div className='text-center space-y-4 lg:max-w-[430px] mx-auto'>
            <h1 className='text-4xl font-bold 
            !leading-snug'>450k+ Students are learning from us
            </h1>
            <p>Stay ahead with the latest web development tips, tutorials, and trends.
              Subscribe now to elevate your skills
              </p>
              <a href="https://www.youtube.com/@vincentomondi7328" className='primary-btn !mt-8 inline-flex
              items-center gap-4 group'>
                Subscribe Now
                <FaBell className='text-yellow-400 group-hover:animate-bounce group-hover:text-lg duration-200' />


              </a>
          </div>
        </div>
      </div>
   </section>
  )
}

export default Subscribe