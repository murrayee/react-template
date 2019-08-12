import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import cls from "classnames";
import Portal from "../portal";
import { useAnimation, useLockBodyScroll, useClickOutside } from "../../hooks";
import { MODAL_Z_INDEX } from "../utils/constant";
import Mask from "../mask";
import "./index.scss";

interface ModalProps {
  children: React.ReactNode;
  visible: boolean;
  animation: string;
}

const Modal = (props: ModalProps) => {
  const { children, visible, animation } = props;
  const modalRef = useRef(null);
  const modalContentRef = useRef(null);
  const [zIndex, setZIndex] = useState(Modal.zIndex);
  const [modalVisible, setModalVisible] = useState(visible);
  const [display, active, set] = useAnimation(modalRef.current);

  useEffect(() => {
    setModalVisible(visible);
  }, [visible]);

  useEffect(() => {
    if (modalVisible) {
      Modal.zIndex += 1;
      setZIndex(Modal.zIndex);
    }
    set(modalVisible);
  }, [modalVisible, modalRef, set]);

  useClickOutside(modalContentRef, () => {
    setModalVisible(false);
  });

  useLockBodyScroll(modalVisible);

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

export default Modal;
