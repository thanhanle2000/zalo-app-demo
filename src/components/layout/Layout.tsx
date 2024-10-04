import BottomBar_V1 from "components/bottom-bar/bottom-bar_v1";
import Routers from "components/routers/Routers";
import { ROUTERS } from "core/routers/routers";
import React, { memo } from "react";
import { useLocation } from "react-router-dom";
import { Box } from "zmp-ui";

const Layout = () => {
  // LOCATION
  const location = useLocation();

  // IS CHECK
  const isCheck = location?.pathname === ROUTERS?.DETAIL_PRODUCT;

  return (
    <Box flex flexDirection="column" className="h-screen sfu-font">
      <Box className="flex-1 flex flex-col overflow-hidden">
        <Routers />
      </Box>
      {isCheck ? undefined : <BottomBar_V1 />}
    </Box>
  );
};

export default memo(Layout);
