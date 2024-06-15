const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'andy',
    host: 'localhost',
    database: 'games',
    password: 'Andaiye1',
    port: 5432
});

module.exports = pool;