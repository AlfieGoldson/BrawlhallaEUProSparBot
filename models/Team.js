const queueDB = require('../main').queueDB;

const { TeamSchema, UserSchema } = require('./schemasDefs');

console.log(User);

TeamSchema.add({
    players: [UserSchema]
});

module.exports = queueDB.model('Team', TeamSchema);