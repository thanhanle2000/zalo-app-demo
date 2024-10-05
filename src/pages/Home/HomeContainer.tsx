import Loading from "components/loading/Loading";
import React, { memo, useEffect, useState } from "react";
import { Page } from "zmp-ui";
import logoBanner from "../../assets/logo/banner-logo.png";
import HomeAddress from "./widgets/HomeAddress";
import HomeBanner from "./widgets/HomeBanner";
import HomeCateFeauted from "./widgets/HomeCateFeauted";
import HomeFlashSale from "./widgets/HomeFlashSale";
import HomeProduct from "./widgets/HomeProduct";
import HomeSearch from "./widgets/HomeSearch";

const HomeContainer = () => {
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
        <HomeAddress />
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
