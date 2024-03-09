'use client'
import Image from 'next/image'
import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Backend from '@/data/Backend'
import marked from 'marked'
import { get } from 'http'

const Content = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000
    })
  }, [])

  return (
    <div className='flex flex-col lg:flex-row lg:justify-between  lg:px-8 px-4 py-4 lg:py-0'>
      <div
        data-aos='fade-up'
        className='flex flex-col justify-center space-y-8 lg-px-0s px-8'
      >
        <div className='lg:text-6xl text-4xl lg:leading-tight leading-tight lg:tracking-widest tracking-wider'>
          Geleceğin <span className='text-fuchsia-800 font-bold'>Elektrik</span>{' '}
          ve <br /> <span className='font-bold'>Elektronik</span>{' '}
          <span className='text-purple-800 font-bold'> Çözümleri</span>
        </div>
        <h1 className={'text-m lg:text-xl text-gray-500 '}>
          Tugtek olarak, da işinizi geleceğe taşımanıza yardımcı oluyoruz <br />
          elektronik danışmanlık ve yazılım alanındaki uzmanlığımızla geleceğe{' '}
          <br />
          geliştirme ve donanım çözümleri. Dijital teknolojiye liderlik eden{' '}
          <br />
          ekibimiz dönüşüm hedefleri̇ni̇ze si̇zi̇nle bi̇rli̇kte ulaşmak i̇çi̇n burada.{' '}
          <br />
        </h1>
        <div>
          <button
            className='h-14 bg-gradient-to-r bg-blue-700 rounded text-white p-2 px-4 hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500 
          
            transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110
          '
          >
            Hadi Başlayalım!
          </button>
        </div>
      </div>
      <Image
        data-aos='fade-down'
        className='hidden lg:flex xl:flex'
        src='/images/Hero.png'
        alt='Next.js Logo'
        width={500}
        height={500}
        priority
      />
    </div>
  )
}

export default Content
