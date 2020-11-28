const mongoose = require('mongoose')

const userDetailsSchema = new mongoose.Schema({
    created_date: {
        type: Date,
        required: true
    },
    extra_field_1: {
        type: String,
        required: true
    },
    extra_field_2: {
        type: String,
        required: true
    },
    is_active: {
        type: String,
        required: true
    },
    mobile_number: {
        type: String,
        required: true
    },
    modified_date: {
        type: Date,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email_id: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('user_details', userDetailsSchema)