import React from 'react'

export default function Footer() {
  return (
    <div>
      <div className='bg-black flex flex-wrap text-white'>
        {/* ----1--------- */}
        <div className='lg:w-[50%] md:w-[50%] mx-auto w-[85%] pt-[5%] pb-[5%]'>
        <div className='container    justify-around  flex'>
        <div>
            <h1>We are Feaster!</h1>
            <p className='mt-3'>All things Food & Beverage. We <br/>help create the events that leave<br/> a lasting impression.</p>
        </div>
        <div>
            <h1>Contact Us</h1>
            <p className='mt-3'>@Feaster.co<br/> hello@feaster.co</p>
        </div>

        </div>
<div className='flex lg:w-[70%] w-[100%]  justify-around mx-auto mt-[8%]'>
    <h1 className='lg:ml-[25px]' style={{borderBottom:"2px solid white"}}>Instagram</h1>
    <h1 className='lg:ml-[25px]' style={{borderBottom:"2px solid white"}}>Facebook</h1>
    <h1 className='lg:ml-[25px]' style={{borderBottom:"2px solid white"}}>Twitter</h1>
    <h1 className='lg:ml-[25px]' style={{borderBottom:"2px solid white"}}>Tik Tok</h1>

</div>
        </div>
        {/* ------------------2--------- */}
        <div className='lg:w-[50%] md:w-[50%] w-[85%] mx-auto'>
        <div className='container  m-2 lg:border-l   h-[300px] mx-auto flex justify-center items-center flex-col'>
    <h1 className='text-[40px] lg:w-[55%] w-[90%]'>Stay in the loop with our weekly newsletter</h1>
    <div className='flex pb-[5%] justify-center mt-6'>
    <input placeholder='Email' style={{background:"transparent" , border:"1px solid #ff6d34"}}/>
    <button className='ml-5  bg-[#ff6d34] px-3 '>SUBSCRIBE</button>
</div>
</div>

        </div>
      </div>
      <div className='bg-black pt-5 pb-4 text-white text-center mx-auto '>
<p className='w-[80%] mx-auto'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, </p>

      </div>
    </div>
  )
}
