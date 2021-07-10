import React from "react";
import { HeaderItemContainer } from "./style";
import { HeaderItemProps } from "./types";

export const HeaderItem = ({
  name,
  id,
  index,
  onClick,
  isChecked = false
}: HeaderItemProps) => {
  const handleClick = () => {
    onClick(id);
  };

  return (
    <HeaderItemContainer>
      <input
        id={`header-item-${index}`}
        name="header-item"
        type="radio"
        value={index}
        checked={isChecked}
        onChange={handleClick}
      />
      <label htmlFor={`header-item-${index}`}>{name}</label>
    </HeaderItemContainer>
  );
};
