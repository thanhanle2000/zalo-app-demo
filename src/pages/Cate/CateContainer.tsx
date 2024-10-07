import Content from "components/layout/Content";
import Loading from "components/loading/Loading";
import { CATES } from "core/db/mock/cate";
import { getCate } from "core/hook/recoil/recoil";
import React, { memo, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import CateHeader from "./widgets/CateHeader";
import CateProduct from "./widgets/CateProduct";

const CateContainer = () => {
  // RCOIL
  const _activeCate = useRecoilValue(getCate);

  // STATE
  const [active, setActive] = useState({
    type: _activeCate === "" ? CATES?.KITCHEN : _activeCate,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [active]);

  return (
    <Content centerElement="Danh mục sản phẩm">
      <Loading isLoading={isLoading} />
      <CateHeader {...{ active, setActive }} />
      <CateProduct {...{ active }} />
    </Content>
  );
};
export default memo(CateContainer);
