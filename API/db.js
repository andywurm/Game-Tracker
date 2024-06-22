const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'andy',
    host: 'dpg-cprhcc3qf0us738fdp30-a.oregon-postgres.render.com',
    database: 'games_m8ie',
    password: '36b8O0n9QpPuqys5jezBsaTNe9DI71vW',
    port: 5432,
    ssl: true
});

module.exports = pool;