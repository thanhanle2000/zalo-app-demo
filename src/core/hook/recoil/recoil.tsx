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
