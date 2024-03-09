'use client'
import React from 'react';

const Form = () => {
    const [contact, setContact] = React.useState(
        {
            name: "",
            email: "",
            message: "",
        }
    );  
    



    return (
        <>
        <form>
                      <div className='relative mb-6' data-te-input-wrapper-init>
                        <input
                          type='text'
                          className='peer focus: block min-h-[auto] w-full rounded border-0 bg-white py-[0.32rem] px-3 leading-[1.6] outline-none  '
                          id='exampleInput90'
                          placeholder='Name'
                         
                            
                            onChange={
                                (e) => {
                                    setContact({
                                        ...contact,
                                        name: e.target.value,
                                    });
                                }
                            }
                        />
                      
                      </div>
                      <div className='relative mb-6' data-te-input-wrapper-init>
                        <input
                          type='email'
                          className=' block min-h-[auto] w-full rounded border-0 bg-white py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear '
                          id='exampleInput91'
                          placeholder='Email address'
                                
                                onChange={
                                    (e) => {
                                        setContact({
                                            ...contact,
                                            email: e.target.value,
                                        });
                                    }
                                }
                        />
                     
                      </div>
                      <div className='relative mb-6' data-te-input-wrapper-init>
                        <textarea
                          className='peer block min-h-[auto]  w-full rounded border-0 bg-white py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear '
                          id='exampleFormControlTextarea1'
                          placeholder='Your message'
                            rows={3}       
                                    onChange={
                                        (e) => {
                                            setContact({
                                                ...contact,
                                                message: e.target.value,
                                            });
                                        }
                                    }
                        ></textarea>
                    
                      </div>
                      <div className='mb-6 inline-block min-h-[1.5rem] justify-start pl-[1.5rem] md:flex'>
                        <input
                          className="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-white before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-white checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-gray-100"
                          type='checkbox'
                          value=''
                          id='exampleCheck96'
                          
                          checked
                        />
                        <label
                          className='inline-block  text-green-300 pl-[0.15rem] hover:cursor-pointer'
                          htmlFor='exampleCheck96'
                        >
                          Bana bu mesajın kopyasını gönder
                        </label>
                      </div>
                      <button
                        type='button'
                        data-te-ripple-init
                        data-te-ripple-color='light'
                        className='inline-block w-full rounded hover:bg-green-400 hover:text-white transform-cpu bg-white px-6 pt-2.5 pb-2 text-base font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]  lg:mb-0'
                      >
                        Gönder
                      </button>
                    </form>
        </>
    );
};

export default Form;
