import React from 'react';
import { eCommit, columns } from './columns';
import { DataTable } from './data-table';
import dwc, { tabledata } from '../../src/dealcommits';
import '../../styles/committablestyle.css'
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

function Dtable() {
  const data = getData();

  return (
    
      <DataTable columns={columns} data={data} />
        
  );
}

export default function ListCommits(){
  return(
    <div className='center'>
        <section className='committablestyle flex gap-6 dark:text-white'>
          <div className='m-auto'>

          <div className='mx-auto gap-4 md:max-w-[58rem]'>
            <h2 className='font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl '>
              Commits List
            </h2>
          </div>
          <Dtable/>
          <p className='max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7'>
          using Shadcn ui and tanstack{' '}
        </p>
      </div>

    </section>
    </div>
  );
}
