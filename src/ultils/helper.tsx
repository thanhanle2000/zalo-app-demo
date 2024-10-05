import { toast } from "react-toastify";

// FORMAT CURRENCY
export const formatCurrency = (value: number): string =>
  new Intl.NumberFormat("vi-VN").format(value) + "đ";

interface Condition {
  [key: string]: any;
}

// WHERE CONDITIONS
export const whereConditions = (lst: any[], conditions: Condition[]) => {
  if (!lst?.length || !conditions?.length) return [];

  return lst?.filter((product: any) =>
    conditions?.every((condition) =>
      Object.keys(condition).every((key) => {
        if (key === "cate" && condition[key] === "") return true;
        return product?.[key] === condition[key];
      })
    )
  );
};

// CHECK UNDEFINED
export const isObUndefined = (value: any) =>
  value === undefined || value === null ? true : false;

// SAVE DATA TO LOCAL
export const setDataToLocal = (key: string, value: any) => {
  try {
    if (!isObUndefined(value))
      localStorage?.setItem(key, JSON?.stringify(value));
  } catch (error) {
    toastError(`Lỗi: ${error}`);
  }
};

// GET DATA TO LOCAL
export const getDataToLocal = (key: string) => {
  try {
    const serializedValue = localStorage?.getItem(key);
    if (serializedValue === null) {
      return null;
    }
    return JSON?.parse(serializedValue);
  } catch (error) {
    toastError(`Lỗi: ${error}`);
    return null;
  }
};

// CLEAR DATA FROM LOCAL
export const clearDataFromLocal = (key: string) => {
  try {
    localStorage?.removeItem(key);
  } catch (error) {
    toastError(`Lỗi: ${error}`);
  }
};

// TOAST SUCCESS
export const toastSuccess = (text: string | any) => toast.success(text);

// TOAST ERROR
export const toastError = (text: string | any) => toast.error(text);

// TOAST WARNING
export const toastWarning = (text: string | any) => toast.warning(text);
