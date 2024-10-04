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
