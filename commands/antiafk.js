// commands/antiafk.js
const mineflayer = require('mineflayer');
const bots = require('../bots');
module.exports = {
    config: {
        name: 'antiafk',
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
                botFound = true;
                setInterval(() => {
                    if(!bots[i].on()) {
                        return message.channel.send(`Bot ${username} est déconnecté.`);
                    }
                    bots[i].setControlState('jump',true);
                    setTimeout(() => {
                        bots[i].setControlState('jump',false);
                    },1000);
                },5*1000);
                return message.channel.send(`Bot ${username} est maintenant en mode anti-afk`);
            }
        }
        if (!botFound) {
            return message.channel.send(`Bot ${username} n'a pas été trouvé.`);
        }
    },
};