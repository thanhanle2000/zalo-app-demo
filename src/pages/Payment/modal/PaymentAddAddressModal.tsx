import { Form, Input, Modal, Select, Switch } from "@arco-design/web-react";
import FormItem from "@arco-design/web-react/es/Form/form-item";
import {
  ACTION_FORM,
  COLORS,
  LST_TYPE_ADDRESS,
} from "core/constants/constants";
import React, { memo } from "react";
import { toLabelArrActive } from "ultils/helper";

interface Props {
  action: string;
  visible: boolean;
  onSubmitForm: () => void;
  onCloseModal: () => void;
  form: any;
}
const PaymentAddAddressModal = ({
  action,
  visible,
  onSubmitForm,
  onCloseModal,
  form,
}: Props) => {
  return (
    <Modal
      title={action === ACTION_FORM?.CREATE ? "Tạo mới" : "Cập nhật"}
      visible={visible}
      onOk={onSubmitForm}
      onCancel={onCloseModal}
      autoFocus={false}
      focusLock={true}
      okButtonProps={{ style: { backgroundColor: COLORS?.BG, width: 110 } }}
      cancelButtonProps={{
        style: { width: 120 },
      }}
      okText="Xác nhận"
      cancelText="Đóng"
      className="w-[350px]"
    >
      <Form form={form} layout="vertical">
        <FormItem
          label="Địa chỉ nhận hàng"
          field="address"
          rules={[{ required: true, message: "Vui lòng nhập" }]}
        >
          <Input placeholder="VD: 65 đường số 8, An Khánh ,......" />
        </FormItem>
        <div className="flex flex-row justify-between w-full gap-[20px]">
          <FormItem
            label="Phân loại"
            field="type"
            initialValue={
              action === ACTION_FORM?.CREATE ? LST_TYPE_ADDRESS[0].code : null
            }
            rules={[{ required: true }]}
          >
            <Select
              placeholder="Chọn phân loại địa chỉ"
              options={toLabelArrActive(LST_TYPE_ADDRESS)}
              allowClear
            />
          </FormItem>
          <FormItem label="Mặc định" field="active">
            <Switch />
          </FormItem>
        </div>
      </Form>
    </Modal>
  );
};
export default memo(PaymentAddAddressModal);
