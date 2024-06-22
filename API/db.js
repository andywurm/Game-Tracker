const Pool = require('pg').Pool;

const pool = new Pool({
    user: process.env.REACT_APP_BASE_URL_USERNAME,
    host: process.env.REACT_APP_BASE_URL_HOST,
    database: process.env.REACT_APP_BASE_URL_DATABASE,
    password: process.env.REACT_APP_BASE_URL_PASSWORD,
    port: 5432,
    ssl: true
});

module.exports = pool;