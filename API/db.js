const Pool = require('pg').Pool;

const pool = new Pool({
    host: 'localhost',
    database: 'games',
    password: 'Andaiye1',
    port: 5432,
    ssl: false
});

module.exports = pool;