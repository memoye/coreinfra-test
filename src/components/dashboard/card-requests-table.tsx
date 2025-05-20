import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { DashboardDataContainer } from "./dashboard-data-container";

type Request = {
  id: number;
  branch: string;
  cardType: "Instant" | "Personalized";
  quantity: number;
  status: "ready" | "in progress" | "acknowleged" | "pending";
};

const data: Request[] = [
  {
    id: 1,
    branch: "Corporate",
    cardType: "Instant",
    quantity: 10,
    status: "ready",
  },
  {
    id: 2,
    branch: "Corporate",
    cardType: "Personalized",
    quantity: 10,
    status: "in progress",
  },
  {
    id: 3,
    branch: "Corporate",
    cardType: "Personalized",
    status: "acknowleged",
    quantity: 10,
  },
  {
    id: 4,
    branch: "Corporate",
    cardType: "Instant",
    status: "pending",
    quantity: 10,
  },
];

const columns: ColumnDef<Request>[] = [
  {
    accessorKey: "branch",
    header: "Status",
    cell: ({ row }) => (
      <div className="text-[#475467] capitalize">{row.getValue("branch")}</div>
    ),
  },
  {
    accessorKey: "cardType",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="w-full"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Card Type
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="text-center text-[#475467] capitalize">
        {row.getValue("cardType")}
      </div>
    ),
  },
  {
    accessorKey: "quantity",
    header: () => <div className="text-center">Quantity</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("quantity"));
      return (
        <div className="text-center font-medium text-[#475467]">{amount}</div>
      );
    },
  },
  {
    id: "actions",
    header: () => <div className="text-center">Actions</div>,
    enableHiding: false,
    cell: ({ row }) => {
      const request = row.original;

      return (
        <Button variant="ghost" className="text-primary! w-full p-0">
          <Link to={`/cards/${request.id}` as string}>View</Link>
        </Button>
      );
    },
  },
];

export function CardRequestTable({ className }: { className?: string }) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className={className}>
      <DashboardDataContainer
        className="h-full pb-6"
        title="Recent Card Requests"
        content={
          <div className={cn("bg-card w-full", className)}>
            <div className="rounded-lg px-4">
              <Table>
                <TableHeader className="bg-secondary text-secondary-foreground!">
                  {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                      {headerGroup.headers.map((header) => {
                        return (
                          <TableHead key={header.id}>
                            {header.isPlaceholder
                              ? null
                              : flexRender(
                                  header.column.columnDef.header,
                                  header.getContext(),
                                )}
                          </TableHead>
                        );
                      })}
                    </TableRow>
                  ))}
                </TableHeader>
                <TableBody>
                  {table.getRowModel().rows?.length ? (
                    table.getRowModel().rows.map((row) => (
                      <TableRow
                        key={row.id}
                        data-state={row.getIsSelected() && "selected"}
                      >
                        {row.getVisibleCells().map((cell) => (
                          <TableCell key={cell.id}>
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext(),
                            )}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell
                        colSpan={columns.length}
                        className="h-24 text-center"
                      >
                        No results.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </div>
        }
      />
    </div>
  );
}
