import PropTypes from "prop-types";
import React, { useState } from "react";
import "./input.css";

interface Props {
  status: "default";
  size: "large";
  state: "default";
  className: any;
  text?: string; // El texto es opcional y tendrá un valor por defecto
}

export const Input = ({ status, size, state, className, text = "" }: Props): JSX.Element => {
  const [value, setValue] = useState(text); // Estado local para manejar el texto del input

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value); // Actualiza el estado con el valor ingresado
  };

  return (
    <div className={`input ${className}`}>
      <input 
        type="text" 
        value={value} 
        onChange={handleChange} 
        className={`input-field ${status} ${size} ${state}`} 
        placeholder="" 
      />
    </div>
  );
};

Input.propTypes = {
  status: PropTypes.oneOf(["default"]),
  size: PropTypes.oneOf(["large"]),
  state: PropTypes.oneOf(["default"]),
  text: PropTypes.string,
};
