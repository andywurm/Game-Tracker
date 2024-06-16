const {Router} = require('express');
const controller = require('./controller')

const router = Router();

router.get('/', controller.getGames)
router.post('/', controller.addGame)
router.get('/:ID', controller.getGameByID)
router.put('/:ID', controller.updateGameReleaseDate)
router.delete('/:ID', controller.deleteGame)

module.exports = router;