import { Request, Response } from "express";

interface FileSystem {
  doc: { path: string; docName: string; type: string };
}

let fileSystem = [
  {
    path: "/",
    docName: "LocalDrive",
    type: "folder",
  },
  {
    path: "/",
    docName: "OneDrive",
    type: "folder",
  },
  {
    path: "/",
    docName: "Image.png",
    type: "file",
  }
];

export function getAllFolder(req: Request, res: Response) {
  try {
    res.status(200).json(fileSystem);
  } catch (error) {
    console.error("Error fetching all folders:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export function addFolderOrFile(req: Request, res: Response) {
  try {
    const { docName, type, path } = req.body;
    fileSystem.push({ path, docName, type });
    res.status(200).json({ message: "File or folder added successfully." });
  } catch (error) {
    console.error("Error adding folder or file:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export function getDocumentByPath(req: Request, res: Response) {
  try {
    const { path } = req.query;
    const elementsWithPathDoc = fileSystem.filter((item) => item.path === path);
    res.status(200).json(elementsWithPathDoc);
  } catch (error) {
    console.error("Error fetching documents by path:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export function deleteDocument(req: Request, res: Response) {
  try {
    const { docName, type, path } = req.body;
    const index = fileSystem.findIndex(element => element.path === path && element.docName === docName && element.type === type);
    if (index !== -1) {
      fileSystem.splice(index, 1);
      res.status(200).json({ message: 'Document deleted successfully' });
    } else {
      res.status(404).json({ message: 'Document not found' });
    }
  } catch (error) {
    console.error("Error deleting document:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export function searchDocument(req: Request, res: Response) {
  try {
    const { docName } = req.query;
    const searchedDoc = fileSystem.findIndex(element => element.docName === docName);
    res.status(200).json(searchedDoc);
  } catch (error) {
    console.error("Error searching documents by name:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}