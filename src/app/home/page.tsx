import Image from 'next/image'

import HomeMenuButton from '@/components/Buttons/HomeMenuButton'
import { Card, CardBody } from '@nextui-org/react'
import HomeTimeline from '@/components/Timeline/HomeTimeline'


export default function Home() {
  return (
    <>
    <div className="container mx-auto">
      <div className="basis-1/4 flex sticky top-20 max-h-[200px]">
        {/* Side Menu Start */}
        <div className='basis-1/4 flex sticky top-20 max-h-[200px]'>
          <HomeMenuButton></HomeMenuButton>
        </div>
        {/* Side Menu End */}
        {/* Content Start */}
        <div className='basis-2/4 w-full h-full p-3'>
          <Card shadow="sm" className="w-full h-full p-3 mb-3">
            <CardBody className={"overflow-visible"}>
              <HomeTimeline/>
            </CardBody>
          </Card>
        </div>
        {/* Content End */}
      </div>
    </div>
    </>
  )
}
