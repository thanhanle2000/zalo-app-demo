import { IconArrowLeft } from "@arco-design/web-react/icon";
import React, { memo, ReactNode } from "react";
import { useNavigate } from "zmp-ui";

interface Props {
  children?: ReactNode;
  centerElement?: string | ReactNode;
  rightElement?: ReactNode;
  className?: string;
}

const Content = ({
  children,
  centerElement,
  rightElement,
  className,
}: Props) => {
  // NAVIGATE
  const navigate = useNavigate();

  return (
    <div className={`flex flex-col items-center bg-white h-full ${className}`}>
      <div className="flex flex-row justify-between w-full p-[10px]">
        <div
          className="border border-[#EFAE09] w-[30px] h-[30px] flex flex-row justify-center items-center p-[5px] rounded-full"
          onClick={() => navigate(-1)}
        >
          <IconArrowLeft fontSize={16} />
        </div>
        <span className="text-[16px] font-semibold m-auto">
          {centerElement}
        </span>
        <span>{rightElement}</span>
      </div>
      <div className="flex-grow overflow-y-auto w-full px-[10px]">
        {children}
      </div>
    </div>
  );
};

export default memo(Content);
