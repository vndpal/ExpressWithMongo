const express = require('express')
const router = express.Router()
const TournamentInfo = require('../models/tournament_info')
const standResp = require('../constants/response')
const TeamInfo = require('../models/team_info')

router.get('/', async (req, res) => {
    try {
        const tournament = await TournamentInfo.find()
        if (tournament.length) {
            const resp = standResp.response(true, 'Data found', tournament)
            res.json(resp)
        }
        else {
            const resp = standResp.response(false, 'No Data found', tournament)
            res.json(resp)
        }
    }
    catch (err) {
        const resp = standResp.response(false, err, '')
        res.send(resp)
    }
})

router.post('/', async (req, res) => {
    try {
        const startdate = new Date(req.body.startDate);
        const endDate = new Date(req.body.endDate);

        const newTournament = new TournamentInfo({
            tournament_name: req.body.tournament_name,
            startDate: startdate,
            endDate: endDate
        })

        const a1 = await newTournament.save()
        const resp = standResp.response(true, 'Data found', a1)
        res.json(resp)
    }
    catch (err) {
        const resp = standResp.response(false, err, '')
        res.send(resp)
    }
})

router.get('/getTeams', async (req, res) => {
    try {
        const team = await TeamInfo.find()
        if (team.length) {
            const resp = standResp.response(true, 'Data found', team)
            res.json(resp)
        }
        else {
            const resp = standResp.response(false, 'No Data found', team)
            res.json(resp)
        }
    }
    catch (err) {
        const resp = standResp.response(false, err, '')
        res.send(resp)
    }
})

router.post('/addTeam', async (req, res) => {
    try {
        const newTeam = new TeamInfo({
            team_name: req.body.team_name.toUpperCase(),
            short_name: req.body.short_name.toUpperCase(),
            rating: req.body.rating
        })

        const a1 = await newTeam.save()
        const resp = standResp.response(true, 'Data found', a1)
        res.json(resp)
    }
    catch (err) {
        const resp = standResp.response(false, err, '')
        res.send(resp)
    }
})


module.exports = router