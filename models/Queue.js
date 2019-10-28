const mongoose = require('mongoose');

const queueDB = require('../main').queueDB;
const { GameMode, QueueStatus, Region } = require('../util/enums');

const { QueueSchema, UserSchema, MatchSchema } = require('./schemasDefs');

QueueSchema.add({
    player: mongoose.Schema.Types.ObjectId,
    gamemode: {
        type: String,
        enum: GameMode,
        default: '1v1'
    },
    status: {
        type: String,
        enum: QueueStatus,
        default: 'Active'
    },
    match: mongoose.Schema.Types.ObjectId,
});

module.exports = queueDB.model('Queue', QueueSchema);