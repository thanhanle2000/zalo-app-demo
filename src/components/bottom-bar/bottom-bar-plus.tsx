import { ROUTERS } from "core/routers/routers";
import React, { ReactNode, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router";

import { BottomNavigation, Icon } from "zmp-ui";

// NO BOTTOM NAVIGATION PAGES
export const NO_BOTTOM_NAVIGATION_PAGES = [
  ROUTERS?.DETAIL_PRODUCT,
  ROUTERS?.CATE,
  ROUTERS?.SEARCH,
  ROUTERS?.RESULTS_SEARCH,
];

export interface MenuItem {
  label: string;
  icon: ReactNode;
  activeIcon?: ReactNode;
}

interface Props {
  hidden?: boolean;
}
export const BottomBarsPlus = ({ hidden }: Props) => {
  // USE NAVIGATE
  const navigate = useNavigate();

  // USE LOCATION
  const location = useLocation();

  // STATE
  const [activeTab, setActiveTab] = useState<any>(location?.pathname ?? "/");

  // GÁN GIÁ TRỊ
  const originalScreenHeight = window.innerHeight;

  // USE VIRTUAL KEY BOARD VISIBLE
  const useVirtualKeyboardVisible = () => {
    // STATE
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      const detectKeyboardOpen = () =>
        setVisible(window.innerHeight + 160 < originalScreenHeight);

      window.addEventListener("resize", detectKeyboardOpen);

      return () => window.removeEventListener("resize", detectKeyboardOpen);
    }, []);

    return visible;
  };

  // CHECK
  const _check = useVirtualKeyboardVisible();

  // TABS
  const tabs: Record<string, MenuItem> = {
    [ROUTERS?.HOME]: {
      label: "Trang chủ",
      icon: <Icon icon="zi-home" />,
    },
    [ROUTERS?.CATE]: {
      label: "Danh mục",
      icon: <Icon icon="zi-more-diamond-solid" />,
    },
    [ROUTERS?.CONTACT]: {
      label: "Liên hệ",
      icon: <Icon icon="zi-chat-solid" />,
    },
    [ROUTERS?.ACCOUNT]: {
      label: "Cá nhân",
      icon: <Icon icon="zi-user" />,
    },
  };

  // NO BOTTOM NAV
  const noBottomNav = useMemo(() => {
    return NO_BOTTOM_NAVIGATION_PAGES?.includes(location?.pathname);
  }, [location]);

  useEffect(() => {
    setActiveTab(location?.pathname);
  }, [location]);

  // RETURN
  return noBottomNav || _check ? (
    <></>
  ) : (
    <BottomNavigation
      id="footer"
      activeKey={activeTab!}
      onChange={(key: any) => setActiveTab(key)}
      className={hidden ? "hidden" : "z-50"}
    >
      {Object?.keys(tabs)?.map((path: any) => (
        <BottomNavigation.Item
          key={path}
          label={tabs[path]?.label}
          icon={tabs[path]?.icon}
          activeIcon={tabs[path]?.activeIcon}
          onClick={() => navigate(path)}
        />
      ))}
    </BottomNavigation>
  );
};
