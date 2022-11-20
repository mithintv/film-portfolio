import { useState, useEffect } from "react";

const getDeviceConfig = (width = 1235) => {
  if (width < 320) {
    return "xs";
  } else if (width >= 320 && width < 720) {
    return "sm";
  } else if (width >= 720 && width < 1024) {
    return "md";
  } else if (width >= 1024 && width < 1235) {
    return "lg";
  } else if (width >= 1235) {
    return "xlg";
  }
};

const useBreakpoint = () => {
  const [brkPnt, setBrkPnt] = useState(getDeviceConfig);

  useEffect(() => {
    function calcInnerWidth() {
      setBrkPnt(getDeviceConfig(window.innerWidth));
    }
    window.addEventListener("resize", calcInnerWidth);

    return () => window.removeEventListener("resize", calcInnerWidth);
  }, []);

  return brkPnt;
};
export default useBreakpoint;
