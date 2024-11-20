import { MRT_ColumnDef } from "material-react-table";

// NEW: Index(['id', 'human_readable_id', 'covariate_type', 'type', 'description',
//   'subject_id', 'object_id', 'status', 'start_date', 'end_date',
//   'source_text', 'text_unit_id'],
//  dtype='object')

export interface Covariate {
    id: string;
    human_readable_id: number;
    covariate_type: string;
    type: string;
    description: string;
    subject_id: string;
    object_id: string;
    status: string;
    start_date: string;
    end_date: string;
    source_text: string;
    text_unit_id: string;
}

export const covariateColumns: MRT_ColumnDef<Covariate>[] = [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "human_readable_id",
      header: "Human Readable ID",
    },
    {
      accessorKey: "covariate_type",
      header: "Covariate Type",
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
      accessorKey: "subject_id",
      header: "Subject ID",
    },
    {
      accessorKey: "object_id",
      header: "Object ID",
    },
    {
      accessorKey: "status",
      header: "Status",
    },
    {
      accessorKey: "start_date",
      header: "Start Date",
    },
    {
      accessorKey: "end_date",
      header: "End Date",
    },
    {
      accessorKey: "source_text",
      header: "Source Text",
    },
    {
      accessorKey: "text_unit_id",
      header: "Text Unit ID",
    },
  ];