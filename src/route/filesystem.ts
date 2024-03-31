import { Router } from "express";
import { getAllFolder, addFolderOrFile } from "../../controller/fileSystemController";

const router = Router()

router.get("/fileSystem", getAllFolder);
router.post("/fileSystem/add", addFolderOrFile);
// router.delete("/api/fileSystem/delete", fileController.deleteFolderOrFile);

export default router;