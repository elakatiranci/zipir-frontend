import Image from 'next/image'

import HomeMenuButton from '@/components/Buttons/HomeMenuButton'
import { Card, CardBody } from '@nextui-org/react'
import HomeTimeline from '@/components/Timeline/HomeTimeline'
import BaseCard from '@/components/Cards/BaseCard'
import MainNavbar from '@/components/Navbar/MainNavbar'
import MainNoteArea from '@/components/NoteArea/MainNoteArea'
import MainNoteInput from '@/components/NoteArea/MainNoteInput'
import SettingsNavbar from '@/components/SettingsNavbar/SettingsNavbar'
import SettingsSwitch from '@/components/SettingsNavbar/SettingsSwitch'

export default function Settings() {
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
        <div className='h-full basis-2/4 gap-2 px-3'>
        <SettingsNavbar/>
        <SettingsSwitch></SettingsSwitch>
        </div>
        {/* Content End */}
      </div>
    </div>
    </>
  )
}
