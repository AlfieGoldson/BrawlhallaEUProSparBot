const mongoose = require('mongoose');

const queueDB = require('../main').queueDB;

const { UserSchema, QueueSchema, MatchSchema, TeamSchema } = require('./schemasDefs');
const { UserStatus } = require('../util/enums');

PlayerSchema.add({
    name: String,
    discordID: String,
    status: {
        type: String,
        enum: UserStatus,
        default: 'Idle'
    },
    queues: [mongoose.Schema.Types.ObjectId],
    matches: [mongoose.Schema.Types.ObjectId],
});

module.exports = queueDB.model('Player', PlayerSchema);