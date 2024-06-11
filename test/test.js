const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: process.env.DB_HOST || 'db',
    database: 'sampledb',
    password: 'password',
    port: parseInt(process.env.DB_PORT) || 5432,
});

async function runTests() {
    try {
        const allData = await pool.query('SELECT * FROM data');
        console.log('All Data:', allData.rows);

        const singleRow = await pool.query('SELECT * FROM data WHERE id = $1', [2]);
        console.log('Single Row:', singleRow.rows[0]);

        const average = await pool.query('SELECT AVG(integer_field) FROM data');
        console.log('Average:', average.rows[0]);
    } catch (err) {
        console.error(err);
    } finally {
        pool.end();
    }
}

runTests();
