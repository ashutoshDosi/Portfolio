import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'
import MagicButtons from './ui/MagicButtons'
import { FaLocationArrow } from 'react-icons/fa'

const Hero = () => {
  return (
    <>
    <div className='pb-20 pt-36'>
      <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 ' fill="white"/>
      <Spotlight className='-top-10 -left-full h-[80vh] w-[50vw]' fill="purple" />
      <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill="blue" />
    </div>
    <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.07] flex items-center justify-center absolute top-0 left-0">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    </div>

    <div className='flex justify-center relative my-15 z-10'>
      <div className='max-w-[89vw] md:max-w-2xl lg: max-w-[60vw] flex flex-col items-center justify-center'>
        <h2 className='uppercase tracking-widest text-xs test-center text-blue-100 max-w-80'>Dynamic Web Portfolio with Next.Js</h2>
      </div>
    </div>

    <TextGenerateEffect 
    className='text-center text-[40px] md:text-5xl lg:text-6xl z-10'
    words='Transforming Concepts into Reality with Code'
    />

    <p className='text-center z-10 md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'> Hi I&apos;m Ashutosh a Web Developer based in Mumbai</p>

    <a href="#about">
      <MagicButtons 
        title="Show My Experience"
        icon={<FaLocationArrow />}
        position='arrow'
        extraStyles='mt-2'
      />
    </a>

    </>
  )
}

export default Hero
