const mineflayer = require('mineflayer');
const bots = require('../bots.js');


module.exports = {
    config: {
        name: 'join',
        description: 'Join the Minecraft server',
    },
    run: function (bot, message, args) {
        const username = args[0];
        if (!username) {
            return message.channel.send('Merci de spécifier un username de bot.');
        }
        if (username === "all") {
            return message.channel.send('Merci de spécifier un  autre username au bot.');
        }
        bot = mineflayer.createBot({
            host: 'NGACCPNV.aternos.me',
            port: 15012,
            version: '1.9.4',
            username: username,
        });
        bots.push(bot);
        bot.on('chat', (username, message) => {
            if (username === bot.username) return;
            console.log(`${username}: ${message}`);
        });

        bot.on('kicked', (reason, loggedIn) => {
            console.log(`Kicked: ${reason} ${loggedIn}`)
            bots.splice(bots.indexOf(bot), 1);
        });
        bot.on('error', (err) => console.log(`Error: ${err}`));

        message.channel.send(`Bot ${username} a rejoint le serveur Minecraft.`);
    },
};


