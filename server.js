const express = require('express');
const app = express();

const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    database: 'sampledb',
    password: 'password',
    port: parseInt(process.env.DB_PORT) || 5432,
});

app.listen(3000, '0.0.0.0', () => {
    console.log('Application listening at 0.0.0.0:3000');
});

app.get('/data', async (req, res) => {
    const result = await pool.query('SELECT * FROM data');
    res.send(result.rows);
});

app.get('/data/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const result = await pool.query('SELECT * FROM data WHERE id = $1', [id]);
    res.send(result.rows[0]);
});

app.get('/average', async (req, res) => {
    const result = await pool.query('SELECT AVG(integer_field) FROM data');
    res.send(result.rows[0]);
});
