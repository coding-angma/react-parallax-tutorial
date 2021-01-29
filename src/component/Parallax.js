import { useEffect, useState } from "react";
import item1 from "../images/item1.webp";
import item2 from "../images/item2.png";

export default function Parallax() {
  const [position, setPosition] = useState(0);
  function onScroll() {
    setPosition(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="wrapper">
      <div
        className="bg bg1"
        style={{
          backgroundPositionY: position / 2,
        }}
      >
        <div>Welcome</div>
      </div>
      <div
        className="bg bg2"
        style={{
          backgroundPositionY: position / -3,
        }}
      >
        <div>Happy New Year</div>
      </div>
      <p
        className="desc"
        style={{
          transform: `translateX(${-position}px)`,
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p
        className="desc2"
        style={{
          transform: `translateX(${position}px)`,
        }}
      >
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p
        className="desc3"
        style={{
          opacity: (position - 700) / 50,
        }}
      >
        Duis aute irure dolor
      </p>
      <p
        className="desc3"
        style={{
          opacity: (position - 830) / 50,
        }}
      >
        Lorem ipsum dolor sit amet
      </p>
      <p
        className="desc3"
        style={{
          opacity: (position - 960) / 50,
        }}
      >
        Excepteur sint occaecat
      </p>
      <p
        className="desc3"
        style={{
          opacity: (position - 1090) / 50,
        }}
      >
        sunt in culpa qui officia deserunt
      </p>
      <img
        src={item1}
        className="item"
        alt=""
        style={{
          transform: `translateY(${position / 2}px)`,
        }}
      />
      <img
        src={item2}
        className="item item_snow"
        alt=""
        style={{
          transform: `translateY(${position / 4}px)`,
        }}
      />
    </div>
  );
}
