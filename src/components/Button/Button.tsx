import React from "react";
import "./Button.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  onClick?: () => void;
  backgroundColor?: string;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  backgroundColor = "#000",
  fullWidth = false,
  ...props
}) => {
  return (
    <button
      className={`button ${fullWidth ? "button--full-width" : ""}`}
      onClick={onClick}
      style={{ backgroundColor }}
      {...props} // Pasa "type" y otras props al elemento <button>
    >
      {label}
    </button>
  );
};

export default Button;
