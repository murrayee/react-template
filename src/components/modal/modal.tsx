import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import cls from "classnames";
import Portal from "../portal";
import { useAnimation, useLockBodyScroll, useClickOutside } from "../../hooks";
import { MODAL_Z_INDEX } from "../utils/constant";
import Mask from "../mask";
import "./index.scss";

export type ModalFunc = (...arg: any[]) => void;

interface ModalProps {
  children: React.ReactNode;
  visible: boolean;
  onClose: ModalFunc;
  animation: string;
}

const Modal = (props: ModalProps) => {
  const { children, visible, animation, onClose } = props;
  const modalRef = useRef(null);
  const modalContentRef = useRef(null);
  const [zIndex, setZIndex] = useState(Modal.zIndex);
  const [display, active, set] = useAnimation(modalRef.current);

  useEffect(() => {
    if (visible) {
      Modal.zIndex += 1;
      setZIndex(Modal.zIndex);
    }
    set(visible);
  }, [visible, modalRef, set]);

  useClickOutside(modalContentRef, () => {
    onClose();
  });

  useLockBodyScroll(visible);

  const classNames = cls({
    "ui-modal": true,
    hide: !display,
    [animation]: !active
  });

  return (
    <Portal>
      <div ref={modalRef} className={classNames} style={{ zIndex }}>
        <Mask />
        <div ref={modalContentRef} className="modal-content">
          {children}
        </div>
      </div>
    </Portal>
  );
};

Modal.zIndex = MODAL_Z_INDEX; // 按实例显示时自增zIndex

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  visible: PropTypes.bool.isRequired,
  animation: PropTypes.string
};

Modal.defaultProps = {
  animation: "slide-left"
};

Modal.confirm = () => {};

export default Modal;
