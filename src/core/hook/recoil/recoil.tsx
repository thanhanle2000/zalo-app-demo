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
