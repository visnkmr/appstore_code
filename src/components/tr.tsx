import React from "react";
import { TableRow, TableCell } from "../../components/ui/table";

export function Rrow(a:{item: any}) {
    return (
        <>
        {a.item.map((ic) => {
          return ( 
            <>
            <TableRow>
              <TableCell className="font-medium"><a href={ic.commit}>{ic.reponame}</a></TableCell>
              <TableCell>{ic.additions}</TableCell>
              <TableCell>{ic.deletions}</TableCell>
              <TableCell className="text-right">{ic.message}</TableCell>
            </TableRow>
            </>
          );
      })}
      </>
    );
}