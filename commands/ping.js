module.exports = {
    config: {
        name: 'ping',
        description: 'Get ping of the bot',
    },
    async run (bot,message,args) {
        message.channel.send("Le ping du bot est de \`" + bot.ws.ping + " ms\`");
    }
}
