import React from "react";


export const useClickOutside = (ref: React.RefObject<HTMLElement>, callback: () => void) => {
  const handleClick = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
	callback();
    }
  };
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      handleClick(event);
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [callback]);
};
