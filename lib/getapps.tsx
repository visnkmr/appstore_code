// "use server"

// import { readdir, readFile } from 'node:fs/promises';
import {readFile} from 'fs/promises';
import path, { join } from 'path';


export async function getapps() {
    // Get the path to the JSON file
  let data = await
  //   fs.readFileSync(join(process.cwd(),"public","otherappslist.json"), 'utf-8');
  // const others = JSON.parse(data);
  // data = 
  readFile(join(process.cwd(),"public","list.json"), 'utf-8');
  const apps = JSON.parse(data);
    const products=[
      // ...others,
      ...apps];
    // Return the data as props
    return products
}
