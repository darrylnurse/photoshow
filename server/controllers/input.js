import { pool } from '../config/database.js';
import '../config/dotenv.js';

const giveInput = async (req, res) => {

    const { userInput } = req.body;

    const inputQuery = `
        INSERT INTO feedback (input)
        VALUES ($1)
    `;

    if (userInput.match(/^\s*$/)) { // check if input is empty
        return res.status(400).json({ error: "Input cannot be empty." });
    }
    
    try {
        await pool.query(inputQuery, [userInput]);
        res.status(201).json({ message: "Input successfully added to database." });
    } catch (error) {
        console.error("Database Error:", error);
        res.status(500).json({ error: "Failed to insert input into database." });
    }
}

export default giveInput;