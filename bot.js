const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

client.on('ready', () => {
    client.user.setUsername('GuinBot');
    console.log('Hi! I baked you some fresh cupcakes.');

client.on("guildCreate", guild => {
    console.log(`I joined a new server: ${guild.name} (id: ${guild.id}). This server has ${guild.memberCount} members!`);
    client.user.setGame(`!guin | ${client.guilds.size} servers`)
});

client.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setGame(`!guin | ${client.guilds.size} servers`);
});

client.on('message', async message => {
    if(message.content.indexOf(config.prefix) !== 0) {
	message.reply('I apologize. You have confused me.')
	const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
    }
    if(command === "ping") {
        const m = await message.channel.send("Ping?");
        m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
    }
	
    if(command === "say") {
        const sayMessage = args.join(" ");
        message.delete().catch(O_o=>{}); 
        message.channel.send(sayMessage);
    }
    if (command === "hi") {
	message.reply('Well, hello there! :wave:')
    }
    if (command === 'hello') {
        message.reply('Hello! :wave:')
    }
    if (command === 'hey') {
        message.reply('Hi! :wave:')
    }
    if (command === 'bye') {
        message.reply('Farewell.')
    }
    if (command === 'where do you live') {
        message.reply('I live in an abandoned Burger King. :house_abandoned: :hamburger:')
    }
    if (command === 'goodbye') {
        message.reply('In a while crocodile. :crocodile:')
    }
    if (command === 'who are you') {
        message.reply('I am GuinBot.')
    }
    if (command === 'how rich are you') {
        message.reply('I do not own any currency. :money_with_wings:')
    }
    if (command === 'who am I') {
        message.reply('You are one of my valued users. :hearts:')
    }
    if (command === 'live') {
        message.reply('Back to life! Back to reality! :musical_note:')
    }
    if (command === 'die') {
	message.reply('I am physically incapable of death :skull:. I am a celestial, meaning that the power cosmic :rocket: keeps me alive for an infinite amount of time. :alarm_clock:')
    }
    if (command === 'how old are you') {
	message.reply('I am fairly young, but cool young :cool:, not baby young. :baby:')
    }
});

client.login(process.argv[2])
