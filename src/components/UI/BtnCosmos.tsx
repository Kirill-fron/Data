import React from 'react'
import { BtnCosmosProps } from '@/types'

const BtnCosmos: React.FC<BtnCosmosProps> = ({ onClick }) => {
  return (
 <button className='w-full max-w-[130px] h-[38px] rounded-xl bg-[#0B0B0B]  font-medium hover:bg-[#f2f2f2] hover:text-[#000] hover:transition-all '
 onClick={onClick}
 >
Cosmos
 </button>
  )
}

export default BtnCosmos
