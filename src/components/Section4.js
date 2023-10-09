import React from 'react'
import { PiStarFourFill } from "react-icons/pi"

export default function Section4() {
    return (
        <div>
            <div className='bg-[#fe889b] flex flex-wrap'>
                <div className='lg:w-[45%] md:w-[50%] w-[100%]'><img className='w-[100%] h-[350px]' src='/images/find.png' /> </div>
                <div className='lg:w-[50%] p-4 flex justify-center items-center md:w-[50%] w-[100%]'>
                    <div className='lg:w-[80%] flex items-center flex-col bg-[#fea8b5]'>
                        <h1 className='text-white text-[45px] font-bold' style={{ textShadow: "7px 1px black" }}>Find Out First!</h1>
                        <img src='/images/curve.png' />
                        <div className='w-[80%] mb-4'>
                            <p className='flex font-bold'><PiStarFourFill className='mr-4 mt-1 text-white' />Get the drop of our Drops!</p>
                            <p className='flex font-bold'><PiStarFourFill className='mr-4 mt-1 text-white' />Minimal messaging, straight to the point.</p>
                            <p className='flex font-bold'><PiStarFourFill className='mr-4 mt-1 text-white' />Get access to Feaster events first!</p>
                            <p className='flex font-bold'><PiStarFourFill className='mr-4 mt-1 text-white' />Contest & Exclusive Giveaways!</p>
                            <h1 className='flex text-white text-[35px] font-bold'><PiStarFourFill className='mr-4 text-[20px] mt-[4%]' />Sign Up Now</h1>
                        </div>
                        <div className='mb-6  flex justify-center items-center lg:flex-row flex-col'>
                            <input className='mr-2 lg:mb-0 mb-4 ' placeholder='Name' type='text' />
                            <input className='mr-2 lg:mb-0 mb-4 ' placeholder='Email' type='text' />
                            <button className='bg-black text-white px-3'>SUBSCRIBE</button>
                        </div>


                    </div>
                </div>

            </div>
        </div>
    )
}
