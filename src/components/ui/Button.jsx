import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

// Variantes predefinidas para el botón
const buttonVariants = {
  default: "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:opacity-90 transition-opacity",
  outline:
    "border border-purple-600 text-purple-600 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white transition-colors",
};

const Button = ({
  children,
  onClick = () => {},
  className,
  variant = "default",
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "flex justify-center items-center px-4 py-2 text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2",
        buttonVariants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  variant: PropTypes.oneOf(["default", "outline"]),
};

Button.defaultProps = {
  onClick: () => {},
  className: "",
  variant: "default",
};

export default Button;