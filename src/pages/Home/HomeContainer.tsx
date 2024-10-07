import Loading from "components/loading/Loading";
import { DB_LOCAL } from "core/constants/constants";
import React, { memo, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getDataToLocal } from "ultils/helper";
import { Page } from "zmp-ui";
import logoBanner from "../../assets/logo/banner-logo.png";
import HomeAddress from "./widgets/HomeAddress";
import HomeBanner from "./widgets/HomeBanner";
import HomeCateFeauted from "./widgets/HomeCateFeauted";
import HomeFlashSale from "./widgets/HomeFlashSale";
import HomeProduct from "./widgets/HomeProduct";
import HomeSearch from "./widgets/HomeSearch";

const HomeContainer = () => {
  // USE LOCATION
  const location = useLocation();

  // GET CART
  let cart = getDataToLocal(DB_LOCAL?.CART_ORDER) || [];

  // STATE
  const [isLoading, setIsLoading] = useState(true);
  const [active, setActive] = useState<any>({ id: 1, cate: "" });

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [active]);

  return (
    <div>
      <div className="sticky top-0 bg-white z-50">
        <img src={logoBanner} className="w-[80px] m-auto" />
      </div>
      <Loading isLoading={isLoading} />
      <Page className="page bg-[#ffffff] mt-[-20px]">
        <HomeAddress {...{ total: cart?.length }} />
        <HomeSearch />
        <HomeBanner />
        <HomeCateFeauted />
        <HomeFlashSale {...{ active, setActive }} />
        <HomeProduct {...{ active }} />
      </Page>
    </div>
  );
};

export default memo(HomeContainer);
