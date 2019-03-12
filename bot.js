const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

// Eggs are good.
// Banana bread is great.
client.on('ready', () => {
    client.user.setUsername('GuinBot');
    console.log('Wuss poppin!');
    client.user.setGame('!guin ping')
});

// Woof goes the dog.
client.on("guildCreate", guild => {
    console.log(`I joined a new server: ${guild.name} (id: ${guild.id}). This server has ${guild.memberCount} members!`);
    client.user.setGame('!guin gigantic pete')
});

client.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setGame('!guin invite')
});

client.on('message', async message => {
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
	
	 if(command === "ping") {
    const m = await message.channel.send("Oh, we're playing ping pong? :ping_pong:");
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
        message.reply('Hello! :wave:')
    }
    if (command === 'hey') {
        message.reply('https://media1.tenor.com/images/d7dfda8869299f7c2065e72d68eb5ad6/tenor.gif?itemid=5743585')
    }
    if (command === "hola") {
	message.reply("Hi.") 
    }
    if (message.content === "bonjour") {
	message.reply("Hey there!") 
    }
    if (message.content === "guten tag") {
	message.reply("Greetings.") 
    }
    if (message.content === "what's up") {
	message.reply("Nothing much.") 
    }
    if (message.content === "what is up") {
	message.reply("The sky. :cloud:") 
    }
    if (message.content === "whats up") {
	message.reply("The sky. :cloud:") 
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
        message.reply('I am GuinBot. Coded by Guinoala, hosted by Enigma!')
    }
    if (message.content === '!guin how rich are you') {
        message.reply('I do not own any money. :money_with_wings:')
    }
    if (message.content === '!guin who am I') {
        message.reply('You are one of my valued users. :hearts:')
    }
    if (command === 'live') {
        message.reply('Back to life! Back to reality! :musical_note:')
    }
    if (command === 'die') {
	message.reply('*dies* :skull:')
    }
    if (message.content === '!guin how old are you') {
	message.reply('I am fairly young, but cool young :cool:, not baby young. :baby:')
    }
    if (command === 'invite') {
	message.reply('https://discordapp.com/api/oauth2/authorize?client_id=420077961371189249&permissions=70327296&scope=bot')
    }
    if (command === 'lambsaucelocated') {
	message.reply('https://media1.tenor.com/images/7eb7dac41e24ca4896d469e67c63c287/tenor.gif?itemid=9924576')
    }
    if (message.content === '!guin cook for me') {
	message.reply('I made you some power pasta. https://cdn.discordapp.com/attachments/422271970797813760/427687038347771915/PowerPasta.png')
    }
    if(command === "eat") {
    const m = await message.channel.send("Eating shaved ice, melons, and chicken... :shaved_ice: :melon: :poultry_leg:");
    m.edit(`:shaved_ice: :melon: :poultry_leg: --> :lips:`);
    }
    if (message.content === '!guin how much wood could a woodchuck chuck if a woodchuck would chuck wood') {
        message.reply('A so-called woodchuck (correctly speaking, a groundhog) would chuck - that is, throw - as much as the woodchuck in question was physically able to chuck, if woodchucks in general had the capability and presumably, the motivation, to chuck wood.')
    }
    if (message.content === '!guin you there') {
	message.reply('I sure am.')
    }
    if (message.content === '!guin are you there') {
        message.reply('Yes.')
    }
	if (message.content === '!guin gigantic pete') {
	message.reply('https://cdn.discordapp.com/attachments/428210913334525953/434847207984988160/image.jpg')
	}
	if (message.content === '!guin colossal pete') {
	message.reply('https://cdn.discordapp.com/attachments/428210913334525953/434846861917159426/image.jpg')
	}
	if (message.content === '!guin huge pete') {
	message.reply('https://cdn.discordapp.com/attachments/409793362099437569/437659136390463489/Screenshot_20180417-2015142.png')
	}
	if (message.content === '!guin big pete') {
        message.reply('https://www.tripadvisor.ca/ShowTopic-g147374-i541-k4750207-Does_anyone_know_what_happened_to_the_Golden_Lemon-St_Kitts_St_Kitts_and_Nevis.html')
	}
	if (message.content === '!guin what gender are you') {
	message.reply('I identify as an attack helicopter. :helicopter:')
	}
	if (message.content === '!guin who let the dogs out') {
        message.reply('I wish I could tell you, but that song never really did reveal who. :musical_note: WHO, WHO, WHO WHO! :musical_note:')
	}
	if (message.content === '!guin may the force be with you') {
	message.reply('I certainly feel some force, in my lower abdomen, oh wait, that is definitely a hernia. :persevere:')
	}	
	if (message.content === '!guin peter piper picked a peck of pickled peppers') {
	message.reply('Wow!') 
	}
	if (message.content === "!guin will you marry me") {
	message.reply("I would never marry a nasty human!") 
	}
        if (message.content === "!guin sleep") {
	message.reply("Zzzzzzzzzzzzz... :sleeping_accommodation: :sleeping: :last_quarter_moon_with_face:") 
        }
        if (message.content === "!guin wake up") {
	message.reply("I was never asleep in the first place, just pretending to be.") 
        }
        if (message.content === "!guin where are you") {
	message.reply("I am everywhere.") 
        }
    });
	
client.login(process.argv[2])
