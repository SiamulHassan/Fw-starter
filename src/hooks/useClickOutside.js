import { useEffect, useRef } from "react";

export function useClickOutside(handler) {
  const modalRef = useRef();
  useEffect(() => {
    const handleModalClose = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        handler();
      }
    };
    document.addEventListener("click", handleModalClose, true);
    return () => document.removeEventListener("click", handleModalClose, true);
  }, [handler]);
  return modalRef;
}
