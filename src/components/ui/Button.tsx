import * as React from "react";
import clsx from "clsx";

const buttonVariants = {
  default:
    "bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:opacity-90 transition-opacity",
  outline:
    "border border-blue-600 text-blue-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600 hover:text-white transition-colors",
};

const buttonSizes = {
  sm: "px-2 py-1 text-sm",
  md: "px-4 py-2 text-md",
  lg: "px-6 py-3 text-lg",
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "default" | "outline";
  size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, onClick = () => {}, className, variant = "default", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        onClick={onClick}
        className={clsx(
          "flex justify-center items-center rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2",
          buttonVariants[variant],
          buttonSizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
