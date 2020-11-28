const mongoose = require('mongoose')

const userTeamInfoSchema = new mongoose.Schema({
    contest_id: {
        type: String,
        required: true
    },
    player_id: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('user_team_info', userTeamInfoSchema)