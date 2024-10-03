import { IconStar } from "@arco-design/web-react/icon";
import { CustomImage } from "components/image/CustomImage";
import Content from "components/layout/Content";
import { getProduct } from "core/hook/recoil/recoil";
import React, { memo } from "react";
import { useRecoilValue } from "recoil";
import { formatCurrency } from "ultils/helper";
import productData from "../../../core/db/mock/product";

const ProductDetailContainer = () => {
  // DATA
  const active: any = useRecoilValue(getProduct);

  // GET PRODUCT BY ID
  const getProductById = (id: number, lst: any) =>
    lst?.find((item: any) => item?.id === id);

  const data = getProductById(active?.id, productData?.data ?? []);

  return (
    <Content>
      <div className="flex flex-col gap-[5px] mt-[20px]">
        <CustomImage img={data?.img} width={370} />
        <div className="flex flex-row justify-between mt-[5px]">
          <span className="text-gray-400 text-[16px] italic">
            Tặng {data?.price.toLocaleString()}
          </span>
          <span className="text-[15px] flex flex-row items-center">
            <IconStar className="text-yellow-500" fontSize={25} />
            {data?.rate}
          </span>
        </div>
        <span className="text-[#82111A] text-[20px] font-semibold">
          {formatCurrency(data?.price)}
        </span>
        <span className="text-[22px] font-semibold">{data?.label}</span>
      </div>
    </Content>
  );
};
export default memo(ProductDetailContainer);
