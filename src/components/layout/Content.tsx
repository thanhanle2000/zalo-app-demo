import { IconArrowLeft, IconHeart } from "@arco-design/web-react/icon";
import React, { memo, ReactNode } from "react";
import { Page, useNavigate } from "zmp-ui";
import logo from "../../assets/logo/banner-logo.png";

interface Props {
  children: ReactNode;
}

const Content = ({ children }: Props) => {
  //NAVIGATE
  const navigate = useNavigate();

  return (
    <Page className="page flex flex-col items-center bg-white">
      <div className="flex flex-row justify-between w-full">
        <div
          className="border border-[#EFAE09] w-[40px] h-[40px] flex flex-row justify-center items-center p-[5px] rounded-full"
          onClick={() => navigate(-1)}
        >
          <IconArrowLeft fontSize={22} />
        </div>
        <img src={logo} className="w-[90px]" />
        <div className="border border-[#EFAE09] w-[40px] h-[40px] flex flex-row justify-center items-center p-[5px] rounded-full">
          <IconHeart fontSize={22} />
        </div>
      </div>
      {children}
    </Page>
  );
};

export default memo(Content);
