import { Router } from "express";
import { getAllFolder, addFolderOrFile, getDocumentByPath , deleteDocument} from "../../controller/fileSystemController";

const router = Router()

router.get("/fileSystem", getAllFolder);
router.get("/fileSystem/doc", getDocumentByPath);
router.post("/fileSystem/add", addFolderOrFile);
router.delete("/fileSystem/delete", deleteDocument);

export default router;