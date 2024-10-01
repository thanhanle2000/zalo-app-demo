// React core
import App from "components/app";
import "css/app.scss";
import "css/tailwind.scss";
import React from "react";
import { createRoot } from "react-dom/client";
import "zmp-ui/zaui.css";
import appConfig from "../app-config.json";

if (!window.APP_CONFIG) window.APP_CONFIG = appConfig;

createRoot(document.getElementById("app")!).render(React.createElement(App));
