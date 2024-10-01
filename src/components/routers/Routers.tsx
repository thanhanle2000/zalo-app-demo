import { ROUTERS } from "core/routers/routers";
import AccountContainer from "pages/Account/AccountContainer";
import CartContainer from "pages/Cart/CartContainer";
import HomeContainer from "pages/Home";
import React, { memo } from "react";
import { Route } from "react-router-dom";
import { AnimationRoutes } from "zmp-ui";

const Routers = () => {
  return (
    <AnimationRoutes>
      <Route path={ROUTERS?.HOME} element={<HomeContainer />}></Route>
      <Route path={ROUTERS?.CART} element={<CartContainer />}></Route>
      <Route path={ROUTERS?.ACCOUNT} element={<AccountContainer />}></Route>
    </AnimationRoutes>
  );
};
export default memo(Routers);
