import { MRT_ColumnDef } from "material-react-table";

// OLD: Index(['community', 'full_content', 'level', 'rank', 'title',
//   'rank_explanation', 'summary', 'findings', 'full_content_json', 'id'],
//  dtype='object')
// NEW: Index(['id', 'human_readable_id', 'community', 'level', 'title', 'summary',
//        'full_content', 'rank', 'rank_explanation', 'findings',
//        'full_content_json', 'period', 'size'],
//       dtype='object')

export interface Finding {
    explanation: string;
    summary: string;
}


export interface CommunityReport {
    id: string;
    human_readable_id: number;
    community: number;
    level: number;
    title: string;
    summary: string;
    full_content: string;
    rank: number;
    rank_explanation: string;
    findings: Finding[];
    full_content_json: string;
    period: string;
    size: number;
}

export const findingColumns: MRT_ColumnDef<Finding>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "explanation",
    header: "Explanation",
  },
  {
    accessorKey: "summary",
    header: "Summary",
  },

]

export const communityReportColumns: MRT_ColumnDef<CommunityReport>[] = [
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
      accessorKey: "summary",
      header: "Summary",
    },
    {
      accessorKey: "full_content",
      header: "Full Content",
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
      accessorKey: "findings",
      header: "Findings",
      Cell: ({ renderedCellValue }) =>
        Array.isArray(renderedCellValue)
          ? JSON.stringify(renderedCellValue, null, 2)
          : renderedCellValue,
    },
    {
      accessorKey: "full_content_json",
      header: "Full Content JSON",
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