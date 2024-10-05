import { Divider, Popconfirm } from "@arco-design/web-react";
import { IconCloseCircle } from "@arco-design/web-react/icon";
import { setSearchs } from "core/hook/recoil/recoil";
import { ROUTERS } from "core/routers/routers";
import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { clearDataFromLocal, setDataToLocal } from "ultils/helper";

interface Props {
  searchHistory: string[];
  setSearchHistory: (history: string[]) => void;
}

const SearchHistory = ({ searchHistory, setSearchHistory }: Props) => {
  // NAVIGATE
  const navigate = useNavigate();

  // RECOIL
  const [_, valueSearch] = useRecoilState(setSearchs);

  // HANDLE REMOVE ITEM
  const handleRemoveItem = (index: number) => {
    const updatedHistory = searchHistory.filter((_, i) => i !== index);
    setSearchHistory(updatedHistory);
    setDataToLocal("searchHistory", updatedHistory);
  };

  // ON NEXT PAGE
  const onNextPage = (value: any) => {
    valueSearch(value);
    navigate(ROUTERS?.RESULTS_SEARCH);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between mt-[20px]">
        <span className="text-[16px] font-semibold">Lịch sử</span>
        <Popconfirm
          focusLock
          title="Xác nhận"
          content="Bạn có muốn xóa tất cả tìm kiếm?"
          okText="Xác nhận"
          cancelText="Đóng"
          position="lt"
          onOk={() => {
            clearDataFromLocal("searchHistory");
            setSearchHistory([]);
          }}
        >
          <span className="text-red-600 cursor-pointer">Xóa tất cả</span>
        </Popconfirm>
      </div>
      <Divider className="mb-[5px]" />
      {searchHistory?.map((item, index) => (
        <div key={index} className="my-[10px] flex flex-row justify-between">
          <span
            className="text-[16px] font-medium"
            onClick={() => onNextPage(item)}
          >
            {item}
          </span>
          <IconCloseCircle
            className="text-red-600 cursor-pointer"
            fontSize={18}
            onClick={() => handleRemoveItem(index)}
          />
        </div>
      ))}
    </div>
  );
};

export default memo(SearchHistory);
