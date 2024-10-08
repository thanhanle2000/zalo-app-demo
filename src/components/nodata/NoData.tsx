import React, { memo } from "react";
import ic_nodata from "../../assets/icon/ic_nodata.avif";

interface Props {
  className?: string;
}
const NoData = ({ className }: Props) => {
  return (
    <div className={className}>
      <div className="flex flex-col justify-between items-center">
        <img src={ic_nodata} className="w-[150px] m-auto" />
        <span className="italic">Không có dữ liệu!!!</span>
      </div>
    </div>
  );
};
export default memo(NoData);
