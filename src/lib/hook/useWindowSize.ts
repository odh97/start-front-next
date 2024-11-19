import { useState, useEffect } from "react";
import useDebounce from "@/lib/hook/useDebounce";

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [data, setData] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  function handleResize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useDebounce(() => {
    setData(windowSize);
  }, 200);

  return data;
}
