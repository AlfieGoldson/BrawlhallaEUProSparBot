const mongoose = require('mongoose');
const queueDB = require('../main').queueDB;
const { TeamSchema, UserSchema } = require('./schemasDefs');

TeamSchema = new mongoose.Schema({
    players: [UserSchema]
});

module.exports = queueDB.model('Team', TeamSchema);