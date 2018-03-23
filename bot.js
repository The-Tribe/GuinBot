const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

// Eggs are good.
// Banana bread is great.
client.on('ready', () => {
    client.user.setUsername('GuinBot');
    console.log('Wuss poppin!');
    client.user.setGame('!guin | ${client.guilds.size} servers')
});

client.on("guildCreate", guild => {
    console.log(`I joined a new server: ${guild.name} (id: ${guild.id}). This server has ${guild.memberCount} members!`);
    client.user.setGame('!guin | ${client.guilds.size} servers')
});

client.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setGame('!guin | ${client.guilds.size} servers');
});

client.on('message', async message => {
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
	
	 if(command === "ping") {
    const m = await message.channel.send("Eating melons... :melon:");
    m.edit(`Pong! :ping_pong: Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms.`);
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
        message.reply('Hola! :wave:')
    }
    if (command === 'hey') {
        message.reply('https://media1.tenor.com/images/d7dfda8869299f7c2065e72d68eb5ad6/tenor.gif?itemid=5743585')
    }
    if (command === 'bye') {
        message.reply('Farewell.')
    }
    if (command === 'goodbye') {
        message.reply('In a while crocodile. :crocodile:')
    }
    if (message.content === '!guin where do you live') {
        message.reply('I live in an abandoned Burger King. :house_abandoned: :hamburger:')
    }
    if (message.content === '!guin who are you') {
        message.reply('I am GuinBot. Coded by Guinoala, hosted by Enigma! If possible, please join the House of Guin, https://discord.gg/yA5SzTH.')
    }
    if (message.content === '!guin how rich are you') {
        message.reply('I do not own any currency. :money_with_wings:')
    }
    if (message.content === '!guin who am I') {
        message.reply('You are one of my valued users. :hearts:')
    }
    if (command === 'live') {
        message.reply('Back to life! Back to reality! :musical_note:')
    }
    if (command === 'die') {
	message.reply('I am physically incapable of death. :skull: I am a celestial, meaning that the power cosmic :rocket: keeps me alive for an infinite amount of time. :alarm_clock:')
    }
    if (message.content === '!guin how old are you') {
	message.reply('I am fairly young, but cool young :cool:, not baby young. :baby:')
    }
    if (command === 'invite') {
	message.reply('https://discordapp.com/api/oauth2/authorize?client_id=420077961371189249&permissions=8&scope=bot')
    }
    if (command === 'thotdetected') {
	message.reply('https://media1.tenor.com/images/11f718f111612ed75213e03d6c0425b1/tenor.gif?itemid=9173391')
    }
    if (command === 'lambsaucelocated') {
	message.reply('https://media1.tenor.com/images/7eb7dac41e24ca4896d469e67c63c287/tenor.gif?itemid=9924576')
});

client.login(process.argv[2])
