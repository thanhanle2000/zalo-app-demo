import { IconHeart, IconStar } from "@arco-design/web-react/icon";
import { CustomImage } from "components/image/CustomImage";
import Content from "components/layout/Content";
import Loading from "components/loading/Loading";
import { getProduct } from "core/hook/recoil/recoil";
import React, { memo, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { formatCurrency } from "ultils/helper";
import logo from "../../../assets/logo/banner-logo.png";
import productData from "../../../core/db/mock/product";
import ProductByCate from "./widgets/ProductByCate";
import ProductOrder from "./widgets/ProductOrder";

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
  }, [active]);

  return (
    <Content
      centerElement={<img src={logo} className="w-[80px]" />}
      rightElement={
        <div className="border border-[#EFAE09] w-[30px] h-[30px] flex flex-row justify-center items-center p-[5px] rounded-full">
          <IconHeart fontSize={16} />
        </div>
      }
    >
      <Loading isLoading={isLoading} />
      <div className="flex flex-col gap-[5px] mt-[5px] mb-[70px] w-full">
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
        <span className="text-[#82111A] text-[20px] font-black">
          {formatCurrency(data?.price)}
        </span>
        <span className="text-[22px] font-semibold">{data?.label}</span>
        <div className="flex flex-col mt-[5px]">
          <span className="text-[15px] font-semibold">Thông tin sản phẩm</span>
          <span className="text-left">{data?.description}</span>
        </div>
        <ProductByCate
          {...{
            productData: productData?.data ?? [],
            idActive: active?.id,
            cate: data?.cate,
          }}
        />
      </div>
      <ProductOrder {...{ data }} />
    </Content>
  );
};
export default memo(ProductDetailContainer);
