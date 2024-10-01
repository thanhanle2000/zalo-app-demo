import React, { memo } from "react";
import { Page } from "zmp-ui";
import logoBanner from "../../assets/logo/banner-logo.png";
import HomeAddress from "./widgets/HomeAddress";
import HomeCateFeauted from "./widgets/HomeCateFeauted";
import HomeSearch from "./widgets/HomeSearch";

const HomeContainer = () => {
  return (
    <Page className="page bg-white">
      <img src={logoBanner} className="w-[80px] m-auto" />
      <HomeAddress />
      <HomeSearch />
      <HomeCateFeauted />
    </Page>
  );
};
export default memo(HomeContainer);
