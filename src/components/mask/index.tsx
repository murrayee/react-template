import React from "react";
import PropTypes from "prop-types";
import { MASK_Z_INDEX } from "../utils/constant";
import "./index.scss";

interface MaskProps {
  opacity: number;
  zIndex: number;
}

const Mask = (props: MaskProps) => {
  const { zIndex, opacity } = props;
  return <div className="ui-mask" style={{ zIndex, opacity }} />;
};

Mask.propTypes = {
  opcity: PropTypes.number,
  zIndex: PropTypes.number
};

Mask.defaultProps = {
  opacity: 0.7,
  zIndex: MASK_Z_INDEX
};

export default Mask;
