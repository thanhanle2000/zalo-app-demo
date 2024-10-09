import { ROUTERS } from "core/routers/routers";
import AccountContainer from "pages/Account/AccountContainer";
import CartContainer from "pages/Cart/CartContainer";
import CateContainer from "pages/Cate/CateContainer";
import HomeContainer from "pages/Home";
import PaymentContainer from "pages/Payment/PaymentContainer";
import ProductDetailContainer from "pages/Product/Detail";
import ResultsSearchContainer from "pages/Search/ResultsSearch/ResultsSearchContainer";
import SearchContainer from "pages/Search/SearchContainer";
import React, { memo } from "react";
import { Route } from "react-router-dom";
import { AnimationRoutes } from "zmp-ui";

const Routers = () => {
  return (
    <AnimationRoutes>
      <Route path={ROUTERS?.HOME} element={<HomeContainer />}></Route>
      <Route path={ROUTERS?.CART} element={<CartContainer />}></Route>
      <Route path={ROUTERS?.ACCOUNT} element={<AccountContainer />}></Route>
      <Route
        path={ROUTERS?.DETAIL_PRODUCT}
        element={<ProductDetailContainer />}
      ></Route>
      <Route path={ROUTERS?.SEARCH} element={<SearchContainer />}></Route>
      <Route path={ROUTERS?.CATE} element={<CateContainer />}></Route>
      <Route
        path={ROUTERS?.RESULTS_SEARCH}
        element={<ResultsSearchContainer />}
      ></Route>
      <Route path={ROUTERS?.PAYMENT} element={<PaymentContainer />}></Route>
    </AnimationRoutes>
  );
};
export default memo(Routers);
