import {
  IconArchive,
  IconDown,
  IconLocation,
} from "@arco-design/web-react/icon";
import React, { memo } from "react";

const HomeAddress = () => {
  return (
    <div className="flex flex-row justify-between items-end mt-[5px]">
      <div className="flex flex-col gap-[5px]">
        <span className="text-gray-400">Vị trí</span>
        <div className="flex flex-row items-center gap-[5px]">
          <IconLocation fontSize={20} className="text-yellow-500" />
          <span className="font-medium"> Quận 1, TP Hồ Chí Minh</span>
          <IconDown />
        </div>
      </div>
      <div className="relative inline-block">
        <IconArchive style={{ fontSize: 25 }} />
        <span
          className="absolute h-[12px] w-[12px] rounded-full bg-red-600 
                    bottom-0 right-[-1px] flex items-center justify-center text-white text-[11px]"
        >
          1
        </span>
      </div>
    </div>
  );
};
export default memo(HomeAddress);
