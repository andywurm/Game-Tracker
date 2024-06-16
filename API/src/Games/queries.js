const { deleteGameByID } = require("./controller");

const getGames = 'SELECT * FROM games';
const getGameByID = 'SELECT * FROM games WHERE ID=$1';
const checkGameExists = 'SELECT g FROM games  g WHERE g.title=$1';
const addGame = 'INSERT INTO games (title, imgs, horizontalcover, verticalcover, releasedate, summary, platforms, genres, rating, contentrating) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)';
const deleteGame = 'DELETE FROM games WHERE ID=$1'
const updateGameReleaseDate = "UPDATE games SET releasedate=$1 WHERE ID=$2"

module.exports = {
    getGames,
    getGameByID,
    checkGameExists,
    addGame,
    deleteGame,
    updateGameReleaseDate
}