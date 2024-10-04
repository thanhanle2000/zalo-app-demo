import React, { useEffect, useState } from "react";

const ScrollToTopButton: React.FC = () => {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(
    null
  );
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Log current scroll position
    console.log(
      `currentScrollY: ${currentScrollY}, lastScrollY: ${lastScrollY}`
    );

    if (currentScrollY > lastScrollY) {
      setScrollDirection("down");
    } else if (currentScrollY < lastScrollY) {
      setScrollDirection("up");
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Chỉ chạy một lần khi mount

  useEffect(() => {
    console.log(`scrollDirection: ${scrollDirection}`);
  }, [scrollDirection]);

  return (
    <div style={{ height: "200vh", padding: "20px" }}>
      {" "}
      {/* Đảm bảo có chiều cao để cuộn */}
      <h1>
        Scroll Direction: {scrollDirection !== null ? scrollDirection : "N/A"}
      </h1>
      <p>Scroll down or up to see the direction.</p>
    </div>
  );
};

export default ScrollToTopButton;
