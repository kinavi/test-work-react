import React from "react";
import { MenuItemType } from "../../redux/types";
import { Select } from "./style";

export const MenuItemsSelect = ({
  value,
  options,
  onSelect
}: {
  value: number;
  options: MenuItemType[];
  onSelect(index: number): void;
}) => {
  // const {} = props; event.target.value
  const handleChange = (event) => {
    console.log(event.target.value);
    onSelect(event.target.value);
  };
  return (
    <Select onChange={handleChange} value={value}>
      {options.map((item) => (
        <option key={`menu_options_${item.id}`} value={item.id}>
          {item.name}
        </option>
      ))}
    </Select>
  );
};
