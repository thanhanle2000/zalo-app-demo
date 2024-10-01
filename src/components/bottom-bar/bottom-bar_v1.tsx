import { IconArchive, IconHome, IconUser } from "@arco-design/web-react/icon";
import { COLORS } from "core/constants/constants";
import { ROUTERS } from "core/routers/routers";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Menu {
  id: number;
  name: string;
  icon: JSX.Element;
  className: string;
  url: string;
}

const BottomBar_V1: React.FC = () => {
  // NAVIGATE
  const navigate = useNavigate();

  // MENUS
  const Menus: Menu[] = [
    {
      id: 1,
      name: "Giỏ hàng",
      icon: <IconArchive fontSize={25} />,
      url: ROUTERS?.CART,
      className: "translate-x-0",
    },
    {
      id: 2,
      name: "Trang chủ",
      icon: <IconHome fontSize={25} />,
      url: ROUTERS?.HOME,
      className: "translate-x-16",
    },
    {
      id: 3,
      name: "Cá nhân",
      icon: <IconUser fontSize={25} />,
      url: ROUTERS?.ACCOUNT,
      className: "translate-x-32",
    },
  ];

  // STATE
  const [active, setActive] = useState<number>(1);

  // ON PAGE
  const onPage = (item: Menu, index: number) => {
    setActive(index);
    navigate(item?.url);
  };

  return (
    <div
      className="max-h-[4.4rem] px-6 py-[5px] rounded-t-xl"
      style={{
        backgroundColor: COLORS?.BG,
      }}
    >
      <ul className="flex relative justify-between items-center">
        <span
          className="bg-white duration-500 border-[4px] h-16 w-16 absolute -top-[34px] rounded-full flex justify-center items-center"
          style={{
            left: `calc((100% / ${Menus.length}) * ${active} + (100% / ${Menus.length * 2
              }) - 32px)`,
          }}
        >
          <span className="text-orange-500 text-2xl">{Menus[active].icon}</span>
        </span>
        {Menus.map((menu, i) => (
          <li
            key={i}
            className="w-full text-center flex flex-col justify-center h-[40px]"
          >
            <a
              className="flex flex-col text-center relative"
              onClick={() => onPage(menu, i)}
            >
              <span
                className={`text-xl cursor-pointer duration-200 ${i === active ? "text-transparent" : "text-white"
                  }`}
              >
                {menu?.icon}
              </span>
              {/* <span
                className={` ${
                  active === i ? "hidden" : "text-white"
                } mt-[-5px]`}
              >
                {menu?.name}
              </span> */}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BottomBar_V1;
