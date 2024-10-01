import { Button } from "@arco-design/web-react";
import { IconMenu, IconSearch } from "@arco-design/web-react/icon";
import { COLORS } from "core/constants/constants";
import React, { memo } from "react";

const HomeSearch = () => {
  return (
    <div className="my-[15px] flex flex-row items-center">
      <Button
        shape="round"
        type="outline"
        className="!border-gray-500 w-full text-left"
        icon={<IconSearch className="text-gray-500" />}
      >
        <span className="text-gray-500">Search</span>
      </Button>
      <div
        className="rounded-full flex flex-row justify-center ml-[10px]"
        style={{
          backgroundColor: COLORS?.ACTION,
        }}
      >
        <IconMenu className="m-[10px] text-white" />
      </div>
    </div>
  );
};
export default memo(HomeSearch);
