import { pool } from '../config/database.js';
import '../config/dotenv.js';

const getPhotos = async (_, response) => {
    const photosQuery = `
        SELECT * FROM photos ORDER BY id ASC
    `;

    try {
        const data = await pool.query(photosQuery);
        response.status(200).json(data.rows);
    } catch (error) {
        response.status(409).json({
            error: error.message
        });
    }
}

export default getPhotos;