// import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
// import appdirs from 'appdirs';
export default function gtr(){
  const appdirs = require('appdirs');
  const path = require('path');
  const configDir = appdirs.userConfigDir();
  const configFilePath = path.join(configDir, 'gtr', 'gtr.json');
  const file = fs.readFileSync(configFilePath);
  const data = file.toString();
//   console.log(data)
//   const data = JSON.parse(file.toString());
  return data;

};

// export default (req: NextApiRequest, res: NextApiResponse) => {
//     const file = fs.readFileSync('/home/roger/.config/gtr/gtr.json');
//     const data = JSON.parse(file.toString());
//     res.status(200).json(data);
//   };