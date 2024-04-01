import { Router } from "express";
import { getAllFolder, addFolderOrFile, getDocumentByPath , deleteDocument, searchDocument} from "../../controller/fileSystemController";

const router = Router()

router.get("/fileSystem", getAllFolder);
router.get("/fileSystem/doc", getDocumentByPath);
router.post("/fileSystem/add", addFolderOrFile);
router.delete("/fileSystem/delete", deleteDocument);
router.get("/fileSystem/search", searchDocument);

export default router;