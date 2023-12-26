import Image from 'next/image'

import HomeMenuButton from '@/components/Buttons/HomeMenuButton'
import { Card, CardBody } from '@nextui-org/react'
import HomeTimeline from '@/components/Timeline/HomeTimeline'
import BaseCard from '@/components/Cards/BaseCard'
import MainNavbar from '@/components/Navbar/MainNavbar'

export default function Message() { 
  return (
    <>
    <div className="container  my-auto mx-auto">
      <div className="flex flex-row justify-center">
        {/* Side Menu Start */}
        <div className='basis-1/4 flex'>
        <HomeMenuButton></HomeMenuButton>
        </div>
        {/* Side Menu End */}
      </div>
    </div>
    </>
  )
}