import { DataItemType } from "../../redux/types";

export type PriceItemProps = DataItemType & {
  index: number;
  onClick(index: number): void;
  isChecked: boolean;
};
