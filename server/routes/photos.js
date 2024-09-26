import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import photoData from "../data/photos.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json(photoData);
});

router.get('/:photoId', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "../../public/photos.html"));
});

export default router;