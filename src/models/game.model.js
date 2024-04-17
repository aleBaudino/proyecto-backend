const {mongoose, Schema} = require('mongoose')

const GameSchema = Schema ({
     id: {
       type: Number,
        require: true,
        unique: true,
    },
     title: {
         type: String,
         required: true
    },
     price: {
         type: Number,
         required: true
    },
    
   
})

const GameModel = mongoose.model('Game', GameSchema);

module.exports = GameModel;
