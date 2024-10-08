import { Button, Divider, Drawer } from "@arco-design/web-react";
import {
  IconCloseCircle,
  IconMinus,
  IconPlus,
} from "@arco-design/web-react/icon";
import NoData from "components/nodata/NoData";
import { COLORS } from "core/constants/constants";
import { Product } from "pages/Product/Detail/types/Detail.Res";
import React, { memo, useState } from "react";
import "react-swipeable-list/dist/styles.css";
import { formatCurrency } from "ultils/helper";

interface Props {
  cart: any;
  handleIncreaseQuantity: (value: string | any) => void;
  handleDecreaseQuantity: (value: string | any) => void;
  handleDeleteItem: (value: string | any) => void;
}
const CartProducts = ({
  cart,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
  handleDeleteItem,
}: Props) => {
  // STATE
  const [visible, setVisible] = useState(false);

  // ON CLOSE DRAWER
  const onCLoseDrawer = () => setVisible(false);

  return (
    <div className="flex flex-col">
      {cart?.length === 0 ? (
        <NoData className="h-[93vh]" />
      ) : (
        <>
          {cart?.map((item: Product) => (
            <div
              className="relative flex flex-col justify-start"
              key={item?.id}
            >
              <div className="flex flex-row gap-[5px] relative">
                <img src={item?.img} className="w-[90px]" />
                <div className="flex flex-col gap-[10px]">
                  <span
                    className="text-[16px] font-semibold !mr-[18px]"
                    style={{
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 2,
                      whiteSpace: "normal",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {item?.label}
                  </span>
                  <div className="flex flex-row justify-between">
                    <span className="text-[#82111A] font-bold">
                      {formatCurrency(item?.price * item?.quantity!)}
                    </span>
                    <div className="flex flex-row items-center gap-[5px]">
                      <Button
                        size="mini"
                        className="w-[35px] h-[30px] !rounded-[4px] flex flex-row justify-between items-center"
                        onClick={() => handleDecreaseQuantity(item?.id)}
                      >
                        <IconMinus fontSize={22} />
                      </Button>
                      <div className="w-[35px] border-slate-100 text-center text-[16px] font-semibold">
                        {item?.quantity!}
                      </div>
                      <Button
                        size="mini"
                        className="w-[35px] h-[30px] !rounded-[4px] flex flex-row justify-between items-center !bg-yellow-400 !text-white"
                        onClick={() => handleIncreaseQuantity(item?.id)}
                      >
                        <IconPlus fontSize={22} />
                      </Button>
                    </div>
                  </div>
                </div>
                <IconCloseCircle
                  className="text-red-700 w-[24px] h-[24px] absolute top-[2px] right-[-10px] cursor-pointer"
                  fontSize={24}
                  // onClick={() => handleDeleteItem(item?.id)}
                  onClick={() => setVisible(true)}
                />
              </div>
              <Divider />
            </div>
          ))}
        </>
      )}
      <Drawer
        width={332}
        height={332}
        title={<span className="font-semibold">Xoá khỏi giỏ hàng</span>}
        visible={visible}
        cancelText
        onOk={() => {}}
        onCancel={onCLoseDrawer}
        placement="bottom"
        className="!rounded-t-[20px]"
        footer={
          <div className="flex flex-row justify-center gap-[20px]">
            <Button
              className="w-[150px] !rounded-full"
              type="outline"
              status="danger"
            >
              Hủy
            </Button>
            <Button
              className="w-[150px] !rounded-full !text-white"
              style={{
                backgroundColor: COLORS?.BG,
              }}
            >
              Xóa
            </Button>
          </div>
        }
      >
        <div>Here is an example text. </div>
      </Drawer>
    </div>
  );
};
export default memo(CartProducts);
