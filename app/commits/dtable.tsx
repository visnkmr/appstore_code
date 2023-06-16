import { eCommit} from './columns';
import { DataTable } from './data-table';
import dwc, { tabledata } from '../../src/dealcommits';
import React from 'react';
import { ColumnDef } from '@tanstack/react-table';

function getData(): eCommit[] {
    // nextjs 13 fetching api from our api folder/payments
    const res =
    // tabledata("gtr.json");
    tabledata("gtr.json");
  
    //  await fetch('http://localhost:3000/api/payments' || 'https://demo-table-eight.vercel.app', {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // });
  
    const data: eCommit[] = res.map(scommit => {
      const { reponame, additions, deletions, message,time,commit } = scommit;
      return { reponame, additions, deletions, message,time,commit };
    });
    // const data = await res.json();
    return data;
  }
  interface dtableprops{
    columns:ColumnDef<eCommit>[];
  }
  export default function Dtable({columns}:dtableprops) {
    const data = getData();
  
    return (
      
        <DataTable columns={columns} data={data} />
          
    );
  }