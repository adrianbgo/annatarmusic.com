import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className='bg-[#333] text-white p-20 flex justify-between items-center'>
            <Image src="/images/logo.png" alt="Annatar Music Logo" width={20} height={20} />
            <nav>
                <ul className='list-none flex'>
                    <li className='mr-20'><Link href="/" className='no-underline'>Home</Link></li>
                    <li className='mr-20'><Link href="/about" className='no-underline'>About</Link></li>
                    <li className='mr-20'><Link href="/services" className='no-underline'>Services</Link></li>
                    <li className='mr-20'><Link href="/contact" className='no-underline'>Contact</Link></li>
                    <li className='mr-20'><Link href="/blog" className='no-underline'>Blog</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header