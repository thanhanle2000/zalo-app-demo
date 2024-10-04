import { CATES } from "core/db/mock/product";
import React, { memo } from "react";
import FlashSaleCountdown from "./FlashSale";

interface Props {
  active: { id: number; cate: string };
  setActive: (request: any) => void;
}
const HomeFlashSale = ({ active, setActive }: Props) => {
  // LST FLASH SALE
  const lst_flash_sale = [
    { id: 1, label: "Tất cả", cate: "" },
    { id: 2, label: "Nhà bếp", cate: CATES?.KITCHEN },
    { id: 3, label: "Thời trang", cate: CATES?.CLOTHES },
    { id: 4, label: "Công nghệ", cate: CATES?.ELECTRIC },
  ];

  return (
    <div className="flex flex-col my-[20px]">
      <div className="flex flex-row items-center justify-between">
        <span className="font-semibold text-[16px]">Flash Sale</span>
        <FlashSaleCountdown hours={2} minutes={12} seconds={56} />
      </div>
      <div className="flex flex-row gap-[10px] mt-[10px] overflow-x-auto whitespace-nowrap overflow-y-hidden">
        {lst_flash_sale?.map((item) => (
          <div
            key={item?.id}
            className={`cursor-pointer border border-gray-400 rounded-[30px] h-[36px] flex flex-col justify-center ${
              item?.id === active?.id ? "bg-[#EFAE09]" : ""
            }`}
            onClick={() => setActive({ id: item?.id, cate: item?.cate })}
          >
            <span
              className={`p-[20px] ${
                item?.id === active?.id ? "text-white" : "text-black"
              }`}
            >
              {item?.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(HomeFlashSale);
