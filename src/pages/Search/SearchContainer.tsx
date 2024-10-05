import Content from "components/layout/Content";
import React, { memo, useEffect, useState } from "react";
import { getDataToLocal, setDataToLocal } from "ultils/helper";
import InputSearch from "./widgets/InputSearch";
import SearchHistory from "./widgets/SearchHistory";

const SearchContainer = () => {
  // STATE
  const [search, setSearch] = useState<string>("");
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  useEffect(() => {
    const data = getDataToLocal("searchHistory");
    if (data) setSearchHistory(data);
  }, []);

  // UPDATE SEARCH HISTORY
  const updateSearchHistory = (newSearch: string) => {
    if (newSearch.trim() === "") return;

    setSearch(newSearch);

    if (!searchHistory.includes(newSearch)) {
      const updatedHistory = [...searchHistory, newSearch];
      setSearchHistory(updatedHistory);
      setDataToLocal("searchHistory", updatedHistory);
    }
  };

  return (
    <Content centerElement="Tìm kiếm">
      <InputSearch search={search} setSearch={updateSearchHistory} />
      <SearchHistory
        searchHistory={searchHistory}
        setSearchHistory={setSearchHistory}
      />
    </Content>
  );
};

export default memo(SearchContainer);
