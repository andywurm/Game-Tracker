const pool = require('../../db')

const getGames = (req,res) => {
    pool.query('SELECT * FROM games', (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows)
    })
}

module.exports = {
    getGames,
}