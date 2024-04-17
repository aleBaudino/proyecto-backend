const express = require('express');
const router = express.Router();
// Controllers
const {addGameController, getAllGameController, getGameByIdController, updateGameController, deleteGameController} = require('../controllers/gameController');
const validationMiddleware = require('../utils/validator');
const { body } = require('express-validator');

router.get('/prueba', (req, res) => {
    res.send("Bienvenidos a router")
})

router.post('/products',
body("id").isInt(),
body("title").isString(),
body("price").isInt(),
validationMiddleware
,addGameController)

router.get('/products', getAllGameController)
router.get('/cart', getAllGameController)
router.get('/products/:id', getGameByIdController)
router.put('/products/:id', updateGameController)
router.delete('/products/:id', deleteGameController)

module.exports = router;