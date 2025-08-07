import Link from 'next/link'
import React from 'react'

const AboutNav = () => {
  return (
    <nav className='h-screen bg-amber-800 p-20'>
        <ul>
            <li>
                <Link href={"/about/about-product"}>About product</Link>
            </li>
            <li>
                <Link href={"/about/about-brand"}>about brand</Link>
            </li>
        </ul>
    </nav>
  )
}

export default AboutNav