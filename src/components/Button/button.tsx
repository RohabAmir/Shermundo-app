import React from "react";
import styles from "./button.module.scss";

interface ButtonProps {
  name: string;
  padding?: string;
  onClickHandler?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  isSubmit?: boolean;
  isLoading?: boolean;
  customDisabled?: boolean;
  borderRadius?: string;
}

const Button: React.FC<ButtonProps> = ({
  name,
  padding,
  onClickHandler,
  isLoading,
  isSubmit,
  customDisabled,
  borderRadius

 
}) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (onClickHandler) {
      onClickHandler(event);
    }
  };
  return (
    <button
      className={styles.button}
      style={{ padding, borderRadius}}
      onClick={handleClick}
    //   htmlType={isSubmit ? "submit" : "button"}
    //   loading={isLoading}
      disabled={isLoading || customDisabled}
    >
      {name}
    </button>
  );
};

export default Button;
