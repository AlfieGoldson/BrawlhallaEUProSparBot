const mongoose = require('mongoose');
const queueDB = require('../main').queueDB;
const { MatchState } = require('./enums');
const Team = require('./Team');

MatchSchema = new mongoose.Schema({
    teamA: Team.schema,
    teamB: Team.schema,
    state: {
        type: String,
        enum: MatchState,
        default: 'Started'
    },
    gameMode: String,
    scoreTeamA: Number,
    scoreTeamA: Number,
    winner: Number
});

module.exports = queueDB.model('Match', MatchSchema);