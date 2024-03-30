import { Router } from "express";
const fileController = require("../../controller/fileSystemController");

const router = Router()

router.get("/fileSystem", fileController.getAllFolder);
// router.post("/api/fileSystem/add", fileController.addFolderOrFile);
// router.delete("/api/fileSystem/delete", fileController.deleteFolderOrFile);

export default router;