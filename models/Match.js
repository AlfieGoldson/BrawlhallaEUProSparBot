const queueDB = require('../main').queueDB;
const { GameMode, MatchStatus, Region } = require('./enums');

const { MatchSchema, MatchReportSchema, TeamSchema } = require('./schemasDefs');

// State: OnGoing | Reported | Confirmed

MatchSchema.add({
    teamA: TeamSchema,
    teamB: TeamSchema,
    state: String,
    gameMode: GameMode,
    scoreTeamA: Number,
    scoreTeamA: Number,
    winner: Number
});

module.exports = queueDB.model('Match', MatchSchema);