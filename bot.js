const dotenv = require('dotenv');
const Discord = require('discord.js');

const commands = require('./commands');

dotenv.config();

const database = process.env.PRO_SPAR_DB_URL;
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
    let command = '';

    for (let i = 0; i < commands.length; i++) {
        if (commands[i].aliases.includes(args[0])) {
            command = commands[i].command;
        }
    }

    if (command !== '')
        console.log(command);

    switch (command) {
        case 'register':
            break;
        case 'queue':
            break;
        case 'leavequeue':
            break;
        case 'report':
            break;
        case 'deny':
            break;
        case 'match':
            break;
        case 'stats':
            break;
        case 'leaderboard':
            break;
        case 'forcereport':
            break;
        case 'forceconfirm':
            break;
        case 'promoteRX1v1':
            break;
        case 'promoteRX2v2':
            break;
        case 'demoteRX1v1':
            break;
        case 'demoteRX2v2':
            break;
        default:
            break;
    }
});