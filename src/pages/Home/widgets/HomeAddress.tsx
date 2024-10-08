import {
  IconArchive,
  IconDown,
  IconLocation,
} from "@arco-design/web-react/icon";
import { ROUTERS } from "core/routers/routers";
import React, { memo } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  total: number;
}
const HomeAddress = ({ total }: Props) => {
  // NAVIGATE
  const navigate = useNavigate();

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
      <div
        className="relative inline-block"
        onClick={() => navigate(ROUTERS?.CART)}
      >
        <IconArchive style={{ fontSize: 28 }} />
        <span
          className="absolute h-[20px] w-[20px] rounded-full bg-red-600 
                    bottom-[-5px] right-[-4px] flex items-center justify-center text-white text-[11px]"
        >
          {total}
        </span>
      </div>
    </div>
  );
};
export default memo(HomeAddress);
