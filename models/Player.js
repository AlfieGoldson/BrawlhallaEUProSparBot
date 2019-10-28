const mongoose = require('mongoose');
const queueDB = require('../main').queueDB;
const { PlayerState } = require('./enums');

PlayerSchema = new mongoose.Schema({
    name: String,
    discordID: String,
    state: {
        type: String,
        enum: PlayerState,
        default: 'Idle'
    },
    queues: [mongoose.Schema.Types.ObjectId],
    matches: [mongoose.Schema.Types.ObjectId],
});

module.exports = queueDB.model('Player', PlayerSchema);