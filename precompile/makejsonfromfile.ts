// 'use client'
// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';
import * as fs from 'node:fs';
import matter from 'gray-matter';
import path, { join } from 'path';
// import * as md2json from 'md-2-json'
// const BLOG_DIR = join(process.cwd(), 'src/content/blog');
// console.log(BLOG_DIR)

export const open= async ()=> {
  var jsonitemarr=[...await findLatestapps("projects"),...await findLatestapps("projects/other")];
  // fs.writeFileSync('./public/otherappslist.json', JSON.stringify(await findLatestapps("projects/other")));
  fs.writeFileSync('./public/list.json', JSON.stringify(jsonitemarr));
  var minlist=[{}]
  jsonitemarr.map((app:any) => {
    var eachapp={}
    eachapp.title=app.title;
    eachapp.packagename=app.packagename;
    eachapp.version=app.version;
    if (eachapp.packagename && eachapp.version) 
    {
      minlist.push(eachapp);
    }
})
fs.writeFileSync('./public/minlist.json', JSON.stringify(minlist));
};

const load = async (fromwhere:string) => 
// {
//   let { data } = useQuery(
//     { 
//       queryKey:[`${fromwhere}`],
//       queryFn: async()=>{
//     const response = await axios.get(`https://cdn.jsdelivr.net/gh/visnkmr/appstore@add_search/src/${fromwhere}/list.json`)
//     console.log(response.data)
//       return await response.data
//   } })
//   if(!data){
//     data=[]
//   }
//     return data;
  
// };
{

  console.log(fromwhere)
  var loctr=join(process.cwd(),"public",fromwhere);
  console.log(loctr)
  const files = fs.readdirSync(loctr);
  console.log(files)
  // console.log(files)
  const apps = Promise.all(
    files
      .filter((filename) => filename.endsWith('.md'))
      .map(async (filename) => {
        const slug = filename.replace('.md', '');
        // console.log(slug)
        return await findPostBySlug(fromwhere,slug);
      }),
  );
  // console.log(JSON.stringify(apps));
    //   console.log(apps)
  return apps;
};


/** */
export const fetchapps = async (fromwhere:string) => {
  // console.log(fromwhere)
  let _apps:any;
  _apps = _apps ||await load(fromwhere);
  // console.log(fromwhere)

  return await _apps;
};

/** */
export const findLatestapps= async (fromwhere:string)=> {
  // console.log(fromwhere)
  // const _count =  4;
  const apps = await fetchapps(fromwhere);

  return apps;
  // return apps ? apps.slice(_count * -1) : [];
};

/** */
export const findPostBySlug = async (fromwhere:string,slug:any) => {
  if (!slug) return null;

  try {
    const readFile = fs.readFileSync(join(process.cwd(),"public",fromwhere, `${slug}.md`), 'utf-8');
    console.log(join(process.cwd(),"public",fromwhere, `${slug}.md`))
    // console.log(md2json.parse(readFile))
    // const matter = (await import('gray-matter')).default
    // console.log(matter('---\ntitle: Home\n---\nOther stuff'));
    const { data: frontmatter, content } = matter(readFile);
    // console.log(frontmatter)
    let toret= {
      slug,
      ...frontmatter,
      content,
    };
    
    return toret;
  } catch (e) {
    console.log("exception")
  }
  
  return null;
};

/** */
// export const findappsByIds = async (ids) => {
//   if (!Array.isArray(ids)) return [];

//   const apps = await fetchapps();

//   return ids.reduce(function (r, id) {
//     apps.some(function (post) {
//       return id === post.id && r.push(post);
//     });
//     return r;
//   }, []);
// };
// fetchapps();
// async function fetchapps(){

//   const apps = await findLatestapps("");
    
//     apps.map(({ slug, title, image }: { slug: string, title: string, image: string }) => (
//       console.log(slug+title+image)
//     ));
// }