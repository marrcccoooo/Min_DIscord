const mineflayer = require("mineflayer");
const bot = require('./bot.js');
const { guild_chat, host, port, version, username } = require('./config.json');


const chatbot = mineflayer.createBot({
    host: host,
    port: port,
    version: version,
    username: username,
    auth: 'offline'
});

chatbot.on('chat', (username, message) => {
    if (username === chatbot.username) return;
    if (message.includes('@')) {
        message = message.replace(/@/g, '＠');
    }
    bot.channels.cache.get(guild_chat).send(`${username}: ${message}`);
});


setInterval(() => {
    chatbot.setControlState('jump',true);
    chatbot.setControlState('jump',false);
},5*1000);
