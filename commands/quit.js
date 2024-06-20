// commands/join.js
const mineflayer = require('mineflayer');
const bots = require('../bots');
module.exports = {
    config: {
        name: 'quit',
        description: 'Join the Minecraft server',
    },
    run: function (bot, message, args) {
        const username = args[0];
        if (!username) {
            return message.channel.send('Merci de spécifier un username de bot.');
        }
        let botFound = false;
        for (let i = 0; i < bots.length; i++) {
            if (bots[i].username === username) {
                bots[i].end();
                bots.splice(i, 1);
                botFound = true;
                return message.channel.send(`Bot ${username} a quitté le serveur Minecraft`);
            }
        }
        if (!botFound) {
            return message.channel.send(`Bot ${username} n'a pas été trouvé.`);
        }
        console.log(bots.username)
        },
};