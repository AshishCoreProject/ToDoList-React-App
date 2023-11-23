import { useEffect, useState } from "react";

const useOutsideClick = (ref, logicValue) => {
  const [outsideClick, setOutsideClick] = useState(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOutsideClick(true);
      } else {
        setOutsideClick(false);
      }

      setOutsideClick(null);
    };

    document.addEventListener("mousedown", handleClickOutside);
    console.log("click detected");
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, logicValue]);

  return outsideClick;
};
export default useOutsideClick;
