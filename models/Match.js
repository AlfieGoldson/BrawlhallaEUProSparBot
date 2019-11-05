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
    scoreTeamA: { type: Number, default: 0 },
    scoreTeamA: { type: Number, default: 0 },
    winner: { type: Number, default: -1 },
    roomNumber: { type: String, default: 'Undefined' }
});

module.exports = queueDB.model('Match', MatchSchema);