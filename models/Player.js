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
    rating: { type: Number, default: 1000 },
    peakRating: { type: Number, default: 1000 },
    games: { type: Number, default: 0 },
    wins: { type: Number, default: 0 },
    losses: { type: Number, default: 0 }
});

module.exports = queueDB.model('Player', PlayerSchema);