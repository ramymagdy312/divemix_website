import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

type props = {
  children: ReactNode;
  onClose: () => void;
};

const Modal = (props: props) => {
  const { onClose, children } = props;

  return createPortal(
    <div className="modalBackground" onClick={() => onClose()}>
      <div className="modalBody" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.getElementById("modalContainer")!
  );
};
export default Modal;
