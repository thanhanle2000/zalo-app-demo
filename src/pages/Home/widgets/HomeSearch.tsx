import { Button } from "@arco-design/web-react";
import { IconMenu, IconSearch } from "@arco-design/web-react/icon";
import { COLORS } from "core/constants/constants";
import { ROUTERS } from "core/routers/routers";
import React, { memo } from "react";
import { useNavigate } from "react-router-dom";

const HomeSearch = () => {
  //NAVIGATE
  const navigate = useNavigate();

  return (
    <div className="my-[15px] flex flex-row items-center">
      <Button
        shape="round"
        type="outline"
        className="!border-gray-500 w-full items-center flex flex-row justify-start text-left !h-[44px]"
        icon={<IconSearch fontSize={22} className="text-gray-500" />}
        onClick={() => navigate(ROUTERS?.SEARCH)}
      >
        <span className="text-gray-500 text-[16px]">Tìm kiếm</span>
      </Button>
      <div
        className="rounded-full flex flex-row justify-center ml-[10px]"
        style={{
          backgroundColor: COLORS?.ACTION,
        }}
      >
        <IconMenu fontSize={25} className="m-[10px] text-white" />
      </div>
    </div>
  );
};
export default memo(HomeSearch);
