import React from "react";
export const useClickOutside = (ref, callback) => {
    const handleClick = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            callback();
        }
    };
    React.useEffect(() => {
        const handleClickOutside = (event) => {
            handleClick(event);
        };
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [callback]);
};
