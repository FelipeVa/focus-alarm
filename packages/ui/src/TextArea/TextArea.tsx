import PropTypes from "prop-types";
import React from "react";
import "./text-area.css";

interface Props {
  status: "default";
  size: "small";
  state: "default";
  className: any;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
}

export const TextArea = ({ status, size, state, className, value="", onChange, placeholder }: Props): JSX.Element => {
  return (
    <div className={`text-area ${className}`}>
      <textarea
        className="textarea-input"
        //value={value}
        onChange={onChange}
        placeholder={placeholder || ""}
      />
    </div>
  );
};

TextArea.propTypes = {
  status: PropTypes.oneOf(["default"]),
  size: PropTypes.oneOf(["small"]),
  state: PropTypes.oneOf(["default"]),
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};
