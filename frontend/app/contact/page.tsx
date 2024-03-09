
import React from 'react'
import { Metadata } from 'next'
import Form from '@/components/Form/Form'
export const metadata : Metadata = {
  title: 'İletişim'
  ,
}

const page = () => {



  return (
    <>
      <div className='container my-24  mx-auto md:px-6'>
        <section className='mb-32  text-center'>
          <div className='py-12  md:px-12'>
            <div className='container  mx-auto xl:px-32'>
              <div className='grid items-center lg:grid-cols-2'>
                <div className='mb-12 md:mt-12 lg:mt-0 lg:mb-0'>
                  <div className='relative z-[1] bg-blue-600 block rounded-lg px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px]  md:px-12 lg:-mr-14'>
                    <h2 className='mb-12 text-3xl text-white font-bold'>
                      İletişim
                    </h2>
                    <Form />
                    <div>
                      <ul className=' flex flex-row my-12 md:mb-0'>
                        <li className='flex items-center'>
                          <div className='flex h-20 w-20 items-center justify-center rounded text-white'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='24'
                              height='24'
                              viewBox='0 0 24 24'
                              fill='none'
                              stroke='currentColor'
                              stroke-width='2'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                              className='h-6 w-6 mr-4'
                            >
                              <path d='M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0'></path>
                              <path d='M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z'></path>
                            </svg>
                          </div>
                          <div className='flex flex-col items-start text-start  '>
                            <h3 className='mb-2 text-base font-medium leading-6 text-gray-200 '>
                              Adres
                            </h3>
                            <p className='text-white text-sm '>
                              Ferhuniye, Alaaddin Blv. No:23, 42060 Selçuklu
                            </p>
                            <p className='text-white text-sm '>
                              Konya, Türkiye
                            </p>
                          </div>
                        </li>
                        <li className='flex items-center '>
                          <div className='flex h-20 w-20 items-center justify-center rounded  text-white'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='24'
                              height='24'
                              viewBox='0 0 24 24'
                              fill='none'
                              stroke='currentColor'
                              stroke-width='2'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                              className='h-6 w-6'
                            >
                              <path d='M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2'></path>
                              <path d='M15 7a2 2 0 0 1 2 2'></path>
                              <path d='M15 3a6 6 0 0 1 6 6'></path>
                            </svg>
                          </div>
                          <div className='flex flex-col items-start text-start '>
                            <h3 className='mb-2 text-base font-medium leading-6 text-gray-200 '>
                              İletişim
                            </h3>
                            <p className='text-white text-sm '>
                              Mobil: +90 539 612 4256
                            </p>
                            <p className='text-white text-sm '>
                              Mail: benengintugrul@gmail.com
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='md:mb-24 lg:mb-0'>
                  <div className='relative h-[700px] rounded-lg shadow-lg '>
                    <iframe
                      src='https://maps.google.com/maps?q=konya&t=&z=13&ie=UTF8&iwloc=&output=embed'
                      className='absolute left-0 top-0 h-full w-full rounded-lg'
                      frameBorder='0'
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default page
