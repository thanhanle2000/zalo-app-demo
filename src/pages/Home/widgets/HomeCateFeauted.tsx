import { IconRight } from "@arco-design/web-react/icon";
import React, { memo } from "react";
import ic_mobile from "../../../assets/icon/ic_mobile.png";
import ic_shirt from "../../../assets/icon/ic_shirt.png";
import ic_sport from "../../../assets/icon/ic_sport.png";
import ic_eat from "../../../assets/icon/ic_eat.png";

const HomeCateFeauted = () => {
  // LST CATE
  const lst_cate = [
    { id: 1, label: "Thời trang", icon: ic_shirt },
    { id: 2, label: "Công nghệ", icon: ic_mobile },
    { id: 3, label: "Làm đẹp", icon: ic_sport },
    { id: 4, label: "Đồ bếp", icon: ic_eat },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center justify-between">
        <span className="font-medium text-[16px]">Sản phẩm nổi bật</span>
        <div className="flex flex-row items-center gap-[2px]">
          <span className="text-[13px]">Xem thêm</span>
          <IconRight fontSize={14} />
        </div>
      </div>
      <div className="flex flex-row mt-[10px] justify-between">
        {lst_cate?.map((item) => (
          <div key={item?.id} className="flex flex-col justify-center items-center">
            <div
              key={item?.id}
              className="rounded-full w-[64px] h-[64px] flex flex-col justify-center items-center"
              style={{
                backgroundColor: "#882E26",
              }}
            >
              <img src={item?.icon} className="w-[30px]" />
            </div>
            <span className="pt-[3px] font-medium">{item?.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default memo(HomeCateFeauted);
