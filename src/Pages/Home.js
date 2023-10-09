import React from 'react'
import Slider from '../components/Slider/Slider'
import Faq from '../components/Faq'
import Follow from '../components/Follow'
import Footer from '../components/Footer'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'
import Section4 from '../components/Section4'
import Section5 from '../components/Section5'
export default function Home() {
  return (
    <div className='bg-[#f6f5f5]'>
      <Slider />

      {/* ----------------------2------------------ */}

      <Section2 />
      {/* -----------------------------------------6---------------------- */}
      <Section3 />


      {/* ------------------7--------------------------- */}

      <Section4 />
      {/* ------------------8---------------- */}
      <Section5 />

      {/* ----------------------9----------- */}


      <Faq />
      <Follow />
      <Footer />



    </div>
  )
}
