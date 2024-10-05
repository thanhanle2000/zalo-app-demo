import React, { memo } from "react";
import ic_nodata from "../../assets/icon/ic_nodata.avif";

const NoData = () => {
  return (
    <div className="flex flex-col justify-between items-center">
      <img src={ic_nodata} className="w-[150px] m-auto" />
      <span className="italic">Không có dữ liệu!!!</span>
    </div>
  );
};
export default memo(NoData);
