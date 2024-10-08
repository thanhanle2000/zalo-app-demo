import Content from "components/layout/Content";
import Loading from "components/loading/Loading";
import { DB_LOCAL } from "core/constants/constants";
import { getIsQuantity } from "core/hook/recoil/recoil";
import React, { memo, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { getDataToLocal, setDataToLocal } from "ultils/helper";
import { useNavigate } from "zmp-ui";
import CartProducts from "./widgets/CartProducts";

const CartContainer = () => {
  // USE NAVIGATE
  const navigate = useNavigate();

  // RECOIL
  const isQuantity = useRecoilValue(getIsQuantity);

  // STATE
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState(getDataToLocal(DB_LOCAL?.CART_ORDER) || []);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [isQuantity, cart]);

  // HANDLE INCREASE QUANTITY
  const handleIncreaseQuantity = (id: string) => {
    const updatedCart = cart?.map((item: any) =>
      item?.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
    setDataToLocal(DB_LOCAL?.CART_ORDER, updatedCart);
  };

  // HANDLE DECREASE QUANTITY
  const handleDecreaseQuantity = (id: string) => {
    const updatedCart = cart
      ?.map((item: any) =>
        item?.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item: any) => item.quantity > 0);
    setCart(updatedCart);
    setDataToLocal(DB_LOCAL?.CART_ORDER, updatedCart);
  };

  // HANDLE DELETE ITEM
  const handleDeleteItem = (id: string) => {
    const updatedCart = cart?.filter((item: any) => item?.id !== id);
    setCart(updatedCart);
    setDataToLocal(DB_LOCAL?.CART_ORDER, updatedCart);
  };

  // TOTAL PRICE
  const totalPrice = cart?.reduce((total: any, product: any) => {
    return total + product?.priceProduct * product?.quantity;
  }, 0);

  return (
    <Content centerElement="Giỏ hàng" className="!bg-white">
      <Loading isLoading={loading} />
      <CartProducts
        {...{
          cart,
          handleIncreaseQuantity,
          handleDecreaseQuantity,
          handleDeleteItem,
        }}
      />
    </Content>
  );
};
export default memo(CartContainer);
