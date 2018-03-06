const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Hello there.');
});

client.on('message', message => {
    if (message.content === '!guin hi') {
        message.reply('Hi!')
    if (message.content === '!guin hello') {
        message.reply('Hello!')
    if (message.content === '!guin hey') {
        message.reply('Hey!')
      }
});

client.login()
