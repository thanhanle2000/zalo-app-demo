import { Button, Drawer } from "@arco-design/web-react";
import { COLORS } from "core/constants/constants";
import React from "react";

interface Props {
  visible: boolean;
  onCLoseDrawer: () => void;
}
export const CartDrawer = ({ visible, onCLoseDrawer }: Props) => {
  return (
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
  );
};
