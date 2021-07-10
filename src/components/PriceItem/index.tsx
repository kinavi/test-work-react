import React from "react";
import { PriceItemProps } from "./types";
import { PriceContainer } from "./style";

export const PriceItem = ({
  id,
  name,
  index,
  onClick,
  isChecked = false
}: PriceItemProps) => {
  const handleClick = () => {
    onClick(id);
  };
  return (
    <PriceContainer>
      <input
        type="radio"
        id={`price-input-id-${id}`}
        name="drone"
        value={index}
        onChange={handleClick}
        checked={isChecked}
      />
      <label htmlFor="huey">{name}</label>
    </PriceContainer>
  );
};
