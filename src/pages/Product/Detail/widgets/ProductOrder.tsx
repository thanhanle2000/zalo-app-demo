import { Badge, Button } from "@arco-design/web-react";
import { IconArchive, IconMinus, IconPlus } from "@arco-design/web-react/icon";
import { COLORS, DB_LOCAL } from "core/constants/constants";
import { setIsQuantity } from "core/hook/recoil/recoil";
import { ROUTERS } from "core/routers/routers";
import React, { memo, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import {
  formatCurrency,
  getDataToLocal,
  setDataToLocal,
  toastSuccess,
} from "ultils/helper";
import { useNavigate } from "zmp-ui";
import { Product } from "../types/Detail.Res";

interface Props {
  data: any;
}
const ProductOrder = ({ data }: Props) => {
  // USE NAVIGATE
  const navigate = useNavigate();

  // USE LOCATION
  const location = useLocation();

  // GET CART
  let cart = getDataToLocal(DB_LOCAL?.CART_ORDER) || [];

  // RECOIL
  const [__, setQuantity] = useRecoilState(setIsQuantity);

  // STATE
  const [quantity, setQuantityState] = useState(
    cart?.find((item: any) => item?.id === data?.id)?.quantity ?? 0
  );

  // REQUEST
  const request = {
    id: data?.id,
    label: data?.label,
    img: data?.img,
    price: data?.price,
    quantity: quantity,
  };

  // UPDATE CART
  const updateCart = (newQuantity: number) => {
    const existingProduct = cart?.find(
      (item: Product) => item?.id === request?.id
    );

    if (existingProduct) existingProduct.quantity = newQuantity;
    else cart.push({ ...request, quantity: newQuantity });

    setDataToLocal(DB_LOCAL?.CART_ORDER, cart);
  };

  // HANDLE INCREASE QUANTITY
  const handleIncreaseQuantity = () => {
    toastSuccess("Thêm vào giỏ hàng thành công");
    setQuantityState((prev: Product | any) => {
      const newQuantity = prev + 1;
      updateCart(newQuantity);
      return newQuantity;
    });
  };

  // HANDLE DECREASE QUANTITY
  const handleDecreaseQuantity = () => {
    setQuantityState((prev: any) => {
      const newQuantity = prev - 1;

      if (newQuantity === 0)
        cart = cart?.filter((item: Product) => item?.id !== request?.id);
      else updateCart(newQuantity);

      setDataToLocal(DB_LOCAL?.CART_ORDER, cart);
      return newQuantity;
    });
  };

  useEffect(() => {
    setQuantityState(
      cart?.find((item: Product) => item?.id === data?.id)?.quantity ?? 0
    );
  }, [cart, location?.key]);

  return (
    <div className="bg-white absolute bottom-0 left-0 right-0 mx-auto w-full flex flex-row items-center justify-center gap-[10px] py-[10px]">
      {quantity === 0 ? (
        <Button
          status="danger"
          className="!rounded-[4px] !h-[45px] px-[22px] !border-red-400 m-auto !font-semibold !text-[15px]"
          onClick={handleIncreaseQuantity}
        >
          Thêm vào giỏ
        </Button>
      ) : (
        <div className="flex flex-row items-center m-auto pl-[8px] gap-[5px]">
          <Button
            size="mini"
            className="!h-[45px] !rounded-[4px] !p-[10px]"
            onClick={handleDecreaseQuantity}
          >
            <IconMinus fontSize={18} />
          </Button>
          <div className="w-[35px] border-slate-100 text-center text-[16px] font-semibold">
            {quantity}
          </div>
          <Button
            size="mini"
            className="!h-[45px] !rounded-[4px] !p-[10px]"
            onClick={handleIncreaseQuantity}
          >
            <IconPlus fontSize={18} />
          </Button>
        </div>
      )}
      <div className="flex flex-row items-center text-center justify-center bg-white h-[48px]">
        <div
          className="flex flex-col items-center p-[5px] bg-slate-100"
          onClick={() => navigate(ROUTERS?.CART)}
        >
          <Badge count={cart?.length}>
            <IconArchive fontSize={24} />
          </Badge>
          Giỏ hàng
        </div>
        <div
          className={`flex flex-col justify-center items-center py-[6px] text-white mr-[10px] rounded-[4px] w-[150px] cursor-pointer
               ${quantity === 0 ? `bg-[${COLORS?.BG}]` : `bg-[${COLORS?.BG}]`}`}
          onClick={() => {
            setQuantity((prev) => !prev);
          }}
        >
          <div className="flex flex-row">
            Đặt mua
            {quantity === 0 ? null : (
              <span className="pl-[4px] font-medium">({quantity})</span>
            )}
          </div>
          <span className="font-semibold">
            {formatCurrency(quantity * data?.price)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default memo(ProductOrder);
