// 'use client'
import mycommits from './getcommits';
import { Commits } from './shared/types';
import { DateTime } from 'luxon';
import gtr from '../app/api/gtr';

export default function dwc(){
    const commits: Commits[] = JSON.parse(gtr());

    var myCommits=[];
          for (const commit of commits) {
            const myCommit: Commits = {
              reponame:commit.reponame,
              additions: commit.additions,
              deletions: commit.deletions,
              total: commit.total,
              message: commit.message,
              time: DateTime.fromISO(commit.time, { zone: 'utc' }).toFormat('yyyy-MM-dd HH:mm:ss'),
              committer: commit.committer,
              commit: commit.commit,
            };
            myCommits.push(myCommit);
          }
        return myCommits;
        
}