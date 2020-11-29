const { ObjectID } = require('mongodb')
const mongoose = require('mongoose')

const matchInfoSchema = new mongoose.Schema({
    man_of_the_match: {
        type: String
    },
    match_winner_team: {
        type: String
    },
    team1: {
        type: String,
        required: true
    },
    team1_score: {
        type: String
    },
    team2: {
        type: String,
        required: true
    },
    team2_score: {
        type: String
    },
    toss_won_team_name: {
        type: String
    },
    venue: {
        type: String
    },
    tournamentId: {
        type: ObjectID,
        required: true
    },
    matchDate: {
        type: Date,
        required: true
    }
})

module.exports = mongoose.model('match_info', matchInfoSchema)