import { Divider } from "@arco-design/web-react";
import React, { memo } from "react";

interface Props {
  search: string;
}
const ResultsSearch = ({ search }: Props) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between mt-[20px]">
        <span className="text-[16px] font-semibold">Kết quả</span>
        <span>
          <span className="font-semibold text-[15px]">4</span> sản phẩm
        </span>
      </div>
      <Divider className="mb-[-5px]" />
    </div>
  );
};
export default memo(ResultsSearch);
