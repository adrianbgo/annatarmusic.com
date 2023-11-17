import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header>
            <Image src="images/logo.png" alt="Annatar Music Logo" />
            <nav>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/services">Services</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header