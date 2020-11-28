const mongoose = require('mongoose')

const contenstInfoSchema = new mongoose.Schema({
    created_by: {
        type: String,
        required: true
    },
    created_date: {
        type: Date,
        required: true
    },
    entry_fee: {
        type: Number,
        required: true
    },
    max_winning_amount: {
        type: Number,
        required: true
    },
    member_count: {
        type: Number,
        required: true
    },
    winning_percentage: {
        type: Number,
        required: true
    },
    match_id: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('contest_info', contenstInfoSchema)