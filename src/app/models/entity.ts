import { MRT_ColumnDef } from "material-react-table";

// OLD: Index(['id', 'name', 'type', 'description', 'human_readable_id',
//   'graph_embedding', 'text_unit_ids', 'description_embedding'],
//  dtype='object')
// NEW: Index(['id', 'human_readable_id', 'title', 'type', 'description',
//   'text_unit_ids'],
//  dtype='object')
export interface Entity {
    id: string;
    human_readable_id: number;
    name: string;
    title: string;
    type: string;
    description: string;
    text_unit_ids: string[];
}

export const entityColumns: MRT_ColumnDef<Entity>[] = [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "human_readable_id",
      header: "Human Readable ID",
    },
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "title",
      header: "Title",
    },
    {
      accessorKey: "type",
      header: "Type",
    },
    {
      accessorKey: "description",
      header: "Description",
    },
    {
      accessorKey: "human_readable_id",
      header: "Human Readable ID",
    },
    {
      accessorKey: "text_unit_ids",
      header: "Text Unit IDs",
      Cell: ({ renderedCellValue }) =>
        Array.isArray(renderedCellValue)
          ? JSON.stringify(renderedCellValue, null, 2)
          : renderedCellValue,
    }
  ];