import React from "react";
import "./Button.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  onClick?: () => void;
  backgroundColor?: string;
  fullWidth?: boolean;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  backgroundColor = "#000",
  fullWidth = false,
  isLoading = false,
  ...props
}) => {
  return (
    <button
      className={`button ${fullWidth ? "button--full-width" : ""}`}
      onClick={onClick}
      style={{
        backgroundColor: isLoading ? "#ccc" : backgroundColor,
        cursor: isLoading ? "not-allowed" : "pointer"
      }}
      {...props}
      disabled={isLoading}
    >
      {label}
    </button>
  );
};

export default Button;
