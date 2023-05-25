// 'use client'
// import mycommits from './getcommits';
import { Commits, oCommits } from './shared/types';
import { DateTime } from 'luxon';

import gtr from '../app/api/gtr';
import take from 'lodash.take';


export default function dwc(){
    const commits: Commits[] = JSON.parse(gtr());
    

    var myCommits=[];
    

          for (const commit of take(commits,5)) {
            const dateTime = DateTime.fromMillis(commit.time * 1000); // Convert timestamp to DateTime object
            const utcDateTime = dateTime.toUTC(); // Convert DateTime object to UTC time
            const utcTime = utcDateTime.toFormat('dd MMM'); // Format UTC time in ddmmyyhhss format
            const myCommit: oCommits = {
              reponame:commit.reponame,
              additions: commit.additions,
              deletions: commit.deletions,
              total: commit.total,
              message: commit.message,
              time: utcTime
              // DateTime.fromISO(
                // commit.time
                // , { zone: 'utc' }).toFormat('yyyy-MM-dd HH:mm:ss')
                ,
              committer: commit.committer,
              commit: commit.commit,
            };
            myCommits.push(myCommit);
          }
        return myCommits;
        
}