const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I have awoken.');
});

client.on('message', message => {
    if (message.content === 'hi') {
    	message.reply('Hi! Hello! Hey! Salutations! Greetings! Bonjour! Hola! Aloha! Guten Tag!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
