'use client';

import { ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal, ArrowUpDown } from 'lucide-react';

import { Button } from '../../components/ui/button';
import { Checkbox } from '../../components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../../components/ui/dropdown-menu';
import React from 'react';

export type eCommit = {
  reponame: string;
  additions: number;
  deletions: number;
  message: string;
  time:number;
};

export const columns: ColumnDef<eCommit>[] = [
  // {
  //   accessorKey: 'reponame',
  //   header: 'Reponame',
  // },
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'reponame',
    header: ({ column }) => {
      return (
        <Button
          // variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Reponame
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
  },{
    accessorKey: 'additions',
    header: ({ column }) => {
      return (
        <Button
          // variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Additions
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
  },{
    accessorKey: 'deletions',
    header: ({ column }) => {
      return (
        <Button
          // variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Deletions
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
  },{
    accessorKey: 'message',
    header: ({ column }) => {
      return (
        <Button
          // variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Commit message
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
  },{
    accessorKey: 'time',
    header: ({ column }) => {
      return (
        <Button
          // variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Time
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
  },
  // {
  //   accessorKey: 'deletions',
  //   header: () => <div className='text-right'>Deletions</div>,
  //   cell: ({ row }) => {
  //     const amount = parseFloat(row.getValue('amount'));
  //     const formatted = new Intl.NumberFormat('en-US', {
  //       style: 'currency',
  //       currency: 'USD',
  //     }).format(amount);

  //     return <div className='text-right font-medium'>{formatted}</div>;
  //   },
  // },
  // {
  //   id: 'actions',
  //   cell: ({ row }) => {
  //     const payment = row.original;

  //     return (
  //       <DropdownMenu>
  //         <DropdownMenuTrigger asChild>
  //           <Button 
  //           // variant='ghost' 
  //           className='h-8 w-4 p-0'>
  //             <span className='sr-only'>Open menu</span>
  //             {/* <MoreHorizontal className='h-4 w-4' /> */}
  //           </Button>
  //         </DropdownMenuTrigger>
  //         <DropdownMenuContent align='end'>
  //           <DropdownMenuLabel>Actions</DropdownMenuLabel>
  //           <DropdownMenuItem
  //             onClick={() => navigator.clipboard.writeText(payment.id)}
  //           >
  //             Copy payment ID
  //           </DropdownMenuItem>
  //           <DropdownMenuSeparator />
  //           <DropdownMenuItem>View customer</DropdownMenuItem>
  //           <DropdownMenuItem>View payment details</DropdownMenuItem>
  //         </DropdownMenuContent>
  //       </DropdownMenu>
  //     );
  //   },
  // },
  // ...
];
