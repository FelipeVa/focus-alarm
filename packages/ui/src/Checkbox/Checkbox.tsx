import PropTypes from "prop-types";
import React from "react";
import "./checkbox.css";

interface Props {
  status: "indeterminate" | "inactive";
  state: "hover";
  size: "default";
  className: any;
  text: string;
}

export const Checkbox = ({ status, state, size, className, text = "Default" }: Props): JSX.Element => {
  return (
    <div className={`checkbox ${className}`}>
      <div className="checkbox-wrapper">
        <div className={`rectangle ${status}`} />
        {status === "indeterminate" && <img className="feather-icon" alt="Feather icon" />}
      </div>
      <div className="text-wrapper">{text}</div>
    </div>
  );
};

Checkbox.propTypes = {
  status: PropTypes.oneOf(["indeterminate", "inactive"]),
  state: PropTypes.oneOf(["hover"]),
  size: PropTypes.oneOf(["default"]),
  text: PropTypes.string,
};
