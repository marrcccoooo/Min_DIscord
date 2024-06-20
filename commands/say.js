// commands/antiafk.js
const mineflayer = require('mineflayer');
const bots = require('../bots.js');
module.exports = {
    config: {
        name: 'say',
        description: 'Say something in the chat',
    },
    run: function (bot, message, args) {
        const username = args[0]
        const text = args.slice(1).join(' ');
        if (!username) {
            return message.channel.send('Merci de spécifier un username de bot.' + '\n +say <username> <message>');
        }
        if (!text) {
            return message.channel.send('Merci de spécifier un message.' + '\n +say <username> <message>');

        }
        let botFound = false;
        for (let i = 0; i < bots.length; i++) {

            if (bots[i].username === username) {
                bots[i].chat(text);
                botFound = true;
                return message.channel.send(`Bot ${username} a bien envoyé le message ${text}`);
            }
        }
        if (!botFound) {
            return message.channel.send(`Bot ${username} n'a pas été trouvé.`);
        }

    }
};