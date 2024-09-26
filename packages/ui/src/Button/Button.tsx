import PropTypes from "prop-types";
import React from "react";
import { useRouter } from "next/router";
import "./button.css";

interface Props {
  type: "plain";
  size: "large";
  state: "default";
  shape: "default";
  active: boolean;
  className: string;
  destination: string; // Prop para definir la ruta de navegación
  buttonText?: string; // Prop opcional para el texto del botón
}

export const Button = ({
  type,
  size,
  state,
  shape,
  active,
  className,
  destination,
  buttonText = "", // Valor por defecto para el texto del botón
}: Props): JSX.Element => {
  const router = useRouter();

  const handleClick = () => {
    router.push(destination); // Navega a la ruta especificada
  };

  return (
    <button className={`button ${className}`} onClick={handleClick}>
      <span className="text-wrapper">{buttonText}</span> {/* Utiliza el texto del botón */}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["plain"]),
  size: PropTypes.oneOf(["large"]),
  state: PropTypes.oneOf(["default"]),
  shape: PropTypes.oneOf(["default"]),
  active: PropTypes.bool,
  destination: PropTypes.string.isRequired, // Asegurarse de que la ruta sea un string requerido
  buttonText: PropTypes.string, // Prop opcional para el texto del botón
};
