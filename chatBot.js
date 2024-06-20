const mineflayer = require("mineflayer");
const bot = require('./bot.js');
const chatbot = mineflayer.createBot({
    host: 'NGACCPNV.aternos.me',
    port: 15012,
    version: '1.9.4',
    username: 'ChatBot',
    auth: 'offline'
});

chatbot.on('chat', (username, message) => {
    if (username === chatbot.username) return;
    if (message.includes('@')) {
        message = message.replace(/@/g, '＠');
    }
    bot.channels.cache.get('1253387874938650675').send(`${username}: ${message}`);
});


setInterval(() => {
    chatbot.setControlState('jump',true);
    chatbot.setControlState('jump',false);
},5*1000);
