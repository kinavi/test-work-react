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
  const handleChange = (event) => {
    onSelect(event.target.value);
  };
  return (
    <Select onChange={handleChange} value={value || 0}>
      <option>Выберите тип</option>
      {options.map((item) => (
        <option key={`menu_options_${item.id}`} value={item.id}>
          {item.name}
        </option>
      ))}
    </Select>
  );
};
