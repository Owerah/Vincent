import React from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';
import Navbar from '../Navbar/Navbar';

const Hero = () => {
  return (
    <section className='bg-light overflow-hidden relative'>
      <Navbar />
      <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[650px]'>
        {/* Brand Info */}
        <div className='flex flex-col justify-center py-14 md:py-0 relative z-20'>
          <div className='text-center md:text-left space-y-10 lg:max-w-[400px]'>
            <h1 className='text-3xl lg:text-5xl font-bold !leading-snug'>
              Let&apos;s learn to build a <span className='text-secondary'>Website</span> for your business
            </h1>
            <div className='flex justify-center md:justify-start'>
              <button className='primary-btn flex items-center gap-2 group'>
                Get Started
                <IoIosArrowRoundForward className='text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300' />
              </button>
            </div>
          </div>
        </div>
        {/* Hero Image */}
        <div className='flex justify-center items-center'>
          <img src='globe.svg' alt='' className='w-[250px] xl:w-[450px] relative z-10 drop-shadow' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
