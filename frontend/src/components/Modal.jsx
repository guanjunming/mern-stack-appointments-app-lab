import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;
    modal.showModal();

    return () => {
      modal.close();
    };
  }, []);

  return createPortal(
    <dialog
      className="backdrop:bg-stone-900/50 p-6 rounded-md shadow-md"
      ref={dialog}
    >
      {children}
    </dialog>,
    document.getElementById("modal-root")
  );
};

export default Modal;
