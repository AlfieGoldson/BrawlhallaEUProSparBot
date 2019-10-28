const mongoose = require('mongoose');
const queueDB = require('../main').queueDB;
const { MatchState } = require('./enums');

MatchSchema = new mongoose.Schema({
    teamA: TeamSchema,
    teamB: TeamSchema,
    state: MatchState,
    gameMode: String,
    scoreTeamA: Number,
    scoreTeamA: Number,
    winner: Number
});

module.exports = queueDB.model('Match', MatchSchema);