import { useEffect, RefObject } from "react";

function useOutsideClickCheck(ref: RefObject<HTMLDivElement>, callback: () => void): void {
  useEffect(() => {

    function handleClickOutside(event: MouseEvent): void {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}

export default useOutsideClickCheck;