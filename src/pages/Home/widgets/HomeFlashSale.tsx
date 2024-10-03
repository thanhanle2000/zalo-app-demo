import React, { memo, useState } from "react";
import FlashSaleCountdown from "./FlashSale";

const HomeFlashSale = () => {
  // LST FLASH SALE
  const lst_flash_sale = [
    { id: 1, label: "Tất cả" },
    { id: 2, label: "Mới nhất" },
    { id: 3, label: "Thời trang" },
    { id: 4, label: "Công nghệ" },
  ];

  // STATE
  const [active, setActive] = useState(2);

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
              item?.id === active ? "bg-[#EFAE09]" : ""
            }`}
            onClick={() => setActive(item?.id)}
          >
            <span
              className={`p-[20px] ${
                item?.id === active ? "text-white" : "text-black"
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
