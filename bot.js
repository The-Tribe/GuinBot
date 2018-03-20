const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	client.user.setUsername('GuinBot');
	client.user.setGame('Club Penguin Island');
    console.log('Hello there.');
});

client.on('message', message => {
    if (message.content === '!guin hi') {
        message.reply('Well, hello there! :wave:')
    }
    if (message.content === '!guin hello') {
        message.reply('Hello! :wave:')
    }
    if (message.content === '!guin hey') {
        message.reply('Hi! :wave:')
    }
    if (message.content === '!guin bye') {
        message.reply('Farewell.')
    }
    if (message.content === '!guin where do you live') {
        message.reply('I live in an abandoned Burger King. :house_abandoned: :hamburger:')
    }
    if (message.content === '!guin goodbye') {
        message.reply('In a while crocodile. :crocodile:')
    }
    if (message.content === '!guin who are you') {
        message.reply('I am GuinBot.')
    }
    if (message.content === '!guin how rich are you') {
        message.reply('I do not own any currency. :money_with_wings:')
    }
    if (message.content === '!guin who am I') {
        message.reply('You are one of my valued users. :hearts:')
    }
    if (message.content === '!guin live') {
        message.reply('Back to life! Back to reality! :musical_note:')
    }
    if (message.content === '!guin die') {
	message.reply('I am physically incapable of death. I am a celestial, meaning that the power cosmic keeps me alive for all of eternity.')
    }
    if (message.content === '!guin how old are you') {
	message.reply('I am fairly young, but cool young :sunglasses:, not baby young. :baby:'
});

client.login(process.argv[2])
