import React from "react";
import { HeaderItemType } from "../../redux/types";
import { HeaderItemContainer } from "./style";

export const HeaderItem = ({
  name,
  id,
  index,
  onClick,
  isChecked = false
}: HeaderItemType & {
  index: number;
  onClick(index: number): void;
  isChecked: boolean;
}) => {
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
        onClick={handleClick}
      />
      <label htmlFor={`header-item-${index}`}>{name}</label>
    </HeaderItemContainer>
  );
};
