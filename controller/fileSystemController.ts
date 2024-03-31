import { Request, Response } from "express";

interface FileSystem {
 doc:{path:string, name:string, type:string}
}

let fileSystem = [{
  path: `/`,
  name: `Document`,
  type: 'file'
},
{
  path: `/`,
  name: `Document2`,
  type: 'file'
},
{
  path: `/`,
  name: `Document3`,
  type: 'file'
},
{
  path: `/`,
  name: `Document`,
  type: 'Folder'
},
{
  path: `/Document`,
  name: `Radar`,
  type: 'folder'
}];

// Endpoint to retrieve all folders & files
export function getAllFolder (req: Request, res: Response) {
  res.json({ fileSystem });
};

export function addFolderOrFile (req: Request, res: Response) {
  const { name, type, path } = req.body;
  fileSystem.push({ path, name, type });
  res.status(200).json({ message: 'File or folder added successfully.' });
};

