'use client'
import Image from 'next/image'
import React, { use, useEffect, useState } from 'react'
import useScreen from '../../libs/useScreen'

const Stats = () => {


  return (
    <div className='flex flex-col justify-between lg:flex-row gap-0 '>
      <div
        data-aos='-right'
        data-aos-offset='300'
        data-aos-easing='ease-in-sine'
        className='space-y-6'
      >
        <h1 className='lg:text-3xl text-xl tracking-wider '>
          Yazılım geliştirme için{' '}
          <span className='font-bold '>
            <br /> önde gelen şirketler bize güveniyor
          </span>
        </h1>

        <p className='lg:mb-3 font-normal text-gray-500 lg:text-lg text-m lg:leading-9 leading-6'>
          Tugtek,{' '}
          <span className='text-fuchsia-700'>
            elektrik, elektronik ve teknoloji
          </span>{' '}
          alanındaki uzmanlığı ile işletmenizin enerji <br />
          verimliliğini artırmanıza, güvenliği sağlamanıza ve teknolojik
          dönüşümü yönetmenize <br /> yardımcı oluyor. Sunduğumuz danışmanlık
          hizmetleri, yenilikçi çözümlerle işletmenizi
          <br />
          geleceğe taşımanız için stratejik bir rehberlik sunuyor. Tugtek ile
          işinizi daha güvenli, <br /> daha verimli ve daha rekabetçi bir
          seviyeye taşıyın.
        </p>
        <a
          href='#'
          className='inline-flex items-center text-fuchsia-800 font-bold hover:underline '
        >
          Daha fazla bilgi için
          <svg
            className=' ms-2.5 rtl:rotate-[270deg]'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='25'
            viewBox='0 0 24 25'
            fill='none'
          >
            <g clip-path='url(#clip0_116_10)'>
              <path
                d='M16.172 11.4999L10.808 6.13592L12.222 4.72192L20 12.4999L12.222 20.2779L10.808 18.8639L16.172 13.4999H4V11.4999H16.172Z'
                fill='#57007B'
              />
            </g>
            <defs>
              <clipPath id='clip0_116_10'>
                <rect
                  width='24'
                  height='24'
                  fill='white'
                  transform='translate(0 0.5)'
                />
              </clipPath>
            </defs>
          </svg>
        </a>
      </div>
      <div
        data-aos={'-left'}
        data-aos-offset='300'
        data-aos-easing='ease-in-sine'
      >
        <Image
          className='lg:mt-0 mt-10
              rounded-lg shadow-lg
          '
          src='/images/elektrik.jpg'
          alt='Picture of the author'
          width={500}
          height={600}

        ></Image>
      </div>
    </div>
  )
}

export default Stats
