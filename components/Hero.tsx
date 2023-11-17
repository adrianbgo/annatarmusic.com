import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <section className='relative text-center'>
            <Image src="/images/background.jpg" alt="Background Image" width={1920} height={1080} />
            <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[2.5em]'>Welcome to Annatar Music</h1>
        </section>
    )
}

export default Hero