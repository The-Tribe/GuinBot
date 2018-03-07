const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Hello there.');
});

client.on('message', message => {
    if (message.content === '!guin hi') {
        message.reply('Well, hello there!')
    }
    if (message.content === '!guin hello') {
        message.reply('Hello!')
    }
    if (message.content === '!guin hey') {
        message.reply('Hi!')
    }
    if (message.content === '!guin bye') {
        message.reply('Farewell.')
    }
    if (message.content === '!guin where do you live') {
        message.reply('I live in an abandoned Burger King. :house_abandoned: :hamburger:')
    }
    if (message.content === '!guin goodbye') {
        message.reply('See you later alligator. :crocodile:')
    }
    if (message.content === '!guin who are you') {
        message.reply('I am the bot of @Guinoala#6660')
    }
});

client.login(process.argv[2])
