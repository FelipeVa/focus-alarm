import PropTypes from "prop-types";
import React, { useState } from "react";
import "./checkbox.css";

interface Props {
  status: "indeterminate" | "inactive";
  state: "hover";
  size: "default";
  className: any;
  text: string;
}

export const Checkbox = ({ status, state, size, className, text = "Default" }: Props): JSX.Element => {
  const [checked, setChecked] = useState(status === "indeterminate" ? false : true); // Estado para manejar si el checkbox está marcado o no
  const [indeterminate, setIndeterminate] = useState(status === "indeterminate"); // Estado para manejar si es indeterminado

  const handleChange = () => {
    if (indeterminate) {
      setIndeterminate(false); // Si era indeterminado, lo cambiamos a "no indeterminado"
      setChecked(true); // Al hacer clic, se marcará el checkbox
    } else {
      setChecked(!checked); // Cambia entre marcado y no marcado
    }
  };

  return (
    <div className={`checkbox ${className}`}>
      <div className="checkbox-wrapper">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          className={`checkbox-input ${state} ${size}`}
          ref={(input) => {
            if (input) {
              input.indeterminate = indeterminate; // Maneja el estado indeterminado
            }
          }}
        />
        <label className="checkbox-label">{text}</label>
      </div>
    </div>
  );
};

Checkbox.propTypes = {
  status: PropTypes.oneOf(["indeterminate", "inactive"]),
  state: PropTypes.oneOf(["hover"]),
  size: PropTypes.oneOf(["default"]),
  text: PropTypes.string,
};
