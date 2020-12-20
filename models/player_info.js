const mongoose = require('mongoose')

const playerInfoSchema = new mongoose.Schema({
    player_credit_points: {
        type: Number,
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
    },
    status: {
        type: Boolean,
        default: false
    }
},
    {
        toJSON: { virtuals: true }
    });

playerInfoSchema.virtual('detailsTeam', {
    ref: 'team_info',
    localField: 'player_team_name',
    foreignField: 'team_name',
    justOne: true
});

module.exports = mongoose.model('player_info', playerInfoSchema)