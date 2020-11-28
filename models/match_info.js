const mongoose = require('mongoose')

const matchInfoSchema = new mongoose.Schema({
    man_of_the_match: {
        type: String,
        required: true
    },
    match_winner_team: {
        type: String,
        required: true
    },
    team1: {
        type: String,
        required: true
    },
    team1_score: {
        type: String,
        required: true
    },
    team2: {
        type: String,
        required: true
    },
    team2_score: {
        type: String,
        required: true
    },
    toss_won_team_name: {
        type: String,
        required: true
    },
    venue: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('match_info', matchInfoSchema)