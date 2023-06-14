import { oCommits } from "../../src/shared/types";

import React from "react";
import Infiscrollcomp from "../../src/components/infiscroll";
import dwc from "../../src/dealcommits";
import { findLatestapps } from "../../src/posts";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table"
import { Rrow } from "../../src/components/tr";
// import '../../styles/globals.css'

export default function Committable(){
  let loc=dwc("gtr.json",5);
  var sc:oCommits={
    reponame: "a",
    additions: 0,
    deletions: 0,
    total: 0,
    message: "",
    time: "",
    committer: "",
    commit: ""
  }
  // let loc=[sc,]
  console.log("loc loaded")
  // var apps = await findLatestapps("projects");

    return (
        <>
        <div className="text-bold text-center">hello</div>
<Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Reponame</TableHead>
            <TableHead>addition</TableHead>
            <TableHead>deletions</TableHead>
            <TableHead className="text-right">commit message</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
        <Rrow  item={dwc("gtr.json",-1)}/>
        
        
        </TableBody>
      </Table>
        </>

    );
} 