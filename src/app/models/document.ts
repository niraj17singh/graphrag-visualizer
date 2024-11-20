import { MRT_ColumnDef } from "material-react-table";

// OLD(['id', 'text_unit_ids', 'raw_content', 'title'], dtype='object')
// NEW: Index(['id', 'human_readable_id', 'title', 'text', 'text_unit_ids'], dtype='object')

export interface Document {
    id: string;
    human_readable_id: number;
    title: string;
    text: string;
    text_unit_ids: string[];
}

export const documentColumns: MRT_ColumnDef<Document>[] = [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "human_readable_id",
      header: "Human Readable ID",
    },
    {
      accessorKey: "title",
      header: "Title",
    },
    {
      accessorKey: "text",
      header: "Text",
    },
    {
      accessorKey: "text_unit_ids",
      header: "Text Unit IDs",
      Cell: ({ renderedCellValue }) =>
        Array.isArray(renderedCellValue)
          ? JSON.stringify(renderedCellValue, null, 2)
          : renderedCellValue,
    },
  ];