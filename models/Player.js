const mongoose = require('mongoose');
const queueDB = require('../main').queueDB;
const { PlayerState } = require('./enums');
const QueueSchema = require('./Schemas/QueueSchema');

PlayerSchema = new mongoose.Schema({
    name: String,
    discordID: String,
    state: {
        type: String,
        enum: PlayerState,
        default: 'Idle'
    },
    queues: [QueueSchema],
    match: mongoose.Schema.Types.ObjectId,
});

module.exports = queueDB.model('Player', PlayerSchema);