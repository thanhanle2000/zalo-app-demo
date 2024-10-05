import "@arco-design/web-react/dist/css/arco.css";
import React from "react";
import { ToastContainer } from "react-toastify";
import { RecoilRoot } from "recoil";
import { App, SnackbarProvider, ZMPRouter } from "zmp-ui";
import Layout from "./layout/Layout";

const MyApp = () => {
  return (
    <RecoilRoot>
      <App>
        <SnackbarProvider>
          <ZMPRouter>
            <Layout />
            <ToastContainer position="bottom-right" autoClose={800} />
          </ZMPRouter>
        </SnackbarProvider>
      </App>
    </RecoilRoot>
  );
};
export default MyApp;
