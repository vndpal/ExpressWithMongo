const mongoose = require('mongoose')

const scoreboardDetailsSchema = new mongoose.Schema({
    ball: {
        type: Number,
        required: true
    },
    batsman_id: {
        type: Number,
        required: true
    },
    bowler_id: {
        type: Number,
        required: true
    },
    extras: {
        type: Number,
        required: true
    },
    fielder_id: {
        type: Number,
        required: true
    },
    over: {
        type: Number,
        required: true
    },
    run: {
        type: Number,
        required: true
    },
    wicket: {
        type: Number,
        required: true
    },
    wicket_type: {
        type: String,
        required: true
    },
    byes_run: {
        type: Boolean,
        required: true
    },
    is_byes: {
        type: Boolean,
        required: true
    },
    is_legbyes: {
        type: Boolean,
        required: true
    },
    is_no: {
        type: Boolean,
        required: true
    },
    is_wide: {
        type: Boolean,
        required: true
    },
    legbyes_run: {
        type: Boolean,
        required: true
    },
    no_ball_run: {
        type: Boolean,
        required: true
    },
    wide_ball_run: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('scoreboard_details', scoreboardDetailsSchema)