import { Button, Divider } from "@arco-design/web-react";
import { IconLocation } from "@arco-design/web-react/icon";
import { LST_TYPE_ADDRESS } from "core/constants/constants";
import { ROUTERS } from "core/routers/routers";
import React, { memo } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  addresses: any;
}
const PaymentListAddress = ({ addresses }: Props) => {
  // NAVIGATE
  const navigate = useNavigate();

  return (
    <div className="mt-[5px] flex flex-col p-[10px]">
      <span className="text-[18px] font-semibold">Địa chỉ nhận hàng</span>
      <div className="flex flex-row items-center justify-between gap-[10px] mt-[20px] w-full">
        <div className="flex flex-row items-start gap-[5px] w-[6/12]">
          <IconLocation fontSize={25} className="text-yellow-500" />
          <div className="flex flex-col gap-[5px]">
            <span className="font-semibold text-[17px]">
              {
                LST_TYPE_ADDRESS?.find(
                  (item: any) => item?.code === addresses?.type
                )?.name
              }
            </span>
            <span>{addresses?.address}</span>
          </div>
        </div>
        <Button
          type="outline"
          status="danger"
          className="!rounded-[10px] w-[4/12]"
          onClick={() => navigate(ROUTERS?.PAYMENT_ADD_ADDRESS)}
        >
          Thay đổi
        </Button>
      </div>
      <Divider />
    </div>
  );
};
export default memo(PaymentListAddress);
