import { FC, ReactElement } from "react";

export interface Table<T> {
  data: T[];
  metadata: Metadata;
}

type TableCellType = "text" | "number" | "badge";

export interface TableColumn {
  label: string;
  path: string;
  customComponent?: FC<{ row }>;
  type?: TableCellType;
  styles?: Record<string, string>;
}
export interface TableLayout {
  columns: TableColumn[];
}

export interface Metadata {
  pagination: Pagination;
  sort: Sort;
}

export interface Sort {
  field: string;
  order: "arc" | "desc";
}
export interface Pagination {
  firstPageUrl: string;
  firstPage: number;
  lastPageUrl: string;
  lastPage: number;
  nextPageUrl: string;
  nextPage: number;
  prevPageUrl: string;
  prevPage: number;
  currentPage: number;
  currentPageUrl: string;
  perPage: number;
  total: number;
  totalPages: number;
}
