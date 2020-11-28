const mongoose = require('mongoose')

const playerMatchPointsSchema = new mongoose.Schema({
    point: {
        type: Number,
        required: true
    },
    match_id: {
        type: Number,
        required: true
    },
    player_id: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('player_match_points', playerMatchPointsSchema)