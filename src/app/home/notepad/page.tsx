import Image from 'next/image'

import HomeMenuButton from '@/components/Buttons/HomeMenuButton'
import { Card, CardBody } from '@nextui-org/react'
import HomeTimeline from '@/components/Timeline/HomeTimeline'
import BaseCard from '@/components/Cards/BaseCard'
import MainNavbar from '@/components/Navbar/MainNavbar'
import MainNoteArea from '@/components/NoteArea/MainNoteArea'
import MainNoteInput from '@/components/NoteArea/MainNoteInput'

export default function Notepad() {
  return (
    <>
    <div className="container mx-auto ">
      <div className="basis-1/4 flex sticky top-20 max-h-[200px]">
        {/* Side Menu Start */}
        <div className='basis-1/4 flex'>
        <HomeMenuButton></HomeMenuButton>
        </div>
        {/* Side Menu End */}
        {/* Content Start */}
        <div className='h-full grid grid-cols-2 gap-2 px-3'>
        <MainNoteInput/>
        <MainNoteArea/>
        <MainNoteArea/>
        <MainNoteArea/>
        <MainNoteArea/>
        </div>
        {/* Content End */}
      </div>
    </div>
    </>
  )
}
