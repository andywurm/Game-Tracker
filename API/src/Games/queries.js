const getGames = 'SELECT * FROM games';
const getGameByID = 'SELECT * FROM games WHERE ID=$1';
const getGameByTitle = `SELECT * FROM games WHERE UPPER(title) LIKE UPPER($1)`;
const getCompletedList = 'SELECT * FROM games WHERE id IN (SELECT gameid AS id FROM games_list WHERE listid=$1)'
const checkGameExists = 'SELECT g FROM games  g WHERE g.title=$1';
const addGame = 'INSERT INTO games (title, imgs, horizontalcover, verticalcover, releasedate, summary, platforms, genres, rating, contentrating, othername) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)';
const deleteGame = 'DELETE FROM games WHERE ID=$1'
const updateGameReleaseDate = "UPDATE games SET releasedate=$1 WHERE ID=$2"

module.exports = {
    getGames,
    getGameByID,
    getGameByTitle,
    getCompletedList,
    checkGameExists,
    addGame,
    deleteGame,
    updateGameReleaseDate
}