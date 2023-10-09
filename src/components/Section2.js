import React from 'react'

export default function Section2() {
    return (
        <div>
            <div className='pb-5 bg-[#f6f5f5]'>
                <div className='container'>
                    <div className=' flex flex-wrap items-center justify-around w-full'>
                        <h1 className='text-[45px]'>Punch Bowl Fest</h1>
                        <p className='font-medium lg:w-auto md:w-auto w-[100%] mb-4 text-center'>Augest 22, 2022 <br />
                            Hastings Raceway
                        </p>
                        <div className=''>
                            <button className='btn hover:bg-[#FF6D34] hover:text-white'>MORE INFO</button>
                            <button className='bt  ml-5'>TICKETS</button>

                        </div>
                    </div>
                </div>
                {/* -----------------------------------------3------------- */}
                <div className='lg:w-[70%] w-[85%] mt-[5%] bg-white mx-auto' style={{ border: "2px solid #ff6d34 ", borderRadius: "10px", boxShadow: "5px 5px 5px #ff6d34" }}>
                    <div className='p-5'>
                        <img className='lg:h-[300px] w-[100%] mx-auto' src='/images/bg.png' />
                    </div>
                    <div>
                        <div className=' flex flex-wrap mb-4 items-center justify-around w-full'>
                            <div><p className='text-center'>The Botanist Presents:</p>
                                <h1 className=' text-center text-[45px]'>Deighton Cup</h1>
                                <p className='text-center'>It’s always sunny on raceday.</p>
                            </div>
                            <p className='font-medium lg:w-auto md:w-auto w-[100%] lg:mb-0 mb-4 text-center'>Augest 22, 2022 <br />
                                Hastings Raceway
                            </p>
                            <div className=' lg:w-[30%] flex flex-col'>
                                <button className='bt  lg:w-[60%] mx-auto mb-3'>TICKETS</button>

                                <button className='btn hover:bg-[#FF6D34] hover:text-white lg:w-[60%] mx-auto '>MORE INFO</button>

                            </div>
                        </div>
                    </div>

                </div>
                {/* -------------------------------4--------------- */}
                <div className='lg:w-[70%] w-[85%] flex flex-wrap p-2 mt-[5%] bg-white mx-auto' style={{ border: "2px solid #ff6d34 ", borderRadius: "10px", boxShadow: "5px 5px 5px #ff6d34" }}>
                    <div className='lg:w-[50%] p-5'>
                        <img className='lg:h-[300px] w-[100%] mx-auto' src='/images/late.png' />
                    </div>
                    <div className='lg:w-[50%]'>
                        <div className=' items-center justify-around w-full'>
                            <div className='mt-5 '><p>The Botanist Presents:</p>
                                <h1 className='text-[45px]'>Harvest Haus</h1>
                                <p className='font-medium text-[20px] lg:w-auto md:w-auto w-[100%] mt-2 mb-5 '>Augest 22, 2022 <br />
                                    Hastings Raceway
                                </p>
                                <p>It’s always sunny on raceday.</p>
                            </div>

                            <div className=' mt-4 '>
                                <button className='bt mr-4  mx-auto mb-3'>TICKETS</button>

                                <button className='btn hover:bg-[#FF6D34] hover:text-white mx-auto '>MORE INFO</button>

                            </div>
                        </div>
                    </div>

                </div>
                {/* --------------------------5------------- */}
                <div className='lg:w-[70%] w-[85%] flex flex-wrap p-2 mt-[5%] bg-white mx-auto' style={{ border: "2px solid #ff6d34 ", borderRadius: "10px", boxShadow: "5px 5px 5px #ff6d34" }}>
                    <div className='lg:w-[50%] p-5'>
                        <img className='lg:h-[300px] w-[100%] mx-auto' src='/images/late.png' />
                    </div>
                    <div className='lg:w-[50%]'>
                        <div className=' items-center justify-around w-full'>
                            <div className='mt-5 '><p>The Botanist Presents:</p>
                                <h1 className='text-[45px]'>Harvest Haus</h1>
                                <p className='font-medium text-[20px] lg:w-auto md:w-auto w-[100%] mt-2 mb-5 '>Augest 22, 2022 <br />
                                    Hastings Raceway
                                </p>
                                <p>It’s always sunny on raceday.</p>
                            </div>

                            <div className=' mt-4 '>
                                <button className='bt mr-4  mx-auto mb-3'>TICKETS</button>

                                <button className='btn hover:bg-[#FF6D34] hover:text-white mx-auto '>MORE INFO</button>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
