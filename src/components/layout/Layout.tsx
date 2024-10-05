import { BottomBarsPlus } from "components/bottom-bar/bottom-bar-plus";
import Routers from "components/routers/Routers";
import React, { memo } from "react";
import { Box } from "zmp-ui";

const Layout = () => {
  return (
    <Box flex flexDirection="column" className="h-screen sfu-font">
      <Box className="flex-1 flex flex-col overflow-hidden">
        <Routers />
      </Box>
      <BottomBarsPlus />
    </Box>
  );
};

export default memo(Layout);
