import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import cls from "classnames";
import Portal from "../portal";
import { useAnimation, useLockBodyScroll, useClickOutside } from "../../hooks";
import { MODAL_Z_INDEX } from "../utils/constant";
import Mask from "../mask";
import "./index.scss";

interface ModalProps {
  children?: React.ReactNode;
  visible?: boolean;
  onClose?: (...arg: any[]) => void;
  animation: string;
}

const ConfirmDialog = (props: ModalProps) => {
  const { children, visible, animation, onClose } = props;
  const modalRef = useRef(null);
  const modalContentRef = useRef(null);
  const [zIndex, setZIndex] = useState(ConfirmDialog.zIndex);
  const [display, active, set] = useAnimation(modalRef.current);

  useEffect(() => {
    if (visible) {
      ConfirmDialog.zIndex += 1;
      setZIndex(ConfirmDialog.zIndex);
    }
    set(visible);
  }, [visible, modalRef, set]);

  useClickOutside(modalContentRef, () => {
    onClose && onClose();
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

ConfirmDialog.zIndex = MODAL_Z_INDEX; // 按实例显示时自增zIndex

ConfirmDialog.propTypes = {
  children: PropTypes.node.isRequired,
  visible: PropTypes.bool.isRequired,
  animation: PropTypes.string
};

ConfirmDialog.defaultProps = {
  animation: "slide-left"
};

const confirm = () => {
  const div = document.createElement("div");
  document.body.appendChild(div);
  function render() {
    ReactDOM.render(<ConfirmDialog />, div);
  }
  render();
};

export default confirm;
