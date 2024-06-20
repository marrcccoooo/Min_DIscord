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
        if (username === "all"){
            for (let i = 0; i < bots.length; i++) {
                let interval = setInterval(() => {
                    try {
                        bots[i].setControlState('jump',true);
                        bots[i].setControlState('jump',false);
                    } catch (error) {
                        message.channel.send(`Bot a été déconnecté il ne peut plus faire de antiafk.`);
                        return clearInterval(interval)
                    }
                },5*1000);
            }
        } else {
            let botFound = false;
            for (let i = 0; i < bots.length; i++) {
                if (bots[i].username === username) {
                    botFound = true;
                    let interval = setInterval(() => {
                        try {
                            bots[i].setControlState('jump',true);
                            bots[i].setControlState('jump',false);
                        } catch (error) {
                            message.channel.send(`Bot ${username} a été déconnecté il ne peut plus faire de antiafk.`);
                            return clearInterval(interval)
                        }
                    },5*1000);
                    return message.channel.send(`Bot ${username} est maintenant en mode anti-afk`);
                }
            }
            if (!botFound) {
                return message.channel.send(`Bot ${username} n'a pas été trouvé.`);
            }
        }
    },
};