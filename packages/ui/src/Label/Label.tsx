import PropTypes from "prop-types";
import React from "react";
import "./label.css";

interface Props {
  size: "label-large";
  className: any;
  text: string;
}

export const Label = ({ size, className, text = "Correo" }: Props): JSX.Element => {
  return (
    <div className={`label ${className}`}>
      <div className="text-wrapper-2">{text}</div>
    </div>
  );
};

Label.propTypes = {
  size: PropTypes.oneOf(["label-large"]),
  text: PropTypes.string,
};
