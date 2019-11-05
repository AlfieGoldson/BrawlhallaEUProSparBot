const mongoose = require('mongoose');
const queueDB = require('../main').queueDB;

const PlayerSchema = require('../Player').schema;

TeamSchema = new mongoose.Schema({
    players: [PlayerSchema],
    teamRating: Number
});

module.exports = TeamSchema;