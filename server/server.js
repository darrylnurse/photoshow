import express from "express";
import cors from "cors";
import './config/dotenv.js';
import photoRouter from "./routes/photos.js";
import aboutRouter from "./routes/about.js";
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public'))); 

app.use('/photos', photoRouter);
app.use('/about', aboutRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
});