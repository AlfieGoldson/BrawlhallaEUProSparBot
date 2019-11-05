const mongoose = require('mongoose');
const queueDB = require('../main').queueDB;
const { MatchState } = require('./enums');
const TeamSchema = require('./Schemas/TeamSchema');

MatchSchema = new mongoose.Schema({
    teamA: TeamSchema,
    teamB: TeamSchema,
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