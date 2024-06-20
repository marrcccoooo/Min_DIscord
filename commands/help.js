// commands/help.js
module.exports = {
    config: {
        name: 'help',
        description: 'List all commands',
    },
    run: function (bot, message, args) {
        let commandsList = '';
        bot.commands.forEach((command) => {
            commandsList += `**${command.config.name}** : ${command.config.description}\n`;
        });
        return message.channel.send('Liste des commandes :\n' + commandsList);
    }
};