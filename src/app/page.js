import BookADemo from '@/components/BookADemo'
import DynamicResource from '@/components/DynamicResource'
import FAQSection from '@/components/FAQSection'
import FutureData from '@/components/FutureData'
import Hero from '@/components/Hero'
import LogoMarquee from '@/components/LogoMarquee'
import Modernizing from '@/components/Modernizing'
import React from 'react'

function page() {
  return (
    <div>
      <Hero></Hero>
      <LogoMarquee></LogoMarquee>
      <Modernizing></Modernizing>
      <FutureData></FutureData>
      <DynamicResource></DynamicResource>
      <BookADemo></BookADemo>
      <FAQSection></FAQSection>  
    </div>
  )
}

export default page