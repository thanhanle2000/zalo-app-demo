import React, { memo } from 'react'
import banner from "../../../assets/banner/banner.png"

const HomeBanner = () => {
    return (
        <div className='m-auto my-[10px]'>
            <img src={banner} className='w-full' />
        </div>
    )
}

export default memo(HomeBanner)
