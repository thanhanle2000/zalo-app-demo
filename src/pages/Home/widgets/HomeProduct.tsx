import { IconHeart, IconStar } from "@arco-design/web-react/icon";
import productData from "core/db/mock/product";
import { ROUTERS } from "core/routers/routers";
import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { formatCurrency, whereConditions } from "ultils/helper";
import { setProduct } from "../../../core/hook/recoil/recoil";

interface Props {
  active: { id: number; cate: string };
}
const HomeProduct = ({ active }: Props) => {
  //NAVIGATE
  const navigate = useNavigate();

  // RECOIL
  const [_, setProducts] = useRecoilState(setProduct);

  // ON NEXT PAGE
  const onNextPage = (item: any) => {
    setProducts(item);
    navigate(ROUTERS?.DETAIL_PRODUCT);
  };

  return (
    <div className="grid grid-cols-2 gap-[8px] relative">
      {whereConditions(productData?.data, [{ cate: active?.cate }])?.map(
        (item) => (
          <div
            key={item?.id}
            className="border border-gray-400 flex flex-col gap-[3px] rounded-[15px] p-[3px] relative"
            onClick={() => onNextPage(item)}
          >
            <img
              src={item?.img}
              alt={item?.label}
              className="m-[2px] rounded-[15px]"
            />
            <div className="flex flex-row items-start justify-between px-[5px]">
              <span
                className="font-semibold text-[14px] overflow-hidden text-ellipsis line-clamp-2"
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 2,
                }}
              >
                {item?.label}
              </span>
              <div className="flex flex-row items-center gap-[3px]">
                <IconStar fontSize={20} className="text-yellow-500" />
                <span className="text-gray-500 text-[16px]">{item?.rate}</span>
              </div>
            </div>

            <div className="flex flex-row items-center justify-between px-[5px]">
              <span className="text-[#82111A] text-[15px] font-semibold">
                {formatCurrency(item?.price)}
              </span>
              <div className="flex flex-row items-center text-[13px] gap-[3px] text-gray-500">
                <span>Đã bán</span>
                <span>{item?.sale / 1000}k</span>
              </div>
            </div>
            <div className="absolute top-2 right-3 rounded-full flex flex-row items-center bg-white w-[30px] h-[30px]">
              <IconHeart className="text-yellow-500 m-auto" fontSize={23} />
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default memo(HomeProduct);
