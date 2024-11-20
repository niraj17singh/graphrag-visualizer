import { MRT_ColumnDef } from "material-react-table";

// OLD: Index(['id', 'title', 'level', 'relationship_ids', 'text_unit_ids'], dtype='object')
// NEW: Index(['id', 'human_readable_id', 'community', 'level', 'title', 'entity_ids',
//   'relationship_ids', 'text_unit_ids', 'period', 'size'],
//  dtype='object')


export interface Community {
    id: number;
    human_readable_id: number;
    community: number;
    level: number;
    title: string;
    entity_ids: string[];
    relationship_ids: string[];
    text_unit_ids: string[];
    period: string;
    size: number;
}

export const communityColumns: MRT_ColumnDef<Community>[] = [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "human_readable_id",
      header: "Human Readable ID",
    },
    {
      accessorKey: "community",
      header: "Community",
    },
    {
      accessorKey: "level",
      header: "Level",
    },
    {
      accessorKey: "title",
      header: "Title",
    },

    {
      accessorKey: "entity_ids",
      header: "Entity IDs",
      Cell: ({ renderedCellValue }) =>
        Array.isArray(renderedCellValue)
          ? JSON.stringify(renderedCellValue, null, 2)
          : renderedCellValue,
    },
    {
      accessorKey: "relationship_ids",
      header: "Relationship IDs",
      Cell: ({ renderedCellValue }) =>
        Array.isArray(renderedCellValue)
          ? JSON.stringify(renderedCellValue, null, 2)
          : renderedCellValue,
    },
    {
      accessorKey: "text_unit_ids",
      header: "Text Unit IDs",
      Cell: ({ renderedCellValue }) =>
        Array.isArray(renderedCellValue)
          ? JSON.stringify(renderedCellValue, null, 2)
          : renderedCellValue,
    },
    {
      accessorKey: "period",
      header: "Period",
    },
    {
      accessorKey: "size",
      header: "Size",
    },
  ];