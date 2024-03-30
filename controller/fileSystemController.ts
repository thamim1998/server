import { Request, Response } from "express";

interface FileSystem {
  folders: {
    [key: string]: FileSystem; // Recursively define the structure
  };
  files: string[]; // Assuming files are just strings representing file names
}

let fileSystem = {
  name: "root",
  folders: {
    folder1: {
      name: "folder1",
      folders: {
        subfolder1: {
          name: "subfolder1",
          folders: {},
          files: ["file1.txt"],
        },
      },
      files: ["file2.txt", "file3.txt"],
    },
    folder2: {
      name: "folder2",
      folders: {},
      files: [],
    },
  },
  files: ["rootFile1.txt"],
};

let currentDir: FileSystem = fileSystem;

// Endpoint to retrieve all folders & files
export function getAllFolder (req: Request, res: Response) {
  res.json({ fileSystem });
};

// const addFolderOrFile = async (req: Request, res: Response) => {
//   const { path, type, name } = req.body;

//   if (path) {
//     const pathArr = path.split("/");
//     for (let folderName of pathArr) {
//       currentDir = currentDir.folders[folderName];
//     }
//   }

//   if (type === "folder") {
//     currentDir.folders[name] = { folders: {}, files: [] };
//   } else if (type === "file") {
//     currentDir.files.push(name);
//   }

//   res.json(fileSystem);
// };

// module.exports = { getAllFolder, addFolderOrFile };
