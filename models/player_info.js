const mongoose = require('mongoose')

const playerInfoSchema = new mongoose.Schema({
    player_credit_points: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    player_role_type: {
        type: String,
        required: true
    },
    player_team_name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('player_info', playerInfoSchema)