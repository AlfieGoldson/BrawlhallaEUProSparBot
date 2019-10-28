const mongoose = require('mongoose');
const queueDB = require('../main').queueDB;

const Player = require('./Player');

TeamSchema = new mongoose.Schema({
    players: [Player.schema]
});

module.exports = queueDB.model('Team', TeamSchema);