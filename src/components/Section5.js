import React from 'react'

export default function Section5() {
    return (
        <div>
            <div className='flex flex-wrap'>
                <div className='lg:w-[50%] md:w-[50%] w-[100%] h-[530px] flex flex-col justify-center items-center' style={{ backgroundImage: "url(/images/desi.png)", backgroundSize: "100% 100%" }}>
                    <h1 className='text-[35px] font-bold'> WINE VIKINGS</h1>
                    <p className='text-white text-[25px]'>WINE CLUB</p></div>
                <div className='lg:w-[50%] md:w-[50%] w-[100%] lg:h-[530px] text-white p-[8%]  flex flex-col justify-center items-center' style={{ backgroundImage: "url(/images/blue.png)", backgroundSize: "100% 100%" }}>
                    <p className='text-[18px]'>Once a Month</p>
                    <h1 className='text-[40px] font-bold' style={{ textShadow: "7px 1px black" }}> BEER BOX</h1>
                    <p className='text-white text-[25px] mt-4'>Amazing Craft Beer chosen by the pros.</p>
                    <p className='mt-5 text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                    <button className='mt-3'>Visit Now</button>
                    <a className='mt-3'>BEERBOXVAN.COM</a>

                </div>

            </div>
        </div>
    )
}
