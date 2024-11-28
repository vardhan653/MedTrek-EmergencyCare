const { Pool } = require('pg');
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'emergency_med',
    password: 'password',
    port: 5432,
});

const connectDB = async () => {
    try {
        await pool.query('SELECT NOW()');
        console.log('Connected to PostgreSQL');
    } catch (error) {
        console.error('Database connection failed', error);
        process.exit(1);
    }
};

module.exports = { connectDB, pool };
