const { pool } = require('../config/db');

exports.getUserProfile = async (req, res) => {
    try {
        const { id } = req.params;
        const { rows } = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
        res.json(rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.registerUser = async (req, res) => {
    try {
        const { name, phone, medicalHistory } = req.body;
        const { rows } = await pool.query(
            'INSERT INTO users (name, phone, medical_history) VALUES ($1, $2, $3) RETURNING *',
            [name, phone, medicalHistory]
        );
        res.status(201).json(rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
