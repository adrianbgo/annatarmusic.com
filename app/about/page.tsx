import Image from 'next/image'
import React from 'react'

const AboutPage = () => {
  return (
    <div className="bg-white py-[80px]">
        <div className="w-4/5 my-0 mx-auto">
            <h2 className="text-[2.5em] mb-[30px] text-center">
                About Annatar
            </h2>
            <div className="flex justify-between items-center flex-col gap-5 text-center">
                <Image src="/images/annatar_photo.jpg" alt="Annatar Photo" width={0} height={0} className='rounded-[50%] shadow-gray-800 m-w-[400px] w-full h-auto' />
                {/* <div>  */}
                <p className='text-[1.2em] leading-5 max-w-[600px]'>Welcome to the world of Annatar, where music becomes an immersive journey. Annatar, a visionary artist, creates a unique blend of soulful melodies that transcend conventional boundaries.</p>
                <p className='text-[1.2em] leading-5 max-w-[600px]'>With a passion for storytelling through music, Annatar's compositions evoke emotions and connect listeners to a deeper, introspective experience.</p>
                <p className='text-[1.2em] leading-5 max-w-[600px]'>Explore the musical universe crafted by Annatar and join in the exploration of boundless creativity.</p>
                {/* </div> */}
               </div>
        </div>
    </div>
  )
}

export default AboutPage