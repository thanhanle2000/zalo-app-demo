import { IconStar } from "@arco-design/web-react/icon";
import { CustomImage } from "components/image/CustomImage";
import Content from "components/layout/Content";
import Loading from "components/routers/Loading";
import { getProduct } from "core/hook/recoil/recoil";
import React, { memo, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { formatCurrency } from "ultils/helper";
import productData from "../../../core/db/mock/product";
import ProductByCate from "./widgets/ProductByCate";

const ProductDetailContainer = () => {
  // RECOIL
  const active: any = useRecoilValue(getProduct);

  // GET PRODUCT BY ID
  const getProductById = (id: number, lst: any) =>
    lst?.find((item: any) => item?.id === id);

  // DATA
  const data = getProductById(active?.id, productData?.data ?? []);

  // STATE
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Content>
      <Loading isLoading={isLoading} />
      <div className="flex flex-col gap-[5px] mt-[10px] w-full">
        <div className="m-auto">
          <CustomImage img={data?.img} width={300} />
        </div>
        <div className="flex flex-row justify-between mt-[5px]">
          <span className="text-gray-400 text-[14px] italic">
            Tặng {data?.price.toLocaleString()} điểm
          </span>
          <span className="text-[15px] text-gray-400 flex flex-row items-center">
            <IconStar className="text-yellow-500" fontSize={22} />
            {data?.rate}
          </span>
        </div>
        <span className="text-[#82111A] text-[20px] font-bold">
          {formatCurrency(data?.price)}
        </span>
        <span className="text-[22px] font-semibold">{data?.label}</span>
        <div className="flex flex-col mt-[5px]">
          <span className="text-[15px] font-semibold">Thông tin sản phẩm</span>
          <span className="text-left">{data?.description}</span>
        </div>
        <ProductByCate
          {...{ productData: productData?.data ?? [], idActive: active?.id }}
        />
      </div>
    </Content>
  );
};
export default memo(ProductDetailContainer);
