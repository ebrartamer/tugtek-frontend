'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'

const Navbar = () => {
  const [isButtonActive, setIsButtonActive] = useState(false)

  const openMenu = () => {
    setIsButtonActive(!isButtonActive)
  }

  return (
    <nav className='bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 py-2'>
      <div className='lg:max-w-screen-xl flex flex-wrap items-center justify-between lg:mx-auto  px-4'>
        <Link className='lg:ml-10 ' href='/'>
          <Image src='/logo.png' width={100} alt='logo' height={100} />
        </Link>

        <div className='flex md:order-2  space-x-2'>
          <Link href='/contact ' className='w-full h-full'>
            <button className=' rounded h-1/2 bg-indigo-700  hover:bg-indigo-600 text-white p-2'>
              İletişime geç
            </button>
          </Link>
          <button
            onClick={openMenu}
            data-collapse-toggle='navbar-sticky'
            type='button'
            className='inline-flex items-center lg:p-4 justify-center text-sm text-gray-500 rounded rotate-0 hover:rotate-90 p-1 md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 '
            aria-controls='navbar-sticky'
            aria-expanded='false'
          >
            <svg
              className='w-5 h-5'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 17 14'
            >
              <path
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M1 1h15M1 7h15M1 13h15'
              />
            </svg>
          </button>
        </div>

        <div
          className={`${
            isButtonActive ? 'flex' : 'hidden'
          } md:flex md:items-center w-full md:w-auto`}
          id='navbar-sticky'
        >
          <ul className='flex flex-col  p-4 md:p-0 mt-4 font-medium border border-gray-100  w-full rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white '>
            <li className='hover:bg-blue-700 rounded hover:text-white cursor-pointer p-4 lg:px-4 '>
              <ScrollLink
                to='content'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Anasayfa
              </ScrollLink>
            </li>
            <li className='hover:bg-blue-700 rounded hover:text-white cursor-pointer p-4 lg:px-4 '>
              <Link href='/services'>Hizmetler</Link>
            </li>
            <li className='hover:bg-blue-700 rounded hover:text-white p-4 cursor-pointer lg:px-4 '>
              <ScrollLink
                to='about'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Hakkımızda
              </ScrollLink>
            </li>
            <li className='hover:bg-blue-700 rounded hover:text-white cursor-pointer p-4 lg:px-4 '>
              <ScrollLink
                to='project'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Projeler
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
