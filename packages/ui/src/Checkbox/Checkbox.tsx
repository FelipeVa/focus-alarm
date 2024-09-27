import PropTypes from "prop-types";
import React, { useState } from "react";
import "./checkbox.css";

interface Props {
  status: "indeterminate" | "inactive";
  state: "hover";
  className: any;
  text: string;
}

export const Checkbox = ({ status, state, className, text = "Default" }: Props): JSX.Element => {
  const [checked, setChecked] = useState(status !== "indeterminate"); // Si es indeterminado, inicia desmarcado
  const [indeterminate, setIndeterminate] = useState(status === "indeterminate"); // Si el estado es "indeterminate"

  const handleChange = () => {
    if (indeterminate) {
      setIndeterminate(false); // Al hacer clic, quita el estado indeterminado
      setChecked(true); // Y marca el checkbox
    } else {
      setChecked(!checked); // Alterna el estado marcado/desmarcado
    }
  };

  return (
    <div className={`checkbox ${className}`}>
      <div className="checkbox-wrapper">
        <input
          type="checkbox"
          checked={checked} // Define si está marcado o no
          onChange={handleChange} // Maneja el cambio de estado
          className={`checkbox-input ${state}`}
          ref={(input) => {
            if (input) {
              input.indeterminate = indeterminate; // Asigna el estado indeterminado
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
  text: PropTypes.string,
  className: PropTypes.any,
};

