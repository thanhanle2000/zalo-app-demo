import { IconHeart } from "@arco-design/web-react/icon";
import React, { memo } from "react";
import { formatCurrency } from "ultils/helper";

interface Props {
  productData: any;
  idActive: number;
}
const ProductByCate = ({ productData, idActive }: Props) => {
  // DATA
  const data = productData?.filter((item: any) => item.id !== idActive);
  return (
    <div className="flex flex-col mt-[5px]">
      <span className="text-[15px] font-semibold">Sản phẩm cùng danh mục</span>
      <div className="flex flex-row gap-[8px] relative overflow-x-auto whitespace-nowrap scrollbar-hide mt-[5px]">
        {data?.map((item: any) => (
          <div
            key={item?.id}
            className="border border-gray-400 flex flex-col gap-[3px] rounded-[15px] p-[3px] relative "
            style={{ minWidth: "120px" }}
          >
            <img
              src={item?.img}
              alt={item?.label}
              className="m-[2px] rounded-[15px] w-[100px]"
            />
            <div className="flex flex-row items-start justify-between px-[5px]">
              <span className="font-medium text-[14px]">{item?.label}</span>
            </div>
            <div className="flex flex-col items-start justify-start text-left px-[5px]">
              <span className="text-[#82111A] text-[15px] font-semibold">
                {formatCurrency(item?.price)}
              </span>
              <div className="flex flex-row items-center text-[13px] gap-[3px] text-gray-500">
                <span>Đã bán</span>
                <span>{item?.sale / 1000}k</span>
              </div>
            </div>
            <div className="absolute top-2 right-3 rounded-full flex flex-row items-center bg-white w-[30px] h-[30px]">
              <IconHeart className="text-yellow-500 m-auto" fontSize={23} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default memo(ProductByCate);
