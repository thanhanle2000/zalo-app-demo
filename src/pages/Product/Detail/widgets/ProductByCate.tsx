import { IconHeart } from "@arco-design/web-react/icon";
import { setProduct } from "core/hook/recoil/recoil";
import { ROUTERS } from "core/routers/routers";
import React, { memo } from "react";
import { useRecoilState } from "recoil";
import { formatCurrency, whereConditions } from "ultils/helper";
import { useNavigate } from "zmp-ui";
import { Product } from "../types/Detail.Res";

interface Props {
  productData: any;
  idActive: number;
  cate: string;
}
const ProductByCate = ({ productData, idActive, cate }: Props) => {
  // DATA
  const data = productData?.filter((item: any) => item.id !== idActive);

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
    <div className="flex flex-col mt-[5px]">
      <span className="text-[15px] font-semibold">Sản phẩm cùng danh mục</span>
      <div className="flex flex-row gap-[8px] relative overflow-x-auto whitespace-nowrap scrollbar-hide mt-[10px]">
        {whereConditions(data, [{ cate: cate }])?.map((item: Product) => (
          <div
            key={item?.id}
            className="border border-gray-400 flex flex-col gap-[3px] rounded-[15px] p-[3px] relative "
            style={{ minWidth: "120px" }}
            onClick={() => onNextPage(item)}
          >
            <img
              src={item?.img}
              alt={item?.label}
              className="m-[2px] rounded-[15px]"
            />
            <div className="flex flex-row items-start justify-between px-[5px]">
              <span className="font-semibold text-[14px] truncate">
                {item?.label}
              </span>
            </div>

            <div className="flex flex-col items-start justify-start text-left px-[5px]">
              <span className="text-[#82111A] text-[15px] font-extrabold">
                {formatCurrency(item?.price)}
              </span>
              <div className="flex flex-row items-center text-[13px] gap-[3px] text-gray-500">
                <span>Đã bán</span>
                <span>{item?.sale / 1000}k</span>
              </div>
            </div>
            <div className="absolute top-2 right-2 rounded-full flex flex-row items-center bg-white w-[20px] h-[20px]">
              <IconHeart className="text-yellow-500 m-auto" fontSize={16} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default memo(ProductByCate);
