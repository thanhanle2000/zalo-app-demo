import { IconArrowLeft, IconHeart } from "@arco-design/web-react/icon";
import React, { memo, ReactNode } from "react";
import { useNavigate } from "zmp-ui";
import logo from "../../assets/logo/banner-logo.png";

interface Props {
  children: ReactNode;
}

const Content = ({ children }: Props) => {
  // NAVIGATE
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center bg-white h-full">
      <div className="flex flex-row justify-between w-full p-2">
        <div
          className="border border-[#EFAE09] w-[30px] h-[30px] flex flex-row justify-center items-center p-[5px] rounded-full"
          onClick={() => navigate(-1)}
        >
          <IconArrowLeft fontSize={16} />
        </div>
        <img src={logo} className="w-[80px]" />
        <div className="border border-[#EFAE09] w-[30px] h-[30px] flex flex-row justify-center items-center p-[5px] rounded-full">
          <IconHeart fontSize={16} />
        </div>
      </div>
      <div className="flex-grow overflow-y-auto w-full px-4">{children}</div>
    </div>
  );
};

export default memo(Content);
