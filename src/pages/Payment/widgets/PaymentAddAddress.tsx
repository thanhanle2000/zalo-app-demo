import { Divider, Form, Radio } from "@arco-design/web-react";
import { IconLocation } from "@arco-design/web-react/icon";
import Content from "components/layout/Content";
import Loading from "components/loading/Loading";
import {
  ACTION_FORM,
  DB_LOCAL,
  LST_TYPE_ADDRESS,
} from "core/constants/constants";
import React, { memo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDataToLocal } from "ultils/helper";
import { Button } from "zmp-ui";
import { setDataToLocal } from "../../../ultils/helper";
import PaymentAddAddressModal from "../modal/PaymentAddAddressModal";

const RadioGroup = Radio.Group;
const PaymentAddAddress = () => {
  // FORM
  const [form] = Form.useForm();

  // NAVIGATE
  const navigate = useNavigate();

  // STATE
  const [visible, setVisible] = useState(false);
  const [action, setAction] = useState(ACTION_FORM?.CREATE);
  const [addresses, setAddresses] = useState<any>([]);
  const [defaultAddress, setDefaultAddress] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [addresses]);

  useEffect(() => {
    const storedAddresses = getDataToLocal(DB_LOCAL?.ADDRESS);
    if (storedAddresses) {
      setAddresses(storedAddresses);
      const defaultIndex = storedAddresses.findIndex(
        (address: any) => address?.active
      );
      if (defaultIndex !== -1) setDefaultAddress(defaultIndex);
    }
  }, []);

  useEffect(() => {
    setDataToLocal(DB_LOCAL?.ADDRESS, addresses);
  }, [addresses]);

  // ON CLOSE MODAL
  const onCloseModal = () => {
    setVisible(false);
    form.resetFields();
  };

  // ON SUBMIT FORM
  const onSubmitForm = () => {
    form.validate().then((values) => {
      if (action === ACTION_FORM?.CREATE)
        setAddresses([...addresses, { ...values, active: false }]);
      onCloseModal();
    });
  };

  // ON CHANGE DEFAULTH ADDRESS
  const onChangeDefaultAddress = (index: number) => setDefaultAddress(index);

  // ON CONFIRM SELECTION
  const onConfirmSelection = () => {
    const updatedAddresses = addresses?.map((address: any, idx: number) => ({
      ...address,
      active: idx === defaultAddress,
    }));
    setAddresses(updatedAddresses);
    setDataToLocal(DB_LOCAL?.ADDRESS, updatedAddresses);
    navigate(-1);
  };

  return (
    <Content centerElement="Địa chỉ nhận hàng">
      <Loading isLoading={isLoading} />
      <div className="mt-[5px] flex flex-col p-[10px] min-h-[86vh]">
        <div className="address-list">
          <RadioGroup value={defaultAddress} className="w-full">
            {addresses?.map((address: any, index: number) => (
              <div
                key={index}
                className="flex flex-col my-[5px] w-full"
                onClick={() => onChangeDefaultAddress(index)}
              >
                <div className="flex flex-row items-center justify-between gap-[10px]">
                  <div className="flex flex-row items-start gap-[5px] w-[6/12]">
                    <IconLocation fontSize={25} className="text-yellow-500" />
                    <div className="flex flex-col gap-[5px]">
                      <span className="font-semibold text-[17px]">
                        {
                          LST_TYPE_ADDRESS?.find(
                            (item: any) => item?.code === address?.type
                          )?.name
                        }
                      </span>
                      <span>{address?.address}</span>
                    </div>
                  </div>
                  <Radio value={index} />
                </div>
                <Divider className="mt-[10px]" />
              </div>
            ))}
          </RadioGroup>
        </div>

        <button
          className="border border-dashed border-orange-400 rounded-lg w-full p-[15px] items-center text-orange-400"
          onClick={() => {
            setAction(ACTION_FORM?.CREATE);
            setVisible(true);
          }}
        >
          + Thêm vị trí giao hàng
        </button>
      </div>

      <PaymentAddAddressModal
        {...{ action, visible, onSubmitForm, onCloseModal, form }}
      />

      <Button
        className="!bg-orange-500 w-full fixed bottom-3"
        onClick={onConfirmSelection}
      >
        Chọn
      </Button>
    </Content>
  );
};

export default memo(PaymentAddAddress);
