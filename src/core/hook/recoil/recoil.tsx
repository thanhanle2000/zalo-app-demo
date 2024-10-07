import { atom, selector } from "recoil";

/* ----------- PRODUCT ----------- */
export const setProduct = atom<string>({
  key: "setProduct",
  default: "",
});

export const getProduct = selector({
  key: "getProduct",
  get: ({ get }) => {
    return get(setProduct);
  },
});
/* ----------- PRODUCT ----------- */

/* ----------- SEARCH ----------- */
export const setSearchs = atom<string>({
  key: "setSearchs",
  default: "",
});

export const getSearchs = selector({
  key: "getSearchs",
  get: ({ get }) => {
    return get(setSearchs);
  },
});
/* ----------- SEARCH ----------- */

/* ----------- CATE ----------- */
export const setCate = atom<string>({
  key: "setCate",
  default: "",
});

export const getCate = selector({
  key: "getCate",
  get: ({ get }) => {
    return get(setCate);
  },
});
/* ----------- CATE ----------- */

/* ----------- QUANTITY ----------- */
export const setIsQuantity = atom({ key: "setIsQuantity", default: false });

export const getIsQuantity = selector({
  key: "getIsQuantity",
  get: ({ get }) => get(setIsQuantity),
});
/* ----------- QUANTITY ----------- */
