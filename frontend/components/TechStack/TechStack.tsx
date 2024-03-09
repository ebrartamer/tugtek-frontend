'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'

const buttonOptions = [
  {
    id: 1,
    name: 'Frontend',
    values: ['https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg']
  },
  {
    id: 2,
    name: 'Backend',
    values: ['https://www.vectorlogo.zone/logos/oracle/oracle-ar21.svg']
  },
  { id: 3, name: 'Database' },
  { id: 4, name: 'CMS' },
  { id: 5, name: 'DevOps' }
]

const TechStack = () => {
  const [isButtonActive, setIsButtonActive] = useState(true); // isButtonActive'u true yaparak başlangıçta seçili olmasını sağla
  const [selectedButton, setSelectedButton] = useState(1);

  const clickHandler = (buttonName: any) => {
    setIsButtonActive(true);
    setSelectedButton(buttonName);
  };

  return (
    <div>
      <div className='flex flex-row lg:text-xl lg:space-x-8 space-x-2 justify-center items-center'>
        {buttonOptions.map((buttonOption) => (
          <button
            key={buttonOption.id}
            className={`${
              isButtonActive && selectedButton === buttonOption.id
                ? 'border-b-2 border-fuchsia-800 text-fuchsia-800 '
                : ''
            } font-medium  hover:text-fuchsia-800
            transition duration-500 ease-in-out
            `}
            onClick={() => clickHandler(buttonOption.id)}
          >
            {buttonOption.name}
          </button>
        ))}
      </div>
      <section className='bg-white '>
        <div className='py-8 lg:py-16 mx-auto  max-w-screen-xl px-4'>
          <div className='flex justify-center items-center text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 '>
            {buttonOptions.map(
              (buttonOption) =>
                isButtonActive &&
                selectedButton === buttonOption.id &&
                buttonOption.values?.map((value) => (
                  <Link key={value} href='#' className=''>
                    <Image src={value} alt='' width={200} height={200} />
                  </Link>
                ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechStack;