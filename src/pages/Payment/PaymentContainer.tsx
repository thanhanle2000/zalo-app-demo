import Content from "components/layout/Content";
import { DB_LOCAL } from "core/constants/constants";
import React, { memo, useEffect, useState } from "react";
import { getDataToLocal } from "ultils/helper";
import PaymentListAddress from "./widgets/PaymentListAddress";

const PaymentContainer = () => {
  // STATE
  const [addresses, setAddresses] = useState<any>([]);

  useEffect(() => {
    const storedAddresses = getDataToLocal(DB_LOCAL?.ADDRESS);
    if (storedAddresses)
      setAddresses(storedAddresses?.find((item: any) => item?.active === true));
  }, []);

  return (
    <Content centerElement="Thanh toán">
      <PaymentListAddress {...{ addresses }} />
    </Content>
  );
};
export default memo(PaymentContainer);
