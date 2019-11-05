const mongoose = require('mongoose');
const queueDB = require('../main').queueDB;

const Player = require('./Player');

TeamSchema = new mongoose.Schema({
    players: [mongoose.Schema.Types.ObjectId],
    ratings: [Number]
});

module.exports = queueDB.model('Team', TeamSchema);