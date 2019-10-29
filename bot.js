const dotenv = require('dotenv');
const Discord = require('discord.js');

dotenv.config();

const database = process.env.DB_URL;
let system;

require('./main').connect(database)
    .then(sys => {
        system = sys;
        console.log('> Database Connection Sucessful!');
        discordClient.login(process.env.PRO_SPAR_BOT_TOKEN);
    })
    .catch(console.error);

const discordClient = new Discord.Client();

discordClient.on('ready', () => {
    console.log(`> Logged in as '${discordClient.user.tag}'!`);
});

discordClient.on('message', msg => {
    const args = msg.split(' ');
    switch (args[0]) {
        case '!register':
            system.registerPlayer(msg.author.id, msg.author.username, msg.channel);
            break;
        case '!q1':
            system.startQueue(msg.author.id, '1v1', msg.channel);
            break;
        case '!q2':
            system.startQueue(msg.author.id, '2v2', msg.channel);
            break;
        default:
            break;
    }
});