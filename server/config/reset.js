import { pool } from "./database.js";
import './dotenv.js';
import photoData from "../data/photos.js";

const createPhotosTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS photos;

        CREATE TABLE IF NOT EXISTS photos (
            id SERIAL PRIMARY KEY,
            url VARCHAR(255) NOT NULL,
            title VARCHAR(255) NOT NULL,
            date DATE NOT NULL,
            location VARCHAR(255) NOT NULL,
            camera VARCHAR(255) NOT NULL,
            focal_length VARCHAR(10) NOT NULL,
            aperture VARCHAR(10) NOT NULL,
            shutter_speed VARCHAR(10) NOT NULL,
            iso VARCHAR(10) NOT NULL
        )
    `;

    try {
        const res = await pool.query(createTableQuery);
        console.log("Photos table created successfully.");
    } catch(error) {
        console.error("Error creating photos table", error);
    }
}



const seedGiftsTable = async () => {
    await createPhotosTable();

    photoData.forEach((photo) => {
        const insertQuery = {
            text: 'INSERT INTO photos (url, title, date, location, camera, focal_length, aperture, shutter_speed, iso) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)'
        }

        const values = [
            photo.url,
            photo.title,
            photo.date,
            photo.location,
            photo.camera,
            photo['focal_length'],
            photo.aperture,
            photo['shutter_speed'],
            photo.iso
        ];

        pool.query(insertQuery, values, (error, res) => {
            if (error) {
                console.error(`Error inserting photo: ${photo.title}`, error);
                return;
            }
            console.log(`${photo.title} inserted successfully.`);
        });
    });
}

seedGiftsTable();