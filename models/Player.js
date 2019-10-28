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
    queue: mongoose.Schema.Types.ObjectId,
    match: mongoose.Schema.Types.ObjectId,
});

module.exports = queueDB.model('Player', PlayerSchema);