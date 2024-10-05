import React, { memo } from "react";
import ic_loading from "../../assets/icon/ic_loading.png";

interface LoadingProps {
  isLoading: boolean;
}

const Loading: React.FC<LoadingProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[9999]">
      <div className="absolute inset-0 bg-gray-200 opacity-50"></div>
      <div className="relative flex items-center justify-center">
        <div className="absolute w-[75px] h-[75px] border-4 border-gray-200 border-t-transparent rounded-full animate-spin z-10"></div>
        <img
          src={ic_loading}
          alt="Loading"
          className="w-[50px] h-[50px] z-10"
        />
      </div>
    </div>
  );
};

export default memo(Loading);
