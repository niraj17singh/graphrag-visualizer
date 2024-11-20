import { MRT_ColumnDef } from "material-react-table";
import  {
    GraphData,
    NodeObject,
    LinkObject,
  } from "react-force-graph-2d";
import { Finding } from "./community-report";

export interface CustomNode extends NodeObject {
    uuid: string;
    id: string;
    title?: string;
    type: string;
    description?: string;
    human_readable_id?: number;
    text_unit_ids?: string[];
    neighbors?: CustomNode[];
    links?: CustomLink[];
    text?: string;
    n_tokens?: number;
    document_ids?: string[];
    entity_ids?: string[];
    relationship_ids?: string[];   
    level?: number;
    raw_community?: number;
    rank?: number;
    rank_explanation?: string;
    summary?: string;
    findings?: Finding[]
    full_content?: string;
    explanation?: string;
    subject_id?: string;
    object_id?: string;
    status?: string;
    start_date?: string;
    end_date?: string;
    source_text?: string;
    text_unit_id?: string;
    covariate_type?: string;
  }
  
export interface CustomLink extends LinkObject {
    source: string;
    target: string;
    type: string;
    weight?: number;
    description?: string;
    text_unit_ids?: string[];
    id: string;
    human_readable_id?: number;
    combined_degree?: number;
    rank?: number;
  }
  
export interface CustomGraphData extends GraphData {
    nodes: CustomNode[];
    links: CustomLink[];
  }


  export const customNodeColumns: MRT_ColumnDef<CustomNode>[] = [
    {
      accessorKey: "uuid",
      header: "ID",
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
      accessorKey: "graph_embedding",
      header: "Graph Embedding",
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
      accessorKey: "description_embedding",
      header: "Description Embedding",
      Cell: ({ renderedCellValue }) =>
        Array.isArray(renderedCellValue)
          ? JSON.stringify(renderedCellValue, null, 2)
          : renderedCellValue,
    },
    {
      accessorKey: "level",
      header: "Level",
    },
    {
      accessorKey: "n_tokens",
      header: "Number of Tokens",
    },
    {
      accessorKey: "rank",
      header: "Rank",
    },
    {
      accessorKey: "rank_explanation",
      header: "Rank Explanation",
    },
    {
      accessorKey: "summary",
      header: "Summary",
    },
    {
      accessorKey: "full_content",
      header: "Full Content",
    },
    {
      accessorKey: "explanation",
      header: "Explanation",
    },
    {
      accessorKey: "findings",
      header: "Findings",
      Cell: ({ renderedCellValue }) =>
        Array.isArray(renderedCellValue)
          ? JSON.stringify(renderedCellValue, null, 2)
          : renderedCellValue,
    },
    {
      accessorKey: "text",
      header: "Text",
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

  ];

  export const customLinkColumns: MRT_ColumnDef<CustomLink>[] = [
    {
        accessorKey: "source",
        header: "Source",
    },
    {
        accessorKey: "target",
        header: "Target",
    },
    {
        accessorKey: "type",
        header: "Type",
    },
    {
        accessorKey: "weight",
        header: "Weight",
    },
    {
        accessorKey: "description",
        header: "Description",
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
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "human_readable_id",
        header: "Human Readable ID",
    },
    {
        accessorKey: "combined_degree",
        header: "Combined Degree",
    },
    {
        accessorKey: "rank",
        header: "Rank",
    },
];