const express = require('express')
const router = express.Router()
const TournamentInfo = require('../models/tournament_info')
const standResp = require('../constants/constant')
const validations = require('../constants/validations')
const TeamInfo = require('../models/team_info')
const PlayerInfo = require('../models/player_info')
const Joi = require('joi')

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

router.get('/getActiveTeams', async (req, res) => {
    try {
        const team = await TeamInfo.where({ status: 'A' })
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
        const resp = standResp.response(false, err.toString(), '')
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

router.put('/updateTeamStatus', async (req, res) => {
    let resp = standResp.response(false, '');
    try {
        const team = await PlayerInfo.aggregate([
            {
                $match: { status: true, player_team_name: req.body.player_team_name }
            },
            {
                $group: {
                    "_id": "$player_role_type",
                    "playercount": { "$sum": 1 }
                }
            }
        ]);

        const teamBalance = {
            batsman: 0,
            bowler: 0,
            allRounder: 0,
            wicketKeeper: 0
        }

        team.map((x) => {
            switch (x._id) {
                case "Batsman": teamBalance.batsman = x.playercount; break;
                case "Bowler": teamBalance.bowler = x.playercount; break;
                case "All-Rounder": teamBalance.allRounder = x.playercount; break;
                case "Wicket-Keeper": teamBalance.wicketKeeper = x.playercount; break;
                default: return;
            }
        });

        const totalPlayers = teamBalance.batsman + teamBalance.bowler + teamBalance.allRounder + teamBalance.wicketKeeper;
        if (totalPlayers != 11) {
            resp = standResp.response(false, 'There can only be 11 players in a team', {})
            res.json(resp);
            return;
        }

        const result = validations.checkTeamBalance(teamBalance);
        if (result.success) {
            const teamInfo = await TeamInfo.updateOne({ team_name: req.body.player_team_name }, {
                status: 'A'
            });
            res.json(standResp.response(true, 'Team Saved Successfully !', teamInfo));
            return;
        }
        else {
            res.json(result); return;
        }
    }
    catch (err) {
        resp = standResp.response(false, err.toString(), '')
        res.send(resp)
    }
})


module.exports = router