import express from "express";
import './config/dotenv.js';
import photoRouter from "./routes/photos.js";

const app = express();

app.use('/public', express.static('./public'));
app.use('/scripts', express.static('./public/scripts'));
app.use('/photos', photoRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
});