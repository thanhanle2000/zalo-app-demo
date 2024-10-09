import { Button, Divider, Modal } from "@arco-design/web-react";
import {
  IconCloseCircle,
  IconMinus,
  IconPlus,
} from "@arco-design/web-react/icon";
import NoData from "components/nodata/NoData";
import { COLORS } from "core/constants/constants";
import { ROUTERS } from "core/routers/routers";
import { Product } from "pages/Product/Detail/types/Detail.Res";
import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
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
  // NAVIGATE
  const navigate = useNavigate();

  // Tính tổng giá trị giỏ hàng
  const totalPrice = cart?.reduce(
    (total: number, item: Product) => total + item?.price * item?.quantity!,
    0
  );

  // CONFIRM
  function confirm(item: any) {
    Modal.confirm({
      className: "!w-[350px]",
      title: "Xác nhận",
      onCancel: () => {
        Modal.destroyAll();
      },
      content: (
        <span className="text-[15px]">
          Bạn có muốn xóa sản phẩm ra khỏi giỏ hàng?
        </span>
      ),
      footer: (
        <div className="flex flex-row justify-center gap-[20px]">
          <Button
            className="w-[150px] !rounded-full"
            type="outline"
            status="danger"
            onClick={() => Modal.destroyAll()}
          >
            Hủy bỏ
          </Button>
          <Button
            className="w-[150px] !rounded-full !text-white"
            style={{ backgroundColor: COLORS?.BG }}
            onClick={() => {
              handleDeleteItem(item?.id);
              Modal.destroyAll();
            }}
          >
            Xác nhận
          </Button>
        </div>
      ),
    });
  }

  return (
    <div className="flex flex-col justify-between min-h-[93vh] !w-full">
      {cart?.length === 0 ? (
        <NoData className="h-[93vh]" />
      ) : (
        <>
          <div className="max-h-[500px] overflow-y-auto overflow-x-hidden">
            {cart?.map((item: Product) => (
              <div
                className="relative flex flex-col justify-start"
                key={item?.id}
              >
                <div className="flex flex-row gap-[10px] relative">
                  <img src={item?.img} className="w-[90px]" />
                  <div className="flex flex-col gap-[10px] justify-between !w-full">
                    <span
                      className="text-[16px] font-semibold !mr-[16px]"
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
                    className="text-red-700 w-[24px] h-[24px] absolute top-[2px] right-[-2px] cursor-pointer"
                    fontSize={24}
                    onClick={() => confirm(item)}
                  />
                </div>
                <Divider />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-[10px] shadow-lg mt-4 w-full p-[10px]">
            <div className="flex flex-row justify-between">
              <span className="text-gray-400">Tạm tính:</span>
              <span className="text-[#82111A] font-semibold text-[16px]">
                {formatCurrency(totalPrice)}
              </span>
            </div>
            <div className="flex flex-row justify-between">
              <span className="text-gray-400">Phí ship:</span>
              <span className="text-black font-semibold text-[16px]">
                {formatCurrency(0)}
              </span>
            </div>
            <div className="flex flex-row justify-between">
              <span className="text-gray-400">Tổng cộng:</span>
              <span className="text-[#82111A] font-semibold text-[18px]">
                {formatCurrency(totalPrice)}
              </span>
            </div>
            <div className="border-t-2 border-dashed border-gray-400 my-[10px]"></div>
            <Button
              className="!bg-yellow-400 !text-white w-[80%] m-auto !rounded-full text-[16px]"
              size="large"
              onClick={() => navigate(ROUTERS?.PAYMENT)}
            >
              Thanh Toán
            </Button>
          </div>
        </>
      )}
    </div>
  );
};
export default memo(CartProducts);
