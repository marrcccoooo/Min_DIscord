const mineflayer = require('mineflayer');
const bots = require('../bots.js');
module.exports = {
    config: {
        name: 'list',
        description: 'List all connected bots',
    },
    run: function (bot, message, args) {
        let connectedBots = '';
        for (let i = 0; i < bots.length; i++) {
            connectedBots += bots[i].username + '\n';
        }
        if (connectedBots === '') {
            return message.channel.send('Aucun bot n\'est connecté.');
        } else {
            return message.channel.send('Bots connectés:\n' + connectedBots);
        }
    }
};