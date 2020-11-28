const mongoose = require('mongoose')

const playerStatsSchema = new mongoose.Schema({
    catches: {
        type: Number,
        required: true
    },
    fifties: {
        type: Number,
        required: true
    },
    fours: {
        type: Number,
        required: true
    },
    hundreds: {
        type: Number,
        required: true
    },
    maidens: {
        type: Number,
        required: true
    },
    run_outs: {
        type: Number,
        required: true
    },
    runs: {
        type: Number,
        required: true
    },
    sixes: {
        type: Number,
        required: true
    },
    wickets: {
        type: Number,
        required: true
    },
    player_id: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('player_stats', playerStatsSchema)