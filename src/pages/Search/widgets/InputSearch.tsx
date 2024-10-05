import { Input } from "@arco-design/web-react";
import { IconSearch } from "@arco-design/web-react/icon";
import { setSearchs } from "core/hook/recoil/recoil";
import { ROUTERS } from "core/routers/routers";
import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

interface Props {
  search: string;
  setSearch: (value: string) => void;
}
const InputSearch = ({ search, setSearch }: Props) => {
  // NAVIGATE
  const navigate = useNavigate();

  // RECOIL
  const [_, valueSearch] = useRecoilState(setSearchs);

  // ON NEXT PAGE
  const onNextPage = (value: any) => {
    setSearch(value);
    valueSearch(value);
    navigate(ROUTERS?.RESULTS_SEARCH);
  };

  return (
    <Input
      className="cus-input h-[40px]"
      prefix={<IconSearch />}
      placeholder="Bạn cần tìm gì hôm nay?"
      allowClear={true}
      defaultValue={search}
      onClear={() => setSearch("")}
      onPressEnter={(e) => onNextPage((e.target as HTMLInputElement).value)}
    />
  );
};

export default memo(InputSearch);
