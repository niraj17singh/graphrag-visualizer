import { MRT_ColumnDef } from "material-react-table";

// OLD: Index(['id', 'text', 'n_tokens', 'document_ids', 'entity_ids',
//   'relationship_ids'],
// NEW: Index(['id', 'human_readable_id', 'text', 'n_tokens', 'document_ids',
//   'entity_ids', 'relationship_ids', 'covariate_ids'],
//  dtype='object')

export interface TextUnit {
    id: string;
    human_readable_id: number;
    text: string;
    n_tokens: number;
    document_ids: string[];
    entity_ids: string[];
    relationship_ids: string[];    
    covariate_ids: string[];
}

export const textUnitColumns: MRT_ColumnDef<TextUnit>[] = [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "human_readable_id",
      header: "Human Readable ID",
    },
    {
      accessorKey: "text",
      header: "Text",
    },
    {
      accessorKey: "n_tokens",
      header: "Number of Tokens",
    },
    {
      accessorKey: "document_ids",
      header: "Document IDs",
      Cell: ({ renderedCellValue }) =>
        Array.isArray(renderedCellValue)
          ? JSON.stringify(renderedCellValue, null, 2)
          : renderedCellValue,
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
      accessorKey: "covariate_ids",
      header: "Covariate IDs",
      Cell: ({ renderedCellValue }) =>
        Array.isArray(renderedCellValue)
          ? JSON.stringify(renderedCellValue, null, 2)
          : renderedCellValue,
    }
  ];