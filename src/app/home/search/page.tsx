
import HomeMenuButton from '@/components/Buttons/HomeMenuButton'
import MainSearch from '@/components/Search/MainSearch'

export default function Search() {
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
        <MainSearch/>
        </div>
        {/* Content End */}
      </div>
    </div>
    </>
  )
}
""