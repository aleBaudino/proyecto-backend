const GameModel = require('../models/game.model');


const addGameService = async (req, res) => {
    const game = req.body;

    try {
        const newGame = new GameModel(game)

        await newGame.save()

        return {message: "Juego agregado con exito", statusCode: 201}
    }

    catch(error){
        return {message: "Ocurrio", statusCode: 400}
    }
}

const getAllGameService = async () => {
    const allGames = await GameModel.find()
    return allGames;
}

const getGameByIdService = async (req) => {
    const {id} = req.params;
    const gameById = await GameModel.findById(id)

    if(!gameById){
        return {statusCode: 404, message: "No se encontro el juego"}
    }

    return gameById;
}

const updateGameService = async (req) => {
    try {
        const {id} = req.params;
        const updateGame = req.body;
        const gameDatabase = await GameModel.findById(id);
        if(!gameDatabase){
            return {statusCode: 404, message: "No se encontro el juego"}
        }
        gameDatabase.name = updateGame.name;
        gameDatabase.pryce = updateGame.pryce;
        gameDatabase.category = updateGame.category;
        gameDatabase.isNewGame = updateGame.hasOwnProperty("isNewGame")
            ? updateGame.isNewGame
            : gameDatabase.isNewGame;
        await gameDatabase.save();
        return {message: "Juego actualizado con exito", statusCode: 200}
    }
    catch(error){
        return {message: "Ocurrio", statusCode: 400}
    }
}

const deleteGameService = async (req) => {
    try {
        const {id} = req.params;
        const deleteGame = await GameModel.deleteOne({_id: id});
        if(deleteGame.deletedCount === 0){
        return {statusCode: 404, message: "No se encontro el juego"}
        }
        return deleteGame;
    }
    catch(error){
        return {message: "Ocurrio", statusCode: 400}
    }
}
module.exports = {addGameService, getAllGameService, getGameByIdService, updateGameService, deleteGameService};