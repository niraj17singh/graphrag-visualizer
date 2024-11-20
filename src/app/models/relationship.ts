import { MRT_ColumnDef } from "material-react-table";

// OLD : Index(['source', 'target', 'weight', 'description', 'text_unit_ids', 'id',
//   'human_readable_id', 'source_degree', 'target_degree', 'rank'],
//  dtype='object')

// NEW: Index(['id', 'human_readable_id', 'source', 'target', 'description', 'weight',
//   'combined_degree', 'text_unit_ids'],
//  dtype='object')

export interface Relationship {
    id: string;
    human_readable_id: number;
    source: string;
    target: string;
    description: string;
    weight: number;
    combined_degree: number;
    text_unit_ids: string[];
    type: string; // Custom field to match neo4j
}

export const relationshipColumns: MRT_ColumnDef<Relationship>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "human_readable_id",
        header: "Human Readable ID",
    },
    {
        accessorKey: "source",
        header: "Source",
    },
    {
        accessorKey: "target",
        header: "Target",
    },
    {
        accessorKey: "description",
        header: "Description",
    },
    {
        accessorKey: "weight",
        header: "Weight",
    },
    {
        accessorKey: "combined_degree",
        header: "Combined Degree",
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
        accessorKey: "type",
        header: "Type",
    },
];