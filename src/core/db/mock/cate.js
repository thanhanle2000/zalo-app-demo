export const CATES = {
  KITCHEN: "kitchen",
  ELECTRIC: "elictric",
  CLOTHES: "clothes",
  COSMETICS: "cosmetics",
};

const cateData = {
  data: [
    {
      id: 1,
      type: CATES?.KITCHEN,
      name: "Đồ bếp",
    },
    {
      id: 2,
      type: CATES?.CLOTHES,
      name: "Thời trang",
    },
    {
      id: 3,
      type: CATES?.ELECTRIC,
      name: "Công nghệ",
    },
    {
      id: 4,
      type: CATES?.COSMETICS,
      name: "Làm đẹp",
    },
  ],
};

export default cateData;
