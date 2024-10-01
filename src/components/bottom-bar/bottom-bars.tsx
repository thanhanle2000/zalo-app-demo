import {
  IconApps,
  IconArchive,
  IconBranch,
  IconCommand,
  IconDice,
  IconQrcode,
} from "@arco-design/web-react/icon";
import React, { useState } from "react";

interface Menu {
  name: string;
  icon: JSX.Element;
  dis: string;
}

const BottomBar: React.FC = () => {
  // MENUS
  const Menus: Menu[] = [
    { name: "Home", icon: <IconApps />, dis: "translate-x-0" },
    { name: "Profile", icon: <IconArchive />, dis: "translate-x-16" },
    { name: "Message", icon: <IconBranch />, dis: "translate-x-32" },
    { name: "Photos", icon: <IconCommand />, dis: "translate-x-48" },
    { name: "Settings", icon: <IconDice />, dis: "translate-x-64" },
  ];

  // STATE
  const [active] = useState<number>(2);
  const [tab, setTab] = useState(1);

  return (
    <div className="bg-white max-h-[4.4rem] px-6 py-[5px]">
      <ul className="flex relative justify-between items-center">
        <span
          className={`bg-white duration-500 border-[5px] h-16 w-16 absolute -top-[30px] rounded-full flex justify-center items-center`}
          style={{
            left: `calc((100% / ${Menus.length}) * ${active} + (100% / ${
              Menus.length * 2
            }) - 32px)`,
          }}
        >
          <IconQrcode fontSize={25} />
        </span>
        {Menus.map((menu, i) => (
          <li key={i} className="w-full text-center">
            <a className="flex flex-col text-center relative">
              <span
                className={`text-xl cursor-pointer duration-500 
                ${i === active ? "text-transparent" : "text-black"}`}
              >
                {menu.icon}
              </span>
              <span className={` ${active === i ? "hidden" : "mt-[-5px]"}`}>
                {menu.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BottomBar;
