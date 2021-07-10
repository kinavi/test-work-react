import { HeaderItemType } from "../../redux/types";

export type HeaderItemProps = HeaderItemType & {
  index: number;
  onClick(index: number): void;
  isChecked: boolean;
};
