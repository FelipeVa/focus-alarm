import PropTypes from "prop-types";
import React from "react";
import "./heading.css";

interface Props {
  heading: "h2";
  className: any;
  text: string; // Nueva prop para definir el texto que muestra el heading
}

export const Heading = ({ heading, className, text }: Props): JSX.Element => {
  return (
    <h2 className={`heading ${className}`}>
      {text}
    </h2>
  );
};

Heading.propTypes = {
  heading: PropTypes.oneOf(["h2"]),
  text: PropTypes.string.isRequired, // Asegurarse que el texto sea requerido
};
