import { IconArrowLeft } from "@arco-design/web-react/icon";
import { ROUTERS } from "core/routers/routers";
import React, { memo, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "zmp-ui";
import logo from "../../assets/logo/banner-logo.png";

interface Props {
  children: ReactNode;
  rightElement?: ReactNode;
}

const Content = ({ children, rightElement }: Props) => {
  // NAVIGATE
  const navigate = useNavigate();

  // LOCATION
  const location = useLocation();

  return (
    <div className="flex flex-col items-center bg-white h-full">
      <div className="flex flex-row justify-between w-full p-[10px]">
        <div
          className="border border-[#EFAE09] w-[30px] h-[30px] flex flex-row justify-center items-center p-[5px] rounded-full"
          onClick={() => navigate(-1)}
        >
          <IconArrowLeft fontSize={16} />
        </div>
        {
          location?.pathname === ROUTERS?.DETAIL_PRODUCT ?
            <img src={logo} className="w-[80px]" />
            : undefined
        }
        {rightElement}
      </div>
      <div className="flex-grow overflow-y-auto w-full px-4">{children}</div>
    </div>
  );
};

export default memo(Content);
