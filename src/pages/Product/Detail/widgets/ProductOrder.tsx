import { Badge, Button } from '@arco-design/web-react';
import { IconMinus, IconPlus, IconArchive } from '@arco-design/web-react/icon';
import { COLORS } from 'core/constants/constants';
import React, { memo, useState } from 'react'
import { formatCurrency } from 'ultils/helper';

interface Props {
    data: any;
}
const ProductOrder = ({ data }: Props) => {
    // STATE
    const [quantity, setQuantityState] = useState(0);

    return (
        <div className="bg-white absolute bottom-0 left-0 right-0 mx-auto w-full flex flex-row items-center justify-center gap-[10px] py-[10px]">
            {quantity === 0 ? (
                <Button
                    status="danger"
                    className="!rounded-[4px] !h-[45px] px-[22px] !border-red-400 m-auto !font-semibold !text-[15px]"
                    onClick={() => setQuantityState(quantity + 1)}
                >
                    Thêm vào giỏ
                </Button>
            ) : (
                <div className="flex flex-row items-center m-auto pl-[8px] gap-[5px]">
                    <Button
                        size="mini"
                        className="!h-[45px] !rounded-[4px] !p-[10px]"
                        onClick={() => setQuantityState(quantity - 1)}
                    >
                        <IconMinus fontSize={18} />
                    </Button>
                    <div className="w-[35px] border-slate-100 text-center text-[16px] font-semibold">
                        {quantity}
                    </div>
                    <Button
                        size="mini"
                        className="!h-[45px] !rounded-[4px] !p-[10px]"
                        onClick={() => setQuantityState(quantity + 1)}
                    >
                        <IconPlus fontSize={18} />
                    </Button>
                </div>
            )}
            <div className="flex flex-row items-center text-center justify-center bg-white h-[48px]">
                <div className="flex flex-col items-center p-[5px] bg-slate-100">
                    <Badge count={quantity}>
                        <IconArchive fontSize={24} />
                    </Badge>
                    Giỏ hàng
                </div>
                <div
                    className={`flex flex-col justify-center items-center py-[6px] text-white mr-[10px] rounded-[4px] w-[150px] cursor-pointer
               ${quantity === 0 ? `bg-[${COLORS?.BG}]` : `bg-[${COLORS?.BG}]`
                        }`}
                    onClick={() => {
                        if (quantity > 0) {
                        }
                    }}
                >
                    <div className="flex flex-row">
                        Đặt mua {quantity === 0 ? null : <span className="pl-[4px] font-medium">({quantity})</span>}
                    </div>
                    <span className='font-semibold'>{formatCurrency(quantity * data?.price)}</span>
                </div>
            </div>
        </div>
    )
}

export default memo(ProductOrder)
