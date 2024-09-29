import express from "express";
import cors from "cors";
import './config/dotenv.js';
import photoRouter from "./routes/photos.js";
import aboutRouter from "./routes/about.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use('/public', express.static('./public'));
app.use('/scripts', express.static('./public/scripts'));

app.use('/photos', photoRouter);
app.use('/about', aboutRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
});