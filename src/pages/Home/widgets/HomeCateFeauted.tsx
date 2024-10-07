import { IconRight } from "@arco-design/web-react/icon";
import { CATES } from "core/db/mock/cate";
import { setCate } from "core/hook/recoil/recoil";
import { ROUTERS } from "core/routers/routers";
import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import ic_eat from "../../../assets/icon/ic_eat.png";
import ic_mobile from "../../../assets/icon/ic_mobile.png";
import ic_shirt from "../../../assets/icon/ic_shirt.png";
import ic_sport from "../../../assets/icon/ic_sport.png";

const HomeCateFeauted = () => {
  // LST CATE
  const lst_cate = [
    { id: 1, label: "Thời trang", icon: ic_shirt, type: CATES?.CLOTHES },
    { id: 2, label: "Công nghệ", icon: ic_mobile, type: CATES?.ELECTRIC },
    { id: 3, label: "Làm đẹp", icon: ic_sport, type: CATES?.COSMETICS },
    { id: 4, label: "Đồ bếp", icon: ic_eat, type: CATES?.KITCHEN },
  ];

  // NAVIGATE
  const navigate = useNavigate();

  // RECOIL
  const [_, Cate] = useRecoilState(setCate);

  // ON NEXT PAGE
  const onNextPage = (type: string) => {
    Cate(type);
    navigate(ROUTERS?.CATE);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center justify-between">
        <span className="font-semibold text-[16px]">Sản phẩm nổi bật</span>
        <div
          className="flex flex-row items-center gap-[2px]"
          onClick={() => onNextPage("")}
        >
          <span className="text-[13px]">Xem thêm</span>
          <IconRight fontSize={14} />
        </div>
      </div>
      <div className="flex flex-row mt-[10px] justify-between">
        {lst_cate?.map((item) => (
          <div
            key={item?.id}
            className="flex flex-col justify-center items-center"
            onClick={() => onNextPage(item?.type)}
          >
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
