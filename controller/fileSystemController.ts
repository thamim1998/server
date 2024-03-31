import { Request, Response } from "express";

interface FileSystem {
  doc: { path: string; docName: string; type: string };
}

let fileSystem = [
  {
    path: `/`,
    docName: `Document`,
    type: "file",
  },
  {
    path: `/`,
    docName: `Document2`,
    type: "file",
  },
  {
    path: `/`,
    docName: `Document3`,
    type: "file",
  },
  {
    path: `/`,
    docName: `Document`,
    type: "folder",
  },
  {
    path: `/`,
    docName: `Radar`,
    type: "folder",
  },
];

// Endpoint to retrieve all folders & files
export function getAllFolder(req: Request, res: Response) {
  res.status(200).json(fileSystem);
}

export function addFolderOrFile(req: Request, res: Response) {
  const { docName, type, path } = req.body;
  fileSystem.push({ path, docName, type });
  res.status(200).json({ message: "File or folder added successfully." });
}

export function getDocumentByPath(req: Request, res: Response) {
  const { path } = req.query;
  const elementsWithPathDoc = fileSystem.filter((item) => item.path === path);
  res.status(200).json(elementsWithPathDoc);
}

export function deleteDocument(req: Request, res:Response){
  const { docName, type, path } = req.body;
  const index = fileSystem.findIndex(element => element.path === path && element.docName === docName && element.type === type);
  if (index !== -1) {
    fileSystem.splice(index, 1);
    res.status(200).json({ message: 'Document deleted successfully' });
  } else {
    res.status(404).json({ message: 'Document not found' });
  }
}
