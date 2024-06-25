const { error } = require('console');
const pool = require('../../db')
const queries = require('./queries');
const { parseArgs } = require('util');

const getGames = (req, res) => {
    pool.query(queries.getGames, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows)
    })
}

const getGameByID = (req, res) => {
    const id = parseInt(req.params.ID)
    pool.query(queries.getGameByID, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows)
    })
}

const getGameByTitle = (req,res) => {
    const title = "%" + req.params.title + "%"
    pool.query(queries.getGameByTitle, [title], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows)
    })
}

const addGame = (req, res) => {
    const { title, imgs, horizontalcover, verticalcover, releasedate, summary, platforms, genres, rating, contentrating } = req.body
    pool.query(queries.checkGameExists, [title], (error, results) => {
        if (results.rows.length) {
            res.send('Game Already Exists in Database.')
        }
        pool.query(queries.addGame, [title, imgs, horizontalcover, verticalcover, releasedate, summary, platforms, genres, rating, contentrating], (error, results) => {
            if (error) throw error;
            res.status(201).send('Game Added Successfully!')
        })
    })
}

const addGames = (req, res) => {
    let added = 0
    const games = req.body
    games.forEach((game) => {
        const { title, imgs, horizontalcover, verticalcover, releasedate, summary, platforms, genres, rating, contentrating } = game
        pool.query(queries.checkGameExists, [title], (error, results) => {
            if (results.rows.length === 0) {
                pool.query(queries.addGame, [title, imgs, horizontalcover, verticalcover, releasedate, summary, platforms, genres, rating, contentrating], (error, results) => {
                    if (error) throw error;
                    added += 1
                })
            }
        })
    })
    res.status(201).send(`${added} Games Successfully Added. ${games.length-added} Already Exist.`)
}

const deleteGame = (req, res) => {
    const id = parseInt(req.params.ID)
    pool.query(queries.getGameByID, [id], (error, results) => {
        const noGameFound = !results.rows.length;
        if (noGameFound) {
            res.send("Game Not Found.")
        }
    })
    pool.query(queries.deleteGame, [id], (error, results) => {
        if (error) throw error;
        res.status(200).send('Game Successfully Deleted.')
    })
}

const updateGameReleaseDate = (req, res) => {
    const id = req.params.ID
    const { releasedate } = req.body
    pool.query(queries.getGameByID, [id], (error, results) => {
        const noGameFound = !results.rows.length;
        if (noGameFound) {
            res.send("Game Not Found.")
        }
    })
    pool.query(queries.updateGameReleaseDate, [releasedate, id], (error, results) => {
        if (error) throw error;
        res.status(200).send('Game Updated Successfully!')
    })
}

module.exports = {
    getGames,
    getGameByID,
    getGameByTitle,
    addGame,
    addGames,
    deleteGame,
    updateGameReleaseDate
}