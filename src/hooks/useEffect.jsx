import { useEffect } from "react";

export const useBgLightBlue = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "grey";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
};
