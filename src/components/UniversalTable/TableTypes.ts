import { MouseEventHandler } from "react";

export interface TablePropsType {
  bodyItems: any[],
}

export interface RowType {
  id?: string,
  onClick: MouseEventHandler<HTMLTableRowElement>,
  items: any[],
}

export interface CellType {
  id?: string,
  content: string | JSX.Element | Function,
}