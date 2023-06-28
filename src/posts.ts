import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

// const BLOG_DIR = join(process.cwd(), 'src/content/blog');
// console.log(BLOG_DIR)



const load = (fromwhere:string) => {

  console.log(fromwhere)
  var loctr=join(join(process.cwd(), 'src'),fromwhere);
  console.log(loctr)
  const files = fs.readdirSync(loctr);
  // console.log(files)
  const apps = Promise.all(
    files
      .filter((filename) => filename.endsWith('.md'))
      .map(async (filename) => {
        const slug = filename.replace('.md', '');
        return await findPostBySlug(fromwhere,slug);
      }),
  );

  return apps;
};


/** */
export const fetchapps = async (fromwhere:string) => {
  // console.log(fromwhere)
  let _apps:any;
  _apps = _apps || load(fromwhere);
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
    const readFile = fs.readFileSync(join(process.cwd(),"src",fromwhere, `${slug}.md`), 'utf-8');
    // const matter = (await import('gray-matter')).default
    const { data: frontmatter, content } = matter(readFile);
    return {
      slug,
      ...frontmatter,
      content,
    };
  } catch (e) {}

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