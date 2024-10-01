import React, { memo, useEffect, useState } from "react";
import { Page } from "zmp-ui";
import logoBanner from "../../assets/logo/banner-logo.png";
import HomeAddress from "./widgets/HomeAddress";
import HomeCateFeauted from "./widgets/HomeCateFeauted";
import HomeSearch from "./widgets/HomeSearch";
import HomeBanner from "./widgets/HomeBanner";
import HomeFlashSale from "./widgets/HomeFlashSale";
import HomeProduct from "./widgets/HomeProduct";
import Loading from "components/routers/Loading";

const HomeContainer = () => {
  // STATE
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className="sticky top-0 bg-white z-50">
        <img src={logoBanner} className="w-[80px] m-auto" />
      </div>
      <Loading isLoading={isLoading} />
      <Page className="page bg-[#ffffff] mt-[-20px]">
        <HomeAddress />
        <HomeSearch />
        <HomeBanner />
        <HomeCateFeauted />
        <HomeFlashSale />
        <HomeProduct />
      </Page>
    </div>
  );
};

export default memo(HomeContainer);
