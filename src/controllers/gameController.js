const {addGameService, getAllGameService, getGameByIdService, updateGameService, deleteGameService} = require("../services/GameService");

const addGameController = async (req, res) => {
    const addGame = await addGameService(req);

    res.json(addGame)
}
const getAllGameController = async (req, res) => {
    const allGames = await getAllGameService();

    res.json(allGames)
}

const getGameByIdController = async (req, res) => {
    const gameById = await getGameByIdService(req);

    res.json(gameById)
}

const updateGameController = async (req, res) => {
    const updatedGame = await updateGameService(req);

    res.json(updatedGame)
}

const deleteGameController = async (req, res) => {
    const deletedGame = await deleteGameService(req);

    res.json(deletedGame)
}
module.exports = {addGameController, getAllGameController, getGameByIdController, updateGameController, deleteGameController};