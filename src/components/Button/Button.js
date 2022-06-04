import PropTypes from "prop-types";

import React from "react";
import "../componets.css";

const Button = ({ label, backgroundColor = "royalblue", ...rest }) => {
  return (
    <button
      className="button"
      {...rest}
      style={{ backgroundColor: backgroundColor }}
    >
      {label}
    </button>
  );
};

Button.protoTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export default Button;
