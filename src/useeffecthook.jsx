import { useState, useEffect } from "react";

export default function MyComponent() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setheight] = useState(window.innerHeight);

  let handleResize = () => {
    setWidth(window.innerWidth);
    setheight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("Event Listner added");

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("event listinger removed");
    };
  }, []);

  return (
    <>
      <h1>Window Width : {width} px</h1>
      <h1> Window Height : {height} px</h1>
    </>
  );
}
