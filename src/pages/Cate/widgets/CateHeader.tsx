import React, { memo } from "react";
import cateData from "../../../core/db/mock/cate";
import { Cate } from "../types/Cates.Res";

interface Props {
  active: any;
  setActive: (value: any) => void;
}
const CateHeader = ({ active, setActive }: Props) => {
  // DATA
  const data = cateData?.data ?? [];

  return (
    <div className="flex flex-row gap-[10px] my-[5px] p-[5px] overflow-x-auto whitespace-nowrap overflow-y-hidden sticky top-0 bg-white z-50">
      {data?.map((item: Cate) => (
        <div
          key={item?.id}
          className={`cursor-pointer border border-gray-400 rounded-[30px] h-[36px] flex flex-col justify-center ${
            item?.type === active?.type ? "bg-[#EFAE09]" : ""
          }`}
          onClick={() => setActive({ type: item?.type })}
        >
          <span
            className={`p-[20px] ${
              item?.type === active?.type ? "text-white" : "text-black"
            }`}
          >
            {item?.name}
          </span>
        </div>
      ))}
    </div>
  );
};
export default memo(CateHeader);
