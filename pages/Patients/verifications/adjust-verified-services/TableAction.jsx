import Image from 'next/image'
import { useState } from 'react'
import { FcEditImage, FcEmptyTrash, FcSearch } from 'react-icons/fc'
import SearchIcon from '../../../../assets/images/search.png'

const TableAction = () => {
  return (
    <span className='flex h-full w-full items-center justify-center  text-lg text-[#0141CF]'>
      <span className='table-action-anim px-1 text-xl '>
        <Image src={SearchIcon} alt='icon' width={16} height={16} />
      </span>
      <span className='px-3'>
        <FcEditImage />
      </span>

      <span className='table-action-anim px-1 text-orange-600'>
        <FcEmptyTrash />
      </span>
    </span>
  )
}

export default TableAction
