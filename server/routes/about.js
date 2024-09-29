import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import giveInput from "../controllers/input.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get('/', (_, res) => {
    res.status(200).sendFile(path.resolve(__dirname, "../../public/about.html"));
});

router.post('/', giveInput);

export default router;
  