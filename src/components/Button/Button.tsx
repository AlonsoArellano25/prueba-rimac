import React from "react";
import "./Button.scss";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  backgroundColor?: string;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  backgroundColor = "#000",
  fullWidth = false
}) => {
  return (
    <button
      className={`button ${fullWidth ? "button--full-width" : ""}`}
      onClick={onClick}
      style={{ backgroundColor }}
    >
      {label}
    </button>
  );
};

export default Button;
