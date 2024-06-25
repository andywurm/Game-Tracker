const {Router} = require('express');
const controller = require('./controller')

const router = Router();

router.get('/', controller.getGames)
router.post('/addGame', controller.addGame)
router.post('/addGames',controller.addGames)
router.get('/id/:ID', controller.getGameByID)
router.put('/id/:ID', controller.updateGameReleaseDate)
router.delete('/id/:ID', controller.deleteGame)
router.get('/title/:title', controller.getGameByTitle)

module.exports = router;