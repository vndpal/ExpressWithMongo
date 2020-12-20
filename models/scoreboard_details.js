const mongoose = require('mongoose')

const scoreboardDetailsSchema = new mongoose.Schema({
    ball: {
        type: Number,
        required: true
    },
    batsman_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "player_info",
        required: true
    },
    bowler_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "player_info",
        required: true
    },
    extras: {
        type: Number,
        required: true
    },
    fielder_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "player_info"
    },
    over: {
        type: Number,
        required: true
    },
    run: {
        type: Number,
        required: true
    },
    is_wicket: {
        type: Boolean,
        required: true
    },
    wicket_type: {
        type: String
    },
    extra_type: {
        type: String
    },
    match_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "match_info",
        required: true
    }
})

module.exports = mongoose.model('scoreboard_details', scoreboardDetailsSchema)