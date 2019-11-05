const mongoose = require('mongoose');
const queueDB = require('../main').queueDB;
const { GameMode, QueueState } = require('./enums');

QueueSchema = new mongoose.Schema({
    gamemode: {
        type: String,
        enum: GameMode,
        default: '1v1'
    },
    state: {
        type: String,
        enum: QueueState,
        default: 'Active'
    },
    match: mongoose.Schema.Types.ObjectId,
});

module.exports = QueueSchema;