const Player = require('../models/Player');
const Match = require('../models/Match');

const getPlayerCurrentMatch = require('./util/getPlayerCurrentMatch');

module.exports = (discordID, roomNumber, channel) => {
    Player.find({ discordID })
        .then(player => {
            if (!player)
                channel.send('Not registered!');
            else if (player.state.include('Match')) {
                Match.findById(player.match)
                    .then(match => {
                        if (match.state !== 'Started')
                            channel.send("Couldn't update the room number, the match has already ended");
                        else
                            channel.send(`Updated Room to ${roomNumber}`);
                    })
            }
        })
    getPlayerCurrentMatch(discordID)
        .then(match => {
            if (match.state !== 'Started')
                channel.send("Couldn't update the room number, the match has already ended");
            else
                match
                    .save()
                    .then(_ => {
                        channel.send(`Updated Room to ${roomNumber}`);
                    })
        })
}