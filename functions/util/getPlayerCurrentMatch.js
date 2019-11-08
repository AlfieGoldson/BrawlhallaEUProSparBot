const Player = require('../models/Player');

module.exports = (discordID) => {
    return new Promise((resolve, reject) => {
        Player.find({ discordID })
            .then(player => {
                if (!player)
                    resolve(null);
                else if (player.state.include('Match')) {
                    Match.findById(player.match)
                        .then(resolve)
                        .catch(console.error);
                }
                else
                    return null;
            })
    })
}