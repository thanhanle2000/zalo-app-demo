import React, { memo } from 'react'
import pro_01 from "../../../assets/product/pr_01.png"
import pro_02 from "../../../assets/product/pr_02.png"
import pro_03 from "../../../assets/product/pr_03.png"
import pro_04 from "../../../assets/product/pr_04.png"
import { IconHeart, IconStar } from '@arco-design/web-react/icon'
import { formatCurrency } from 'ultils/helper'

const HomeProduct = () => {
    // LST PRODUCT
    const lst_product = [
        { id: 1, label: 'Nồi hấp Inox', price: 95200, img: pro_01, rate: 4.9, sale: 8200 },
        { id: 2, label: 'Nồi hấp 2 tầng', price: 700000, img: pro_03, rate: 4.9, sale: 2500 },
        { id: 3, label: 'Sạc dự phòng', price: 111200, img: pro_02, rate: 5.0, sale: 2900 },
        { id: 4, label: 'Nồi hấp 3 tầng', price: 212000, img: pro_04, rate: 4.8, sale: 1200 },
    ]

    return (
        <div className='grid grid-rows-2 grid-flow-col gap-[15px] relative'>
            {
                lst_product?.map(item =>
                    <div key={item?.id} className="border border-gray-400 flex flex-col gap-[3px] rounded-[15px] p-[3px] relative">
                        <img src={item?.img} alt={item?.label} className='m-[2px] rounded-[15px]' />
                        <div className='flex flex-row items-center justify-between px-[5px]'>
                            <span className='font-medium text-[16px]'>{item?.label}</span>
                            <div className='flex flex-row items-center gap-[3px]'>
                                <IconStar fontSize={20} className='text-yellow-500' />
                                <span className='text-gray-500 text-[16px]'>{item?.rate}</span>
                            </div>
                        </div>
                        <div className='flex flex-row items-center justify-between px-[5px]'>
                            <span className='text-[#82111A] text-[15px] font-semibold'>
                                {formatCurrency(item?.price)}
                            </span>
                            <div className='flex flex-row items-center gap-[3px] text-gray-500'>
                                <span>Đã bán</span>
                                <span>
                                    {item?.sale / 1000}k
                                </span>
                            </div>
                        </div>
                        <div className='absolute top-2 right-3 rounded-full flex flex-row items-center bg-white w-[30px] h-[30px]'>
                            <IconHeart className='text-yellow-500 m-auto' fontSize={23} />
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default memo(HomeProduct)
