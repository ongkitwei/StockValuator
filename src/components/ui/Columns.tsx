"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  stockName: string | null;
  tickerSymbol: string | null;
  noOfShares: number | null;
  averageSharePrice: number | null;
  currentSharePrice: number | null;
  intrinsicValue: number | null;
  valuation: string | null;
};

export const columns: ColumnDef<Payment>[] = [
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>Copy payment ID</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
  },
  {
    accessorKey: "stockName",
    header: "Stock Name"
  },
  {
    accessorKey: "tickerSymbol",
    header: "Ticker Symbol"
  },
  {
    accessorKey: "noOfShares",
    header: "No of Shares"
  },
  {
    accessorKey: "averageSharePrice",
    header: "Average Price",
    cell: ({ row }) => (
      <span className="text-blue-500">{row.getValue("averageSharePrice")}</span>
    )
  },
  {
    accessorKey: "currentSharePrice",
    header: "Current Price"
  },
  {
    accessorKey: "intrinsicValue",
    header: "Intrinsic Value"
  },
  {
    accessorKey: "valuation",
    header: "Valuation (%)",
    cell: ({ row }) => {
      let valuation;
      if (row.getValue("valuation") == null) {
        valuation = String(row.getValue("valuation"));
      } else {
        valuation = parseFloat(row.getValue("valuation"));
      }

      return typeof valuation == "string" ? (
        <span></span>
      ) : (
        <span className={valuation < 0 ? "text-green-500" : "text-red-500"}>
          {valuation}%
        </span>
      );
    }
  }
];
