import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import cls from "classnames";
import Portal from "../portal";
import useAnimation from "../../hooks/useAnimation";
import "./index.scss";

interface ModalProps {
  children: React.ReactNode;
  visible: boolean;
  animation: string;
}

const Modal = (props: ModalProps) => {
  const { children, visible, animation } = props;
  const ref = useRef(null);
  const [zIndex, setZIndex] = useState(Modal.zIndex);
  const [display, active, set] = useAnimation(ref.current);

  useEffect(() => {
    if (visible) {
      Modal.zIndex += 1;
      setZIndex(Modal.zIndex);
    }
    set(visible);
  }, [visible, ref, set]);

  const cname = cls({
    "ui-modal": true,
    hide: !display,
    [animation]: !active
  });

  return (
    <Portal>
      <div ref={ref} className={cname} style={{ zIndex }}>
        {children}
      </div>
    </Portal>
  );
};

Modal.zIndex = 10000; // 按实例显示时自增zIndex

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  visible: PropTypes.bool.isRequired,
  animation: PropTypes.string
};

Modal.defaultProps = {
  animation: "slide-left"
};

export default Modal;
