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
        type: mongoose.Schema.Types.ObjectId,
        ref: "tournament_info",
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date
    },
    matchStatus: {
        type: String,
        required: true
    }
},
    {
        toJSON: { virtuals: true }
    })

matchInfoSchema.virtual('detailsTeam1', {
    ref: 'team_info',
    localField: 'team1',
    foreignField: 'team_name',
    justOne: true // for many-to-1 relationships
});
matchInfoSchema.virtual('detailsTeam2', {
    ref: 'team_info',
    localField: 'team2',
    foreignField: 'team_name',
    justOne: true // for many-to-1 relationships
});

module.exports = mongoose.model('match_info', matchInfoSchema)