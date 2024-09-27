import BottomBar from "components/bottom-bars";
import HomePage from "pages";
import About from "pages/about";
import User from "pages/user";
import React, { memo } from "react";
import { Form, Route } from "react-router-dom";
import { AnimationRoutes, Box } from "zmp-ui";

const Layout = () => {
  return (
    <Box flex flexDirection="column" className="h-screen">
      <Box className="flex-1 flex flex-col overflow-hidden">
        <AnimationRoutes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/form" element={<Form></Form>}></Route>
          <Route path="/user" element={<User></User>}></Route>
        </AnimationRoutes>
      </Box>
      <BottomBar />
    </Box>
  );
};
export default memo(Layout);
