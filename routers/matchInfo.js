const express = require('express')
const router = express.Router()
const MatchInfo = require('../models/match_info')
const TeamInfo = require('../models/team_info')
const standResp = require('../constants/response')
const TournamentInfo = require('../models/tournament_info')


router.get('/', async (req, res) => {
    try {
        const matchInfo = await MatchInfo.find()
        if (matchInfo.length) {
            const resp = standResp.response(true, 'Data found', matchInfo)
            res.json(resp)
        }
        else {
            const resp = standResp.response(false, 'No Data found', matchInfo)
            res.json(resp)
        }
    }
    catch (err) {
        const resp = standResp.response(false, err, {})
        res.send(resp)
    }
})

router.post('/', async (req, res) => {
    try {
        const matchDate = new Date(req.body.matchDate);
        const team1 = req.body.team1.toUpperCase();
        const team2 = req.body.team2.toUpperCase();
        const tournamentId = req.body.tournamentId;

        const team1Info = await TeamInfo.findOne({ team_name: team1 })
        const team2Info = await TeamInfo.findOne({ team_name: team2 })
        const tourInfo = await TournamentInfo.findOne({ _id: tournamentId })

        if (team1Info && team2Info && tourInfo) {
            const matchInfo = new MatchInfo({
                team1: team1,
                team2: team2,
                matchDate: matchDate,
                tournamentId: tournamentId
            })

            const a1 = await matchInfo.save()
            const resp = standResp.response(true, 'Data inserted successfully !', a1)
            res.json(resp)
        }
        else {
            const resp = standResp.response(false, 'Team 1 or Team 2 or Tour not found', {})
            res.json(resp)
        }

    }
    catch (err) {
        console.log(err)
        const resp = standResp.response(false, err, {})
        res.send(resp)
    }
})


module.exports = router