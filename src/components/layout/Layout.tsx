import BottomBar_V1 from "components/bottom-bar/bottom-bar_v1";
import Routers from "components/routers/Routers";
import React, { memo } from "react";
import { Box } from "zmp-ui";

const Layout = () => {
  return (
    <Box flex flexDirection="column" className="h-screen">
      <Box className="flex-1 flex flex-col overflow-hidden">
        <Routers />
      </Box>
      <BottomBar_V1 />
    </Box>
  );
};
export default memo(Layout);
