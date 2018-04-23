const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

// Eggs are good.
// Banana bread is great.
client.on('ready', () => {
    client.user.setUsername('GuinBot');
    console.log('Wuss poppin!');
    client.user.setGame('!guin')
});

// Woof goes the dog.
client.on("guildCreate", guild => {
    console.log(`I joined a new server: ${guild.name} (id: ${guild.id}). This server has ${guild.memberCount} members!`);
});

client.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
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
    if (command === 'doctorstrange') {
	message.reply('https://media.giphy.com/media/xT5LMEHCIJgOHZcDsc/giphy.gif')
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
    if (command === 'abomasnow') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Abomasnow_(Pok%C3%A9mon)')
    }
    if (command === 'abra') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Abra_(Pok%C3%A9mon)')
    }
    if (command === 'absol') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Absol_(Pok%C3%A9mon)')
    }
    if (command === 'accelgor') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Accelgor_(Pok%C3%A9mon)')
    }
    if (command === 'aegislash') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Aegislash_(Pok%C3%A9mon)')
    }  
    if (command === 'aerodactyl') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Aerodactyl_(Pok%C3%A9mon)')
    }
    if (command === 'aggron') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Aggron_(Pok%C3%A9mon)')
    }
    if (command === 'aipom') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Aipom_(Pok%C3%A9mon)')
    }
    if (command === 'alakazam') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Alakazam_(Pok%C3%A9mon)')
    }
    if (command === 'alomomola') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Alomomola_(Pok%C3%A9mon)')
    }
    if (command === 'altaria') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Altaria_(Pok%C3%A9mon)')
    }
    if (command === 'amaura') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Amaura_(Pok%C3%A9mon)')
    }
     if (command === 'ambipom') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Ambipom_(Pok%C3%A9mon)')
     }
     if (command === 'amoonguss') {
	 message.reply('https://bulbapedia.bulbagarden.net/wiki/Amoonguss_(Pok%C3%A9mon)')
     }
     if (command === 'ampharos') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Ampharos_(Pok%C3%A9mon)')
     }
     if (command === 'anorith') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Anorith_(Pok%C3%A9mon)')
     }
     if (command === 'araquanid') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Araquanid_(Pok%C3%A9mon)')
     }
     if (command === 'arbok') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Arbok_(Pok%C3%A9mon)')
     }
     if (command === 'arcanine') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Arcanine_(Pok%C3%A9mon)')
     }
     if (command === 'arceus') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Arceus_(Pok%C3%A9mon)')
     }
     if (command === 'archen') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Archen_(Pok%C3%A9mon)')
     }
     if (command === 'archeops') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Archeops_(Pok%C3%A9mon)')
     }
     if (command === 'ariados') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Ariados_(Pok%C3%A9mon)')
     }
     if (command === 'armaldo') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Armaldo_(Pok%C3%A9mon)')
     }
     if (command === 'aromatisse') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Aromatisse_(Pok%C3%A9mon)')
     }
     if (command === 'aron') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Aron_(Pok%C3%A9mon)')
     }
     if (command === 'articuno') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Articuno_(Pok%C3%A9mon)')
     }
     if (command === 'audino') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Audino_(Pok%C3%A9mon)')
     }
     if (command === 'aurorus') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Aurorus_(Pok%C3%A9mon)')
     }
     if (command === 'avalugg') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/_Avalugg(Pok%C3%A9mon)')
     }
     if (command === 'axew') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Axew_(Pok%C3%A9mon)')
     }
     if (command === 'azelf') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Azelf_(Pok%C3%A9mon)')
     }
     if (command === 'azumarill') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Azumarill_(Pok%C3%A9mon)')
     }
     if (command === 'azurill') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Azurill_(Pok%C3%A9mon)')
     }
     if (command === 'bagon') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Bagon_(Pok%C3%A9mon)')
     }
     if (command === 'baltoy') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Baltoy_(Pok%C3%A9mon)')
     }
     if (command === 'banette') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Banette_(Pok%C3%A9mon)')
     }
     if (command === 'barbaracle') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Barbaracle_(Pok%C3%A9mon)')
     }
     if (command === 'barboach') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Barboach_(Pok%C3%A9mon)')
     }
     if (command === 'basculin') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Basculin_(Pok%C3%A9mon)')
     }
     if (command === 'bastiodon') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Bastiodon_(Pok%C3%A9mon)')
     }
     if (command === 'bayleef') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Bayleef_(Pok%C3%A9mon)')
     }
     if (command === 'beartic') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Beartic_(Pok%C3%A9mon)')
     }
     if (command === 'beautifly') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Beautifly_(Pok%C3%A9mon)')
     }
     if (command === 'beedrill') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Beedrill_(Pok%C3%A9mon)')
     }
     if (command === 'beheeyem') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Beheeyem_(Pok%C3%A9mon)')
     }
     if (command === 'beldum') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Beldum_(Pok%C3%A9mon)')
     }
	if (command === 'bellossom') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Bellossom_(Pok%C3%A9mon)')
	}
	if (command === 'bellsprout') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Bellsprout_(Pok%C3%A9mon)')
	}
	if (command === 'bergmite') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Bergmite_(Pok%C3%A9mon)')
	}
	if (command === 'bewear') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Bewear_(Pok%C3%A9mon)')
	}
	if (command === 'bibarel') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Bibarel_(Pok%C3%A9mon)')
	}
	if (command === 'bidoof') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Bidoof_(Pok%C3%A9mon)')
	}
	if (message.content === '!guin big pete') {
        message.reply('https://www.tripadvisor.ca/ShowTopic-g147374-i541-k4750207-Does_anyone_know_what_happened_to_the_Golden_Lemon-St_Kitts_St_Kitts_and_Nevis.html')
	}
	if (command === 'binacle') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Binacle_(Pok%C3%A9mon)')
	}
	if (command === 'bisharp') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Bisharp_(Pok%C3%A9mon)')
	}
	if (command === 'blacephalon') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Blacephalon_(Pok%C3%A9mon)')
	}
	if (command === 'blastoise') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Blastoise_(Pok%C3%A9mon)')
	}
	if (command === 'blaziken') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Blaziken_(Pok%C3%A9mon)')
	}
	if (command === 'blissey') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Blissey_(Pok%C3%A9mon)')
	}
	if (command === 'blitzle') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Blitzle_(Pok%C3%A9mon)')
	}
	if (command === 'boldore') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Boldore_(Pok%C3%A9mon)')
	}
	if (command === 'bonsly') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Bonsly_(Pok%C3%A9mon)')
	}
	if (command === 'bouffalant') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Bouffalant_(Pok%C3%A9mon)')
	}
	if (command === 'bounsweet') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Bounsweet_(Pok%C3%A9mon)')
	}
	if (command === 'braixen') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Braixen_(Pok%C3%A9mon)')
	}
	if (command === 'braviary') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Braviary_(Pok%C3%A9mon)')
	}
	if (command === 'breloom') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Breloom_(Pok%C3%A9mon)')
	}
	if (command === 'brionne') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Brionne_(Pok%C3%A9mon)')
	}
	if (command === 'bronzong') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Bronzong_(Pok%C3%A9mon)')
	}
	if (command === 'bronzor') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Bronzor_(Pok%C3%A9mon)')
	}
	if (command === 'bruxish') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Bruxish_(Pok%C3%A9mon)')
	}
	if (command === 'budew') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Budew_(Pok%C3%A9mon)')
	}
	if (command === 'buizel') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Buizel_(Pok%C3%A9mon)')
	}
	if (command === 'bulbasaur') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Bulbasaur_(Pok%C3%A9mon)')
	}
	if (command === 'buneary') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Buneary_(Pok%C3%A9mon)')
	}
	if (command === 'bunnelby') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Bunnelby_(Pok%C3%A9mon)')
	}
	if (command === 'burmy') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Burmy_(Pok%C3%A9mon)')
	}
	if (command === 'butterfree') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Butterfree_(Pok%C3%A9mon)')
	}
	if (command === 'buzzwole') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Buzzwole_(Pok%C3%A9mon)')
	}
	if (command === 'cacnea') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Cacnea_(Pok%C3%A9mon)')
	}
	if (command === 'cacturne') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Cacturne_(Pok%C3%A9mon)')
	}
	if (command === 'camerupt') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Camerupt_(Pok%C3%A9mon)')
	}
	if (command === 'carbink') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Carbink_(Pok%C3%A9mon)')
	}
	if (command === 'carnivine') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Carnivine_(Pok%C3%A9mon)')
	}
	if (command === 'carracosta') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Carracosta_(Pok%C3%A9mon)')
	}
	if (command === 'carvanha') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Carvanha_(Pok%C3%A9mon)')
	}
	if (command === 'cascoon') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Cascoon_(Pok%C3%A9mon)')
	}
	if (command === 'castform') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Castform_(Pok%C3%A9mon)')
	}
	if (command === 'caterpie') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Caterpie_(Pok%C3%A9mon)')
	}
	if (command === 'celebi') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Celebi_(Pok%C3%A9mon)')
	}
	if (command === 'celesteela') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Celesteela_(Pok%C3%A9mon)')
	}
	if (command === 'chandelure') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Chandelure_(Pok%C3%A9mon)')
	}
	if (command === 'chansey') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Chansey_(Pok%C3%A9mon)')
	}
	if (command === 'charizard') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Charizard_(Pok%C3%A9mon)')
	}
	if (command === 'charjabug') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Charjabug_(Pok%C3%A9mon)')
	}
	if (command === 'charmander') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Charmander_(Pok%C3%A9mon)')
	}
	if (command === 'charmeleon') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Charmeleon_(Pok%C3%A9mon)')
	}
	if (command === 'chatot') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Chatot_(Pok%C3%A9mon)')
	}
	if (command === 'cherrim') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Cherrim_(Pok%C3%A9mon)')
	}
	if (command === 'cherubi') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Cherubi_(Pok%C3%A9mon)')
	}
	if (command === 'chesnaught') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Chesnaught_(Pok%C3%A9mon)')
	}
	if (command === 'chespin') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Chespin_(Pok%C3%A9mon)')
	}
	if (command === 'chikorita') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Chikorita_(Pok%C3%A9mon)')
	}
	if (command === 'chimchar') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Chimchar_(Pok%C3%A9mon)')
	}
	if (command === 'chimecho') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Chimecho_(Pok%C3%A9mon)')
	}
	if (command === 'chinchou') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Chinchou_(Pok%C3%A9mon)')
	}
	if (command === 'chingling') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Chingling_(Pok%C3%A9mon)')
	}
	if (command === 'cinccino') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Cinccino_(Pok%C3%A9mon)')
	}
	if (command === 'clamperl') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Clamperl_(Pok%C3%A9mon)')
	}
	if (command === 'clauncher') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Clauncher_(Pok%C3%A9mon)')
	}
	if (command === 'clawitzer') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Clawitzer_(Pok%C3%A9mon)')
	}
	if (command === 'claydol') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Claydol_(Pok%C3%A9mon)')
	}
	if (command === 'clefable') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Clefable_(Pok%C3%A9mon)')
	}
	if (command === 'clefairy') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Clefairy_(Pok%C3%A9mon)')
	}
	if (command === 'cleffa') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Cleffa_(Pok%C3%A9mon)')
	}
	if (command === 'cloyster') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Cloyster_(Pok%C3%A9mon)')
	}
	if (command === 'cobalion') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Cobalion_(Pok%C3%A9mon)')
	}
	if (command === 'cofagrigus') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Cofagrigus_(Pok%C3%A9mon)')
	}
	if (message.content === '!guin colossal pete') {
	message.reply('https://cdn.discordapp.com/attachments/428210913334525953/434846861917159426/image.jpg')
	}
	if (command === 'combee') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Combee_(Pok%C3%A9mon)')
	}
	if (command === 'combusken') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Combusken_(Pok%C3%A9mon)')
	}
	if (command === 'comfey') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Comfey_(Pok%C3%A9mon)')
	}
	if (command === 'conkeldurr') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Conkeldurr_(Pok%C3%A9mon)')
	}
	if (command === 'corphish') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Corphish_(Pok%C3%A9mon)')
	}
	if (command === 'corsola') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Corsola_(Pok%C3%A9mon)')
	}
	if (command === 'cosmoem') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Cosmoem_(Pok%C3%A9mon)')
	}
	if (command === 'cosmog') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Cosmog_(Pok%C3%A9mon)')
	}
	if (command === 'cottonee') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Cottonee_(Pok%C3%A9mon)')
	}
	if (command === 'crabominable') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Crabominable_(Pok%C3%A9mon)')
	}
	if (command === 'crabrawler') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Crabrawler_(Pok%C3%A9mon)')
	}
	if (command === 'cradily') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Cradily_(Pok%C3%A9mon)')
	}
	if (command === 'cranidos') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Cranidos_(Pok%C3%A9mon)')
	}
	if (command === 'crawdaunt') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Crawdaunt_(Pok%C3%A9mon)')
	}
	if (command === 'cresselia') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Cresselia_(Pok%C3%A9mon)')
	}
	if (command === 'croagunk') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Croagunk_(Pok%C3%A9mon)')
	}
	if (command === 'crobat') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Crobat_(Pok%C3%A9mon)')
	}
	if (command === 'croconaw') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Croconaw_(Pok%C3%A9mon)')
	}
	if (command === 'crustle') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Crustle_(Pok%C3%A9mon)')
	}
	if (command === 'cryogonal') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Cryogonal_(Pok%C3%A9mon)')
	}
	if (command === 'cubchoo') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Cubchoo_(Pok%C3%A9mon)')
	}
	if (command === 'cubone') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Cubone_(Pok%C3%A9mon)')
	}
	if (command === 'cutiefly') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Cutiefly_(Pok%C3%A9mon)')
	}
	if (command === 'cyndaquil') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Cyndaquil_(Pok%C3%A9mon)')
	}
	if (command === 'darkrai') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Darkrai_(Pok%C3%A9mon)')
	}
	if (command === 'darmanitan') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Darmanitan_(Pok%C3%A9mon)')
	}
	if (command === 'dartrix') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Dartrix_(Pok%C3%A9mon)')
	}
	if (command === 'darumaka') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Darumaka_(Pok%C3%A9mon)')
	}
	if (command === 'decidueye') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Decidueye_(Pok%C3%A9mon)')
	}
	if (command === 'dedenne') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Dedenne_(Pok%C3%A9mon)')
	}
	if (command === 'deerling') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Deerling_(Pok%C3%A9mon)')
	}
	if (command === 'deino') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Deino_(Pok%C3%A9mon)')
	}
	if (command === 'delcatty') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Delcatty_(Pok%C3%A9mon)')
	}
	if (command === 'delibird') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Delibird_(Pok%C3%A9mon)')
	}
	if (command === 'delphox') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Delphox_(Pok%C3%A9mon)')
	}
	if (command === 'deoxys') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Deoxys_(Pok%C3%A9mon)')
	}
	if (command === 'dewgong') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Dewgong_(Pok%C3%A9mon)')
	}
	if (command === 'dewott') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Dewott_(Pok%C3%A9mon)')
	}
	if (command === 'dewpider') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Dewpider_(Pok%C3%A9mon)')
	}
	if (command === 'dhelmise') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Dhelmise_(Pok%C3%A9mon)')
	}
	if (command === 'dialga') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Dialga_(Pok%C3%A9mon)')
	}
	if (command === 'diancie') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Diancie_(Pok%C3%A9mon)')
	}
	if (command === 'diggersby') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Diggersby_(Pok%C3%A9mon)')
	}
	if (command === 'diglett') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Diglett_(Pok%C3%A9mon)')
	}
	if (command === 'ditto') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Ditto_(Pok%C3%A9mon)')
	}
	if (command === 'dodrio') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Dodrio_(Pok%C3%A9mon)')
	}
	if (command === 'doduo') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Doduo_(Pok%C3%A9mon)')
	}
	if (command === 'donphan') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Donphan_(Pok%C3%A9mon)')
	}
	if (command === 'doublade') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Doublade_(Pok%C3%A9mon)')
	}
	if (command === 'dragalge') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Dragalge_(Pok%C3%A9mon)')
	}
	if (command === 'dragonair') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Dragonair_(Pok%C3%A9mon)')
	}
	if (command === 'dragonite') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Dragonite_(Pok%C3%A9mon)')
	}
	if (command === 'drampa') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Drampa_(Pok%C3%A9mon)')
	}
	if (command === 'drapion') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Drapion_(Pok%C3%A9mon)')
	}
	if (command === 'dratini') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Dratini_(Pok%C3%A9mon)')
	}
	if (command === 'drifblim') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Drifblim_(Pok%C3%A9mon)')
	}
	if (command === 'drifloon') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Drifloon_(Pok%C3%A9mon)')
	}
	if (command === 'drilbur') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Drilbur_(Pok%C3%A9mon)')
	}
	if (command === 'drowzee') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Drowzee_(Pok%C3%A9mon)')
	}
	if (command === 'druddigon') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Druddigon_(Pok%C3%A9mon)')
	}
	if (command === 'ducklett') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Ducklett_(Pok%C3%A9mon)')
	}
	if (command === 'dugtrio') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Dugtrio_(Pok%C3%A9mon)')
	}
	if (command === 'dunsparce') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Dunsparce_(Pok%C3%A9mon)')
	}
	if (command === 'duosion') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Duosion_(Pok%C3%A9mon)')
	}
	if (command === 'durant') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Durant_(Pok%C3%A9mon)')
	}
	if (command === 'dusclops') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Dusclops_(Pok%C3%A9mon)')
	}
	if (command === 'dusknoir') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Dusknoir_(Pok%C3%A9mon)')
	}
	if (command === 'duskull') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Duskull_(Pok%C3%A9mon)')
	}
	if (command === 'dustox') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Dustox_(Pok%C3%A9mon)')
	}
	if (command === 'dwebble') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Dwebble_(Pok%C3%A9mon)')
	}
	if (command === 'eelektrik') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Eelektrik_(Pok%C3%A9mon)')
	}
	if (command === 'eelektross') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Eelektross_(Pok%C3%A9mon)')
	}
	if (command === 'eevee') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Eevee_(Pok%C3%A9mon)')
	}
	if (command === 'ekans') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Ekans_(Pok%C3%A9mon)')
	}
	if (command === 'electabuzz') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Electabuzz_(Pok%C3%A9mon)')
	}
	if (command === 'electivire') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Electivire_(Pok%C3%A9mon)')
	}
	if (command === 'electrike') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Electrike_(Pok%C3%A9mon)')
	}
	if (command === 'electrode') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Electrode_(Pok%C3%A9mon)')
	}
	if (command === 'elekid') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Elekid_(Pok%C3%A9mon)')
	}
	if (command === 'elgyem') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Elgyem_(Pok%C3%A9mon)')
	}
	if (command === 'emboar') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Emboar_(Pok%C3%A9mon)')
	}
	if (command === 'emolga') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Emolga_(Pok%C3%A9mon)')
	}
	if (command === 'empoleon') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Empoleon_(Pok%C3%A9mon)')
	}
	if (command === 'entei') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Entei_(Pok%C3%A9mon)')
	}
	if (command === 'escavalier') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Escavalier_(Pok%C3%A9mon)')
	}
	if (command === 'espeon') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Espeon_(Pok%C3%A9mon)')
	}
	if (command === 'espurr') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Espurr_(Pok%C3%A9mon)')
	}
	if (command === 'excadrill') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Excadrill_(Pok%C3%A9mon)')
	}
	if (command === 'exeggcute') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Exeggcute_(Pok%C3%A9mon)')
	}
	if (command === 'exeggutor') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Exeggutor_(Pok%C3%A9mon)')
	}
	if (command === 'exploud') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Exploud_(Pok%C3%A9mon)')
	}
	if (command === 'farfetchd') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Farfetch%27d_(Pok%C3%A9mon)')
	}
	if (command === 'fearow') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Fearow_(Pok%C3%A9mon)')
	}
	if (command === 'feebas') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Feebas_(Pok%C3%A9mon)')
	}
	if (command === 'fennekin') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Fennekin_(Pok%C3%A9mon)')
	}
	if (command === 'feraligatr') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Feraligatr_(Pok%C3%A9mon)')
	}
	if (command === 'ferroseed') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Ferroseed_(Pok%C3%A9mon)')
	}
	if (command === 'ferrothorn') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Ferrothorn_(Pok%C3%A9mon)')
	}
	if (command === 'finneon') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Finneon_(Pok%C3%A9mon)')
	}
	if (command === 'flaaffy') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Flaaffy_(Pok%C3%A9mon)')
	}
	if (command === 'flabebe') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Flabébé_(Pok%C3%A9mon)')
	}
	if (command === 'flareon') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Flareon_(Pok%C3%A9mon)')
	}
	if (command === 'fletchinder') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Fletchinder_(Pok%C3%A9mon)')
	}
	if (command === 'fletchling') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Fletchling_(Pok%C3%A9mon)')
	}
	if (command === 'floatzel') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Floatzel_(Pok%C3%A9mon)')
	}
	if (command === 'floette') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Floette_(Pok%C3%A9mon)')
	}
	if (command === 'florges') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Florges_(Pok%C3%A9mon)')
	}
	if (command === 'flygon') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Flygon_(Pok%C3%A9mon)')
	}
	if (command === 'fomantis') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Fomantis_(Pok%C3%A9mon)')
	}
	if (command === 'foongus') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Foongus_(Pok%C3%A9mon)')
	}
	if (command === 'forretress') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Forretress_(Pok%C3%A9mon)')
	}
	if (command === 'fraxure') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Fraxure_(Pok%C3%A9mon)')
	}
	if (command === 'frillish') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Frillish_(Pok%C3%A9mon)')
	}
	if (command === 'froakie') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Froakie_(Pok%C3%A9mon)')
	}
	if (command === 'frogadier') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Frogadier_(Pok%C3%A9mon)')
	}
	if (command === 'froslass') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Froslass_(Pok%C3%A9mon)')
	}
	if (command === 'furfrou') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Furfrou_(Pok%C3%A9mon)')
	}
	if (command === 'furret') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Furret_(Pok%C3%A9mon)')
	}
	if (command === 'gabite') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Gabite_(Pok%C3%A9mon)')
	}
	if (command === 'gallade') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Gallade_(Pok%C3%A9mon)')
	}
	if (command === 'galvantula') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Galvantula_(Pok%C3%A9mon)')
	}
	if (command === 'garbodor') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Garbodor_(Pok%C3%A9mon)')
	}
	if (command === 'garchomp') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Garchomp_(Pok%C3%A9mon)')
	}
	if (command === 'gardevoir') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Gardevoir_(Pok%C3%A9mon)')
	}
	if (command === 'gastly') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Gastly_(Pok%C3%A9mon)')
	}
	if (command === 'gastrodon') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Gastrodon_(Pok%C3%A9mon)')
	}
	if (command === 'genesect') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Genesect_(Pok%C3%A9mon)')
	}
	if (command === 'gengar') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Gengar_(Pok%C3%A9mon)')
	}
	if (command === 'geodude') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Geodude_(Pok%C3%A9mon)')
	}
	if (command === 'gible') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Gible_(Pok%C3%A9mon)')
	}
	if (command === 'gigalith') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Gigalith_(Pok%C3%A9mon)')
	}
	if (message.content === '!guin gigantic pete') {
	message.reply('https://cdn.discordapp.com/attachments/428210913334525953/434847207984988160/image.jpg')
	}
	if (command === 'girafarig') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Girafarig_(Pok%C3%A9mon)')
	}
	if (command === 'giratina') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Giratina_(Pok%C3%A9mon)')
	}
	if (command === 'glaceon') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Glaceon_(Pok%C3%A9mon)')
	}
	if (command === 'glalie') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Glalie_(Pok%C3%A9mon)')
	}
	if (command === 'glameow') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Glameow_(Pok%C3%A9mon)')
	}
	if (command === 'gligar') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Gligar_(Pok%C3%A9mon)')
	}
	if (command === 'gliscor') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Gliscor_(Pok%C3%A9mon)')
	}
	if (command === 'gloom') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Gloom_(Pok%C3%A9mon)')
	}
	if (command === 'gogoat') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Gogoat_(Pok%C3%A9mon)')
	}
        if (command === 'golbat') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Golbat_(Pok%C3%A9mon)')
	}
	if (command === 'goldeen') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Goldeen_(Pok%C3%A9mon)')
	}
        if (command === 'golduck') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Golduck_(Pok%C3%A9mon)')
	}
	if (command === 'golem') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Golem_(Pok%C3%A9mon)')
	}
        if (command === 'golett') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Golett_(Pok%C3%A9mon)')
	}
        if (command === 'golisopod') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Golisopod_(Pok%C3%A9mon)')
	}
        if (command === 'golurk') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Golurk_(Pok%C3%A9mon)')
	}
        if (command === 'goodra') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Goodra_(Pok%C3%A9mon)')
	}
	if (command === 'goomy') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Goomy_(Pok%C3%A9mon)')
	}
	if (command === 'gorebyss') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Gorebyss_(Pok%C3%A9mon)')
	}
	if (command === 'gothita') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Gothita_(Pok%C3%A9mon)')
	}
        if (command === 'gothitelle') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Gothitelle_(Pok%C3%A9mon)')
	}
	if (command === 'gothorita') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Gothorita_(Pok%C3%A9mon)')
	}
	if (command === 'gourgeist') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Gourgeist_(Pok%C3%A9mon)')
	}
	if (command === 'granbull') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Granbull_(Pok%C3%A9mon)')
	}
	if (command === 'graveler') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Graveler_(Pok%C3%A9mon)')
	}
	if (command === 'greninja') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Greninja_(Pok%C3%A9mon)')
	}
	if (command === 'grimer') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Grimer_(Pok%C3%A9mon)')
	}
	if (command === 'grotle') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Grotle_(Pok%C3%A9mon)')
	}
	if (command === 'groudon') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Groudon_(Pok%C3%A9mon)')
	}
	if (command === 'grovyle') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Grovyle_(Pok%C3%A9mon)')
	}
	if (command === 'growlithe') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Growlithe_(Pok%C3%A9mon)')
	}
	if (command === 'grubbin') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Grubbin_(Pok%C3%A9mon)')
	}
	if (command === 'grumpig') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Grumpig_(Pok%C3%A9mon)')
	}
	if (command === 'gulpin') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Gulpin_(Pok%C3%A9mon)')
	}
	if (command === 'gumshoos') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Gumshoos_(Pok%C3%A9mon)')
	}
	if (command === 'gurdurr') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Gurdurr_(Pok%C3%A9mon)')
	}
	if (command === 'guzzlord') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Guzzlord_(Pok%C3%A9mon)')
	}
	if (command === 'gyarados') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Gyarados_(Pok%C3%A9mon)')
	}
	if (command === 'hakamo-o') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Hakamo-o_(Pok%C3%A9mon)')
	}
	if (command === 'happiny') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Happiny_(Pok%C3%A9mon)')
	}
	if (command === 'hariyama') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Hariyama_(Pok%C3%A9mon)')
	}
	if (command === 'haunter') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Haunter_(Pok%C3%A9mon)')
	}
	if (command === 'hawlucha') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Hawlucha_(Pok%C3%A9mon)')
	}
	if (command === 'haxorus') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Haxorus_(Pok%C3%A9mon)')
	}
	if (command === 'heatmor') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Heatmor_(Pok%C3%A9mon)')
	}
	if (command === 'heatran') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Heatran_(Pok%C3%A9mon)')
	}
	if (command === 'heliolisk') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Heliolisk_(Pok%C3%A9mon)')
	}
	if (command === 'helioptile') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Helioptile_(Pok%C3%A9mon)')
	}
	if (command === 'heracross') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Heracross_(Pok%C3%A9mon)')
	}
	if (command === 'herdier') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Herdier_(Pok%C3%A9mon)')
	}
	if (command === 'hippopotas') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Hippopotas_(Pok%C3%A9mon)')
	}
	if (command === 'hippowdon') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Hippowdon_(Pok%C3%A9mon)')
	}
	if (command === 'hitmonchan') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Hitmonchan_(Pok%C3%A9mon)')
	}
	if (command === 'hitmonlee') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Hitmonlee_(Pok%C3%A9mon)')
	}
	if (command === 'hitmontop') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Hitmontop_(Pok%C3%A9mon)')
	}
	if (command === 'ho-oh') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Ho-Oh_(Pok%C3%A9mon)')
	}
	if (command === 'honchkrow') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Honchkrow_(Pok%C3%A9mon)')
	}
	if (command === 'honedge') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Honedge_(Pok%C3%A9mon)')
	}
	if (command === 'hoopa') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Hoopa_(Pok%C3%A9mon)')
	}
	if (command === 'hoothoot') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Hoothoot_(Pok%C3%A9mon)')
	}
	if (command === 'hoppip') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Hoppip_(Pok%C3%A9mon)')
	}
	if (command === 'horsea') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Horsea_(Pok%C3%A9mon)')
	}
	if (command === 'houndoom') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Houndoom_(Pok%C3%A9mon)')
	}
	if (command === 'houndour') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Houndour_(Pok%C3%A9mon)')
	}
	if (message.content === '!guin huge pete') {
	message.reply('https://cdn.discordapp.com/attachments/409793362099437569/437659136390463489/Screenshot_20180417-2015142.png')
	}
	if (command === 'huntail') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Huntail_(Pok%C3%A9mon)')
	}
	if (command === 'hydreigon') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Hydreigon_(Pok%C3%A9mon)')
	}
	if (command === 'hypno') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Hypno_(Pok%C3%A9mon)')
	}
	if (command === 'igglybuff') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Igglybuff_(Pok%C3%A9mon)')
	}
	if (command === 'illumise') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Illumise_(Pok%C3%A9mon)')
	}
	if (command === 'incineroar') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Incineroar_(Pok%C3%A9mon)')
	}
	if (command === 'infernape') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Infernape_(Pok%C3%A9mon)')
	}
	if (command === 'inkay') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Inkay_(Pok%C3%A9mon)')
	}
	if (command === 'ivysaur') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Ivysaur_(Pok%C3%A9mon)')
	}
	if (command === 'jangmo-o') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Jangmo-o_(Pok%C3%A9mon)')
	}
	if (command === 'jellicent') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Jellicent_(Pok%C3%A9mon)')
	}
	if (command === 'jigglypuff') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Jigglypuff_(Pok%C3%A9mon)')
	}
	if (command === 'jirachi') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Jirachi_(Pok%C3%A9mon)')
	}
	if (command === 'jolteon') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Jolteon_(Pok%C3%A9mon)')
	}
	if (command === 'joltik') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Joltik_(Pok%C3%A9mon)')
	}
	if (command === 'jumpluff') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Jumpluff_(Pok%C3%A9mon)')
	}
	if (command === 'jynx') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Jynx_(Pok%C3%A9mon)')
	}
	if (command === 'kabuto') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Kabuto_(Pok%C3%A9mon)')
	}
	if (command === 'kabutops') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Kabutops_(Pok%C3%A9mon)')
	}
	if (command === 'kadabra') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Kadabra_(Pok%C3%A9mon)')
	}
	if (command === 'kakuna') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Kakuna_(Pok%C3%A9mon)')
	}
	if (command === 'kangaskhan') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Kangaskhan_(Pok%C3%A9mon)')
	}
	if (command === 'karrablast') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Karrablast_(Pok%C3%A9mon)')
	}
	if (command === 'kartana') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Kartana_(Pok%C3%A9mon)')
	}
	if (command === 'kecleon') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Kecleon_(Pok%C3%A9mon)')
	}
	if (command === 'keldeo') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Keldeo_(Pok%C3%A9mon)')
	}
	if (command === 'kingdra') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Kingdra_(Pok%C3%A9mon)')
	}
	if (command === 'kingler') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Kingler_(Pok%C3%A9mon)')
	}
	if (command === 'kirlia') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Kirlia_(Pok%C3%A9mon)')
	}
	if (command === 'klang') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Klang_(Pok%C3%A9mon)')
	}
	if (command === 'klefki') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Klefki_(Pok%C3%A9mon)')
	}
	if (command === 'klink') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Klink_(Pok%C3%A9mon)')
	}
	if (command === 'klinklang') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Klinklang(Pok%C3%A9mon)')
	}
	if (command === 'koffing') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Koffing_(Pok%C3%A9mon)')
	}
	if (command === 'komala') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Komala_(Pok%C3%A9mon)')
	}
	if (command === 'kommo-o') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Kommo-o_(Pok%C3%A9mon)')
	}
	if (command === 'krabby') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Krabby_(Pok%C3%A9mon)')
	}
	if (command === 'kricketot') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Kricketot_(Pok%C3%A9mon)')
	}
	if (command === 'kricketune') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Kricketune_(Pok%C3%A9mon)')
	}
	if (command === 'krokorok') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Krokorok_(Pok%C3%A9mon)')
	}
	if (command === 'krookodile') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Krookodile_(Pok%C3%A9mon)')
	}
	if (command === 'kyogre') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Kyogre_(Pok%C3%A9mon)')
	}
	if (command === 'kyurem') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Kyurem_(Pok%C3%A9mon)')
	}
	if (command === 'lairon') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Lairon_(Pok%C3%A9mon)')
	}
	if (command === 'lampent') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Lampent_(Pok%C3%A9mon)')
	}
	if (command === 'landorus') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Landorus_(Pok%C3%A9mon)')
	}
	if (command === 'lanturn') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Lanturn_(Pok%C3%A9mon)')
	}
	if (command === 'lapras') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Lapras_(Pok%C3%A9mon)')
	}
	if (command === 'larvesta') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Larvesta_(Pok%C3%A9mon)')
	}
	if (command === 'larvitar') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Larvitar_(Pok%C3%A9mon)')
	}
	if (command === 'latias') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Latias_(Pok%C3%A9mon)')
	}
	if (command === 'latios') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Latios_(Pok%C3%A9mon)')
	}
	if (command === 'leafeon') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Leafeon_(Pok%C3%A9mon)')
	}
	if (command === 'leavanny') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Leavanny_(Pok%C3%A9mon)')
	}
	if (command === 'ledian') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Ledian_(Pok%C3%A9mon)')
	}
	if (command === 'ledyba') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Ledyba(Pok%C3%A9mon)')
	}
	if (command === 'lickilicky') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Lickilicky_(Pok%C3%A9mon)')
	}
	if (command === 'lickitung') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Lickitung_(Pok%C3%A9mon)')
	}
	if (command === 'liepard') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Liepard_(Pok%C3%A9mon)')
	}
	if (command === 'lileep') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Lileep_(Pok%C3%A9mon)')
	}
	if (command === 'lilligant') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Lilligant_(Pok%C3%A9mon)')
	}
	if (command === 'lillipup') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Lillipup_(Pok%C3%A9mon)')
	}
	if (command === 'linoone') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Linoone_(Pok%C3%A9mon)')
	}
	if (command === 'litleo') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Litleo_(Pok%C3%A9mon)')
	}
	if (command === 'litten') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Litten_(Pok%C3%A9mon)')
	}
	if (command === 'litwick') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Litwick_(Pok%C3%A9mon)')
	}
	if (command === 'lombre') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Lombre_(Pok%C3%A9mon)')
	}
	if (command === 'lopunny') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Lopunny_(Pok%C3%A9mon)')
	}
	if (command === 'lotad') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Lotad_(Pok%C3%A9mon)')
	}
	if (command === 'loudred') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Loudred_(Pok%C3%A9mon)')
	}
	if (command === 'lucario') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Lucario_(Pok%C3%A9mon)')
	}
	if (command === 'ludicolo') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Ludicolo_(Pok%C3%A9mon)')
	}
	if (command === 'lugia') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Lugia_(Pok%C3%A9mon)')
	}
	if (command === 'lumineon') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Lumineon_(Pok%C3%A9mon)')
	}
	if (command === 'lunala') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Lunala_(Pok%C3%A9mon)')
	}
	if (command === 'lunatone') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Lunatone_(Pok%C3%A9mon)')
	}
	if (command === 'lurantis') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Lurantis_(Pok%C3%A9mon)')
	}
	if (command === 'luvdisc') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Luvdisc_(Pok%C3%A9mon)')
	}
	if (command === 'luxio') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Luxio_(Pok%C3%A9mon)')
	}
	if (command === 'luxray') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Luxray_(Pok%C3%A9mon)')
	}
	if (command === 'lycanroc') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Lycanroc_(Pok%C3%A9mon)')
	}
	if (command === 'machamp') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Machamp_(Pok%C3%A9mon)')
	}
	if (command === 'machoke') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Machoke_(Pok%C3%A9mon)')
	}
	if (command === 'machop') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Machop_(Pok%C3%A9mon)')
	}
	if (command === 'magby') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Magby_(Pok%C3%A9mon)')
	}
	if (command === 'magcargo') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Magcargo_(Pok%C3%A9mon)')
	}
	if (command === 'magearna') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Magearna_(Pok%C3%A9mon)')
	}
	if (command === 'magikarp') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Magikarp_(Pok%C3%A9mon)')
	}
	if (command === 'magmar') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Magmar_(Pok%C3%A9mon)')
	}
	if (command === 'magmortar') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Magmortar_(Pok%C3%A9mon)')
	}
	if (command === 'magnemite') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Magnemite_(Pok%C3%A9mon)')
	}
	if (command === 'magneton') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Magneton_(Pok%C3%A9mon)')
	}
	if (command === 'magnezone') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Magnezone_(Pok%C3%A9mon)')
	}
	if (command === 'makuhita') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Makuhita_(Pok%C3%A9mon)')
	}
	if (command === 'malamar') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Malamar_(Pok%C3%A9mon)')
	}
	if (command === 'mamoswine') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Mamoswine_(Pok%C3%A9mon)')
	}
	if (command === 'manaphy') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Manaphy_(Pok%C3%A9mon)')
	}
	if (command === 'mandibuzz') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Mandibuzz_(Pok%C3%A9mon)')
	}
	if (command === 'manectric') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Manectric_(Pok%C3%A9mon)')
	}
	if (command === 'mankey') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Mankey_(Pok%C3%A9mon)')
	}
	if (command === 'mantine') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Mantine_(Pok%C3%A9mon)')
	}
	if (command === 'mantyke') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Mantyke_(Pok%C3%A9mon)')
	}
	if (command === 'maractus') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Maractus_(Pok%C3%A9mon)')
	}
	if (command === 'mareanie') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Mareanie_(Pok%C3%A9mon)')
	}
	if (command === 'mareep') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Mareep_(Pok%C3%A9mon)')
	}
	if (command === 'marill') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Marill_(Pok%C3%A9mon)')
	}
	if (command === 'marowak') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Marowak_(Pok%C3%A9mon)')
	}
	if (command === 'marshadow') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Marshadow_(Pok%C3%A9mon)')
	}
	if (command === 'marshtomp') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Marshtomp_(Pok%C3%A9mon)')
	}
	if (command === 'masquerain') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Masquerain_(Pok%C3%A9mon)')
	}
	if (command === 'mawile') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Mawile_(Pok%C3%A9mon)')
	}
	if (command === 'medicham') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Medicham_(Pok%C3%A9mon)')
	}
	if (command === 'meditite') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Meditite_(Pok%C3%A9mon)')
	}
	if (command === 'meganium') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Meganium_(Pok%C3%A9mon)')
	}
	if (command === 'meloetta') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Meloetta_(Pok%C3%A9mon)')
	}
	if (command === 'meowstic') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Meowstic_(Pok%C3%A9mon)')
	}
	if (command === 'meowth') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Meowth_(Pok%C3%A9mon)')
	}
	if (command === 'mesprit') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Mesprit_(Pok%C3%A9mon)')
	}
	if (command === 'metagross') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Metagross_(Pok%C3%A9mon)')
	}
	if (command === 'metang') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Metang_(Pok%C3%A9mon)')
	}
	if (command === 'metapod') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Metapod_(Pok%C3%A9mon)')
	}
	if (command === 'mew') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Mew_(Pok%C3%A9mon)')
	}
	if (command === 'mewtwo') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Mewtwo_(Pok%C3%A9mon)')
	}
	if (command === 'mienfoo') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Mienfoo_(Pok%C3%A9mon)')
	}
	if (command === 'mienshao') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Mienshao_(Pok%C3%A9mon)')
	}
	if (command === 'mightyena') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Mightyena_(Pok%C3%A9mon)')
	}
	if (command === 'milotic') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Milotic_(Pok%C3%A9mon)')
	}
	if (command === 'miltank') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Miltank_(Pok%C3%A9mon)')
	}
	if (message.content === '!guin mime jr.') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Mime_Jr._(Pok%C3%A9mon)')
	}
	if (command === 'mimikyu') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Mimikyu_(Pok%C3%A9mon)')
	}
	if (command === 'minccino') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Minccino_(Pok%C3%A9mon)')
	}
	if (command === 'minior') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Minior_(Pok%C3%A9mon)')
	}
	if (command === 'minun') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Minun_(Pok%C3%A9mon)')
	}
	if (command === 'misdreavus') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Misdreavus_(Pok%C3%A9mon)')
	}
	if (command === 'mismagius') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Mismagius_(Pok%C3%A9mon)')
	}
	if (command === 'missingno') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/MissingNo.')
	}
	if (command === 'moltres') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Moltres_(Pok%C3%A9mon)')
	}
	if (command === 'monferno') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Monferno_(Pok%C3%A9mon)')
	}
	if (command === 'morelull') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Morelull_(Pok%C3%A9mon)')
	}
	if (command === 'mothim') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Mothim_(Pok%C3%A9mon)')
	}
	if (message.content === '!guin mr. mime') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Mr._Mime_(Pok%C3%A9mon)')
	}
	if (command === 'mudbray') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Mudbray_(Pok%C3%A9mon)')
	}
	if (command === 'mudkip') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Mudkip_(Pok%C3%A9mon)')
	}
	if (command === 'mudsdale') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Mudsdale_(Pok%C3%A9mon)')
	}
	if (command === 'muk') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Muk_(Pok%C3%A9mon)')
	}
	if (command === 'munchlax') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Munchlax_(Pok%C3%A9mon)')
	}
	if (command === 'munna') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Munna_(Pok%C3%A9mon)')
	}
	if (command === 'murkrow') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Murkrow_(Pok%C3%A9mon)')
	}
	if (command === 'musharna') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Musharna_(Pok%C3%A9mon)')
	}
	if (command === 'naganadel') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Naganadel_(Pok%C3%A9mon)')
	}
	if (command === 'natu') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Natu_(Pok%C3%A9mon)')
	}
	if (command === 'necrozma') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Necrozma_(Pok%C3%A9mon)')
	}
	if (command === 'nidoking') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Nidoking_(Pok%C3%A9mon)')
	}
	if (command === 'nidoqueen') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Nidoqueen_(Pok%C3%A9mon)')
	}
	if (message.content === '!guin female nidoran') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Nidoran♀_(Pok%C3%A9mon)')
	}
        if (message.content === '!guin male nidoran') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Nidoran♂_(Pok%C3%A9mon)')
	}
	if (command === 'nidorina') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Nidorina_(Pok%C3%A9mon)')
	}
	if (command === 'nidorino') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Nidorino_(Pok%C3%A9mon)')
	}
	if (command === 'nihilego') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Nihilego_(Pok%C3%A9mon)')
	}
	if (command === 'nincada') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Nincada_(Pok%C3%A9mon)')
	}
	if (command === 'ninetales') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Ninetales_(Pok%C3%A9mon)')
	}
	if (command === 'ninjask') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Ninjask_(Pok%C3%A9mon)')
	}
	if (command === 'noctowl') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Noctowl_(Pok%C3%A9mon)')
	}
	if (command === 'noibat') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Noibat_(Pok%C3%A9mon)')
	}
	if (command === 'noivern') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Noivern_(Pok%C3%A9mon)')
	}
	if (command === 'nosepass') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Nosepass_(Pok%C3%A9mon)')
	}
	if (command === 'numel') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Numel_(Pok%C3%A9mon)')
	}
	if (command === 'nuzleaf') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Nuzleaf_(Pok%C3%A9mon)')
	}
	if (command === 'octillery') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Octillery_(Pok%C3%A9mon)')
	}
	if (command === 'oddish') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Oddish_(Pok%C3%A9mon)')
	}
	if (command === 'omanyte') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Omanyte_(Pok%C3%A9mon)')
	}
	if (command === 'omastar') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Omastar_(Pok%C3%A9mon)')
	}
	if (command === 'onix') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Onix_(Pok%C3%A9mon)')
	}
	if (command === 'oranguru') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Oranguru_(Pok%C3%A9mon)')
	}
	if (command === 'oricorio') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Oricorio_(Pok%C3%A9mon)')
	}
	if (command === 'oshawott') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Oshawott_(Pok%C3%A9mon)')
	}
	if (command === 'pachirisu') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Pachirisu_(Pok%C3%A9mon)')
	}
	if (command === 'palkia') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Palkia_(Pok%C3%A9mon)')
	}
	if (command === 'palossand') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Palossand_(Pok%C3%A9mon)')
	}
	if (command === 'palpitoad') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Palpitoad_(Pok%C3%A9mon)')
	}
	if (command === 'pancham') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Pancham_(Pok%C3%A9mon)')
	}
	if (command === 'pangoro') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Pangoro_(Pok%C3%A9mon)')
	}
	if (command === 'panpour') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Panpour_(Pok%C3%A9mon)')
	}
	if (command === 'pansage') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Pansage_(Pok%C3%A9mon)')
	}
	if (command === 'pansear') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Pansear_(Pok%C3%A9mon)')
	}
	if (command === 'paras') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Paras_(Pok%C3%A9mon)')
	}
	if (command === 'parasect') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Parasect_(Pok%C3%A9mon)')
	}
	if (command === 'passimian') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Passimian_(Pok%C3%A9mon)')
	}
	if (command === 'patrat') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Patrat_(Pok%C3%A9mon)')
	}
	if (command === 'pawniard') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Pawniard_(Pok%C3%A9mon)')
	}
	if (command === 'pelipper') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Pelipper_(Pok%C3%A9mon)')
	}
	if (command === 'persian') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Persian_(Pok%C3%A9mon)')
	}
	if (command === 'petilil') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Petilil_(Pok%C3%A9mon)')
	}
	if (command === 'phanpy') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Phanpy_(Pok%C3%A9mon)')
	}
	if (command === 'phantump') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Phantump_(Pok%C3%A9mon)')
	}
	if (command === 'pheromosa') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Pheromosa_(Pok%C3%A9mon)')
	}
	if (command === 'phione') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Phione_(Pok%C3%A9mon)')
	}
	if (command === 'pichu') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Pichu_(Pok%C3%A9mon)')
	}
	if (command === 'pidgeot') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Pidgeot_(Pok%C3%A9mon)')
	}
	if (command === 'pidgeotto') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Pidgeotto_(Pok%C3%A9mon)')
	}
	if (command === 'pidgey') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Pidgey_(Pok%C3%A9mon)')
	}
	if (command === 'pidove') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Pidove_(Pok%C3%A9mon)')
	}
	if (command === 'pignite') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Pignite_(Pok%C3%A9mon)')
	}
	if (command === 'pikachu') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)')
	}
	if (command === 'pikipek') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Pikipek_(Pok%C3%A9mon)')
	}
	if (command === 'piloswine') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Piloswine_(Pok%C3%A9mon)')
	}
	if (command === 'pineco') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Pineco_(Pok%C3%A9mon)')
	}
	if (command === 'pinsir') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Pinsir_(Pok%C3%A9mon)')
	}
	if (command === 'piplup') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Piplup_(Pok%C3%A9mon)')
	}
	if (command === 'plusle') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Plusle_(Pok%C3%A9mon)')
	}
	if (command === 'poipole') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Poipole_(Pok%C3%A9mon)')
	}
	if (command === 'politoed') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Politoed_(Pok%C3%A9mon)')
	}
	if (command === 'poliwag') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Poliwag_(Pok%C3%A9mon)')
	}
	if (command === 'poliwhirl') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Poliwhirl_(Pok%C3%A9mon)')
	}
	if (command === 'poliwrath') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Poliwrath_(Pok%C3%A9mon)')
	}
	if (command === 'ponyta') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Ponyta_(Pok%C3%A9mon)')
	}
	if (command === 'poochyena') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Poochyena_(Pok%C3%A9mon)')
	}
	if (command === 'popplio') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Popplio_(Pok%C3%A9mon)')
	}
	if (command === 'porygon') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Porygon_(Pok%C3%A9mon)')
	}
	if (command === 'porygon2') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Porygon2_(Pok%C3%A9mon)')
	}
	if (command === 'porygon-z') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Porygon-Z_(Pok%C3%A9mon)')
	}
	if (command === 'primarina') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Primarina_(Pok%C3%A9mon)')
	}
	if (command === 'primeape') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Primeape_(Pok%C3%A9mon)')
	}
	if (command === 'prinplup') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Prinplup_(Pok%C3%A9mon)')
	}
	if (command === 'probopass') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Probopass_(Pok%C3%A9mon)')
	}
	if (command === 'psyduck') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Psyduck_(Pok%C3%A9mon)')
	}
	if (command === 'pumpkaboo') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Pumpkaboo_(Pok%C3%A9mon)')
	}
	if (command === 'pupitar') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Pupitar_(Pok%C3%A9mon)')
	}
        if (command === 'purrloin') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Purrloin_(Pok%C3%A9mon)')
	}
	if (command === 'purugly') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Purugly_(Pok%C3%A9mon)')
	}
	if (command === 'pyroar') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Pyroar_(Pok%C3%A9mon)')
	}
	if (command === 'pyukumuku') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Pyukumuku_(Pok%C3%A9mon)')
	}
	if (command === 'quagsire') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Quagsire_(Pok%C3%A9mon)')
	}
	if (command === 'quilava') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Quilava_(Pok%C3%A9mon)')
	}
	if (command === 'quilladin') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Quilladin_(Pok%C3%A9mon)')
	}
	if (command === 'qwilfish') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Qwilfish_(Pok%C3%A9mon)')
	}
	if (command === 'raichu') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Raichu_(Pok%C3%A9mon)')
	}
	if (command === 'raikou') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Raikou_(Pok%C3%A9mon)')
	}
	if (command === 'ralts') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Ralts_(Pok%C3%A9mon)')
	}
	if (command === 'rampardos') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Rampardos_(Pok%C3%A9mon)')
	}
	if (command === 'rapidash') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Rapidash_(Pok%C3%A9mon)')
	}
	if (command === 'raticate') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Raticate_(Pok%C3%A9mon)')
	}
	if (command === 'rattata') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Rattata_(Pok%C3%A9mon)')
	}
	if (command === 'rayquaza') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Rayquaza_(Pok%C3%A9mon)')
	}
	if (command === 'regice') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Regice_(Pok%C3%A9mon)')
	}
	if (command === 'regigigas') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Regigigas_(Pok%C3%A9mon)')
	}
	if (command === 'regirock') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Regirock_(Pok%C3%A9mon)')
	}
	if (command === 'registeel') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Registeel_(Pok%C3%A9mon)')
	}
	if (command === 'relicanth') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Relicanth_(Pok%C3%A9mon)')
	}
	if (command === 'remoraid') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Remoraid_(Pok%C3%A9mon)')
	}
	if (command === 'reshiram') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Reshiram_(Pok%C3%A9mon)')
	}
	if (command === 'reuniclus') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Reuniclus_(Pok%C3%A9mon)')
	}
	if (command === 'rhydon') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Rhydon_(Pok%C3%A9mon)')
	}
        if (command === 'rhyhorn') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Rhyhorn_(Pok%C3%A9mon)')
	}
	if (command === 'rhyperior') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Rhyperior_(Pok%C3%A9mon)')
	}
	if (command === 'ribombee') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Ribombee_(Pok%C3%A9mon)')
	}
	if (command === 'riolu') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Riolu_(Pok%C3%A9mon)')
	}
	if (command === 'rockruff') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Rockruff_(Pok%C3%A9mon)')
	}
	if (command === 'roggenrola') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Roggenrola_(Pok%C3%A9mon)')
	}
	if (command === 'roselia') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Roselia_(Pok%C3%A9mon)')
	}
	if (command === 'roserade') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Roserade_(Pok%C3%A9mon)')
	}
	if (command === 'rotom') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Rotom_(Pok%C3%A9mon)')
	}
	if (command === 'rowlet') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Rowlet_(Pok%C3%A9mon)')
	}
	if (command === 'rufflet') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Rufflet_(Pok%C3%A9mon)')
	}
        if (command === 'sableye') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Sableye_(Pok%C3%A9mon)')
	}
	if (command === 'salamence') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Salamence_(Pok%C3%A9mon)')
	}
        if (command === 'salandit') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Salandit_(Pok%C3%A9mon)')
	}
	 if (command === 'salazzle') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Salazzle_(Pok%C3%A9mon)')
	}
	 if (command === 'samurott') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Samurott_(Pok%C3%A9mon)')
	}
	 if (command === 'sandile') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Sandile_(Pok%C3%A9mon)')
	}
	 if (command === 'sandshrew') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Sandshrew_(Pok%C3%A9mon)')
        }
	 if (command === 'sandslash') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Sandslash_(Pok%C3%A9mon)')
	}
	 if (command === 'sandygast') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Sandygast_(Pok%C3%A9mon)')
	 }
	 if (command === 'sawk') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Sawk_(Pok%C3%A9mon)')
	 }
	 if (command === 'sawsbuck') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Sawsbuck_(Pok%C3%A9mon)')
	 }
	 if (command === 'scatterbug') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Scatterbug_(Pok%C3%A9mon)')
	 }
	 if (command === 'sceptile') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Sceptile_(Pok%C3%A9mon)')
	 }
	 if (command === 'scizor') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Scizor_(Pok%C3%A9mon)')
	 }
	 if (command === 'scolipede') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Scolipede_(Pok%C3%A9mon)')
	 }
	 if (command === 'scrafty') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Scrafty_(Pok%C3%A9mon)')
	 }
	 if (command === 'scraggy') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Scraggy_(Pok%C3%A9mon)')
	 }
        if (command === 'scyther') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Scyther_(Pok%C3%A9mon)')
	}
	if (command === 'seadra') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Seadra_(Pok%C3%A9mon)')
	}
	if (command === 'seaking') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Seaking/_(Pok%C3%A9mon)')
	}
	if (command === 'sealeo') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Sealeo_(Pok%C3%A9mon)')
	}
	if (command === 'seedot') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Seedot_(Pok%C3%A9mon)')
	}
	if (command === 'seel') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Seel_(Pok%C3%A9mon)')
	}
	if (command === 'seismitoad') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Seismitoad_(Pok%C3%A9mon)')
	}
	if (command === 'sentret') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Sentret(Pok%C3%A9mon)')
	}
	if (command === 'serperior') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Serperior_(Pok%C3%A9mon)')
	}
	if (command === 'servine') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Servine_(Pok%C3%A9mon)')
	}
	if (command === 'seviper') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Seviper_(Pok%C3%A9mon)')
	}
	if (command === 'sewaddle') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Sewaddle_(Pok%C3%A9mon)')
	}
	if (command === 'sharpedo') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Sharpedo_(Pok%C3%A9mon)')
	}
	if (command === 'shaymin') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Shaymin_(Pok%C3%A9mon)')
	}
	if (command === 'shedinja') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Shedinja_(Pok%C3%A9mon)')
	}
	if (command === 'shelgon') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Shelgon_(Pok%C3%A9mon)')
	}
	if (command === 'shellder') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Shellder_(Pok%C3%A9mon)')
	}
	if (command === 'shellos') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Shellos_(Pok%C3%A9mon)')
	}
	if (command === 'shelmet') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Shelmet_(Pok%C3%A9mon)')
	}
	if (command === 'shieldon') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Shieldon_(Pok%C3%A9mon)')
	}
	if (command === 'shiftry') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Shiftry_(Pok%C3%A9mon)')
	}
	if (command === 'shiinotic') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Shiinotic_(Pok%C3%A9mon)')
	}
	if (command === 'shinx') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Shinx_(Pok%C3%A9mon)')
	}
	if (command === 'shroomish') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Shroomish_(Pok%C3%A9mon)')
	}
	if (command === 'shuckle') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Shuckle_(Pok%C3%A9mon)')
	}
	if (command === 'shuppet') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Shuppet_(Pok%C3%A9mon)')
	}
	if (command === 'sigilyph') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Sigilyph_(Pok%C3%A9mon)')
	}
	if (command === 'silcoon') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Silcoon_(Pok%C3%A9mon)')
	}
	if (command === 'silvally') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Silvally_(Pok%C3%A9mon)')
	}
	if (command === 'simipour') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Simipour_(Pok%C3%A9mon)')
	}
	if (command === 'simisage') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Simisage_(Pok%C3%A9mon)')
	}
	if (command === 'simisear') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Simisear_(Pok%C3%A9mon)')
	}
	if (command === 'skarmory') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Skarmory_(Pok%C3%A9mon)')
	}
	if (command === 'skiddo') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Skiddo_(Pok%C3%A9mon)')
	}
	if (command === 'skiploom') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Skiploom_(Pok%C3%A9mon)')
	}
	if (command === 'skitty') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Skitty_(Pok%C3%A9mon)')
	}
	if (command === 'skorupi') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Skorupi_(Pok%C3%A9mon)')
	}
	if (command === 'skrelp') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Skrelp_(Pok%C3%A9mon)')
	}
	if (command === 'skuntank') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Skuntank_(Pok%C3%A9mon)')
	}
	if (command === 'slaking') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Slaking_(Pok%C3%A9mon)')
	}
	if (command === 'slakoth') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Slakoth_(Pok%C3%A9mon)')
	}
	if (command === 'sliggoo') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Sliggoo_(Pok%C3%A9mon)')
	}
	if (command === 'slowbro') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Slowbro_(Pok%C3%A9mon)')
	}
	if (command === 'slowking') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Slowking_(Pok%C3%A9mon)')
	}
	if (command === 'slowpoke') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Slowpoke_(Pok%C3%A9mon)')
	}
	if (command === 'slugma') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Slugma_(Pok%C3%A9mon)')
	}
	if (command === 'slurpuff') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Slurpuff_(Pok%C3%A9mon)')
	}
	if (command === 'smeargle') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Smeargle_(Pok%C3%A9mon)')
	}
	if (command === 'smoochum') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Smoochum_(Pok%C3%A9mon)')
	}
	if (command === 'sneasel') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Sneasel_(Pok%C3%A9mon)')
	}
	if (command === 'snivy') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Snivy_(Pok%C3%A9mon)')
	}
	if (command === 'snorlax') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Snorlax_(Pok%C3%A9mon)')
	}
	if (command === 'snorunt') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Snorunt_(Pok%C3%A9mon)')
	}
	if (command === 'snover') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Snover_(Pok%C3%A9mon)')
	}
	if (command === 'snubbull') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Snubbull_(Pok%C3%A9mon)')
	}
	if (command === 'solgaleo') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Solgaleo_(Pok%C3%A9mon)')
	}
	if (command === 'solosis') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Solosis_(Pok%C3%A9mon)')
	}
	if (command === 'solrock') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Solrock_(Pok%C3%A9mon)')
	}
	if (command === 'spearow') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Spearow_(Pok%C3%A9mon)')
	}
	if (command === 'spewpa') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Spewpa_(Pok%C3%A9mon)')
	}
	if (command === 'spheal') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Spheal_(Pok%C3%A9mon)')
	}
	if (command === 'spinarak') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Spinarak_(Pok%C3%A9mon)')
	}
	if (command === 'spinda') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Spinda_(Pok%C3%A9mon)')
	}
	if (command === 'spiritomb') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Spiritomb_(Pok%C3%A9mon)')
	}
	if (command === 'spoink') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Spoink_(Pok%C3%A9mon)')
	}
	if (command === 'spritzee') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Spritzee_(Pok%C3%A9mon)')
	}
	if (command === 'squirtle') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Squirtle_(Pok%C3%A9mon)')
	}
	if (command === 'stakataka') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Stakataka_(Pok%C3%A9mon)')
	}
	if (command === 'stantler') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Stantler_(Pok%C3%A9mon)')
	}
	if (command === 'staraptor') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Staraptor_(Pok%C3%A9mon)')
	}
	if (command === 'staravia') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Staravia_(Pok%C3%A9mon)')
	}
	if (command === 'starly') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Starly_(Pok%C3%A9mon)')
	}
	if (command === 'starmie') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Starmie_(Pok%C3%A9mon)')
	}
	if (command === 'staryu') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Staryu_(Pok%C3%A9mon)')
	}
	if (command === 'steelix') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Steelix_(Pok%C3%A9mon)')
	}
	if (command === 'steenee') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Steenee_(Pok%C3%A9mon)')
	}
	if (command === 'stoutland') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Stoutland_(Pok%C3%A9mon)')
	}
	if (command === 'stufful') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Stufful_(Pok%C3%A9mon)')
	}
	if (command === 'stunfisk') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Stunfisk_(Pok%C3%A9mon)')
	}
	if (command === 'stunky') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Stunky_(Pok%C3%A9mon)')
	}
	if (command === 'sudowoodo') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Sudowoodo_(Pok%C3%A9mon)')
	}
	if (command === 'suicune') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Suicune_(Pok%C3%A9mon)')
	}
	if (command === 'sunflora') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Sunflora_(Pok%C3%A9mon)')
	}
	if (command === 'sunkern') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Sunkern_(Pok%C3%A9mon)')
	}
	if (command === 'surskit') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Surskit_(Pok%C3%A9mon)')
	}
	if (command === 'swablu') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Swablu_(Pok%C3%A9mon)')
	}
	if (command === 'swadloon') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Swadloon_(Pok%C3%A9mon)')
	}
	if (command === 'swalot') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Swalot_(Pok%C3%A9mon)')
	}
	if (command === 'swampert') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Swampert_(Pok%C3%A9mon)')
	}
	if (command === 'swanna') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Swanna_(Pok%C3%A9mon)')
	}
	if (command === 'swellow') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Swellow_(Pok%C3%A9mon)')
	}
	if (command === 'swinub') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Swinub_(Pok%C3%A9mon)')
	}
	if (command === 'swirlix') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Swirlix_(Pok%C3%A9mon)')
	}
	if (command === 'swoobat') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Swoobat_(Pok%C3%A9mon)')
	}
	if (command === 'sylveon') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Sylveon_(Pok%C3%A9mon)')
	}
	if (command === 'taillow') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Taillow_(Pok%C3%A9mon)')
	}
	if (command === 'talonflame') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Talonflame_(Pok%C3%A9mon)')
	}
	if (command === 'tangela') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Tangela_(Pok%C3%A9mon)')
	}
	if (command === 'tangrowth') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Tangrowth_(Pok%C3%A9mon)')
	}
	if (message.content === '!guin tapu bulu') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Tapu_Bulu_(Pok%C3%A9mon)')
	}
	if (message.content === '!guin tapu fini') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Tapu_Fini_(Pok%C3%A9mon)')
	}
	if (message.content === '!guin tapu koko') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Tapu_Koko_(Pok%C3%A9mon)')
	}
	if (message.content === '!guin tapu lele') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Tapu_Lele_(Pok%C3%A9mon)')
	}
	if (command === 'tauros') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Tauros_(Pok%C3%A9mon)')
	}
	if (command === 'teddiursa') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Teddiursa_(Pok%C3%A9mon)')
	}
 	if (command === 'tentacool') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Tentacool_(Pok%C3%A9mon)')
	}
	if (command === 'tentacruel') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Tentacruel_(Pok%C3%A9mon)')
	}
	if (command === 'tepig') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Tepig_(Pok%C3%A9mon)')
	}
	if (command === 'terrakion') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Terrakion_(Pok%C3%A9mon)')
	}
	if (command === 'throh') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Throh_(Pok%C3%A9mon)')
	}
	if (command === 'thundurus') {
        message.reply('https://bulbapedia.bulbagarden.net/wiki/Thundurus_(Pok%C3%A9mon)')
	}
	if (command === 'timburr') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Timburr_(Pok%C3%A9mon)')
	}
	if (command === 'tirtouga') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Tirtouga_(Pok%C3%A9mon)')
	}
	if (command === 'togedemaru') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Togedemaru_(Pok%C3%A9mon)')
	}
	if (command === 'togekiss') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Togekiss_(Pok%C3%A9mon)')
	}
	if (command === 'togepi') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Togepi_(Pok%C3%A9mon)')
	}
	if (command === 'togetic') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Togetic_(Pok%C3%A9mon)')
	}
	if (command === 'torchic') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Torchic_(Pok%C3%A9mon)')
	}
	if (command === 'torkoal') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Torkoal_(Pok%C3%A9mon)')
	}
	if (command === 'tornadus') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Tornadus_(Pok%C3%A9mon)')
	}
	if (command === 'torracat') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Torracat_(Pok%C3%A9mon)')
	}
	if (command === 'torterra') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Torterra_(Pok%C3%A9mon)')
	}
	if (command === 'totodile') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Totodile_(Pok%C3%A9mon)')
	}
	if (command === 'toucannon') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Toucannon_(Pok%C3%A9mon)')
	}
	if (command === 'toxapex') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Toxapex_(Pok%C3%A9mon)')
	}
	if (command === 'toxicroak') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Toxicroak_(Pok%C3%A9mon)')
	}
	if (command === 'tranquill') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Tranquill_(Pok%C3%A9mon)')
	}
	if (command === 'trapinch') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Trapinch_(Pok%C3%A9mon)')
	}
	if (command === 'treecko') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Treecko_(Pok%C3%A9mon)')
	}
	if (command === 'trevenant') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Trevenant_(Pok%C3%A9mon)')
	}
	if (command === 'tropius') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Tropius_(Pok%C3%A9mon)')
	}
	if (command === 'trubbish') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Trubbish_(Pok%C3%A9mon)')
	}
	if (command === 'trumbeak') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Trumbeak_(Pok%C3%A9mon)')
	}
	if (command === 'tsareena') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Tsareena_(Pok%C3%A9mon)')
	}
	if (command === 'turtonator') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Turtonator_(Pok%C3%A9mon)')
	}
	if (command === 'turtwig') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Turtwig_(Pok%C3%A9mon)')
	}
	if (command === 'tympole') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Tympole_(Pok%C3%A9mon)')
	}
	if (command === 'tynamo') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Tynamo_(Pok%C3%A9mon)')
	}
	if (message.content === '!guin type: null') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Type:_Null_(Pok%C3%A9mon)')
	}
	if (command === 'typhlosion') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Typhlosion_(Pok%C3%A9mon)')
	}
	if (command === 'tyranitar') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Tyranitar_(Pok%C3%A9mon)')
	}
	if (command === 'tyrantrum') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Tyrantrum_(Pok%C3%A9mon)')
	}
	if (command === 'tyrogue') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Tyrogue_(Pok%C3%A9mon)')
	}
	if (command === 'tyrunt') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Tyrunt_(Pok%C3%A9mon)')
	}
	if (command === 'umbreon') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Umbreon_(Pok%C3%A9mon)')
	}
	if (command === 'unfezant') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Unfezant_(Pok%C3%A9mon)')
	}
	if (command === 'unown') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Unown_(Pok%C3%A9mon)')
	}
	if (command === 'ursaring') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Ursaring_(Pok%C3%A9mon)')
	}
	if (command === 'uxie') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Uxie_(Pok%C3%A9mon)')
	}
        if (command === 'vanillish') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Vanillish_(Pok%C3%A9mon)')
	}
	if (command === 'vanillite') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Vanillite_(Pok%C3%A9mon)')
	}
	if (command === 'vanilluxe') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Vanilluxe_(Pok%C3%A9mon)')
	}
	if (command === 'vaporeon') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Vaporeon_(Pok%C3%A9mon)')
	}
	if (command === 'venipede') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Venipede_(Pok%C3%A9mon)')
	}
	if (command === 'venomoth') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Venomoth_(Pok%C3%A9mon)')
	}
	if (command === 'venonat') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Venonat_(Pok%C3%A9mon)')
	}
	if (command === 'venusaur') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Venusaur_(Pok%C3%A9mon)')
	}
	if (command === 'vespiquen') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Vespiquen_(Pok%C3%A9mon)')
	}
	if (command === 'vibrava') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Vibrava_(Pok%C3%A9mon)')
	}
	if (command === 'victini') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Victini_(Pok%C3%A9mon)')
	}
	if (command === 'victreebel') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Victreebel_(Pok%C3%A9mon)')
	}
	if (command === 'vigoroth') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Vigoroth_(Pok%C3%A9mon)')
	}
	if (command === 'vikavolt') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Vikavolt_(Pok%C3%A9mon)')
	}
	if (command === 'vileplume') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Vileplume_(Pok%C3%A9mon)')
	}
	if (command === 'virizion') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Virizion_(Pok%C3%A9mon)')
	}
	if (command === 'vivillon') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Vivillon_(Pok%C3%A9mon)')
	}
	if (command === 'volbeat') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Volbeat_(Pok%C3%A9mon)')
	}
	if (command === 'volcanion') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Volcanion_(Pok%C3%A9mon)')
	}
	if (command === 'volcarona') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Volcarona_(Pok%C3%A9mon)')
	}
	if (command === 'voltorb') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Voltorb_(Pok%C3%A9mon)')
	}
	if (command === 'vullaby') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Vullaby_(Pok%C3%A9mon)')
	}
	if (command === 'vulpix') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Vulpix_(Pok%C3%A9mon)')
	}
	if (command === 'wailmer') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Wailmer_(Pok%C3%A9mon)')
	}
	if (command === 'wailord') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Wailord_(Pok%C3%A9mon)')
	}
	if (command === 'walrein') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Walrein_(Pok%C3%A9mon)')
	}
	if (command === 'wartortle') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Wartortle_(Pok%C3%A9mon)')
	}
	if (command === 'watchog') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Watchog_(Pok%C3%A9mon)')
	}
	if (command === 'weavile') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Weavile_(Pok%C3%A9mon)')
	}
	if (command === 'weedle') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Weedle_(Pok%C3%A9mon)')
	}
	if (command === 'weepinbell') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Weepinbell_(Pok%C3%A9mon)')
	}
	if (command === 'weezing') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Weezing_(Pok%C3%A9mon)')
	}
	if (command === 'whimsicott') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Whimsicott_(Pok%C3%A9mon)')
	}
	if (command === 'whirlipede') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Whirlipede_(Pok%C3%A9mon)')
	}
	if (command === 'whiscash') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Whiscash_(Pok%C3%A9mon)')
	}
	if (command === 'whismur') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Whismur_(Pok%C3%A9mon)')
	}
	if (command === 'wigglytuff') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Wigglytuff_(Pok%C3%A9mon)')
	}
	if (command === 'wimpod') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Wimpod_(Pok%C3%A9mon)')
	}
	if (command === 'wingull') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Wingull_(Pok%C3%A9mon)')
	}
	if (command === 'wishiwashi') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Wishiwashi_(Pok%C3%A9mon)')
	}
	if (command === 'wobbuffet') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Wobbuffet_(Pok%C3%A9mon)')
	}
	if (command === 'woobat') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Woobat_(Pok%C3%A9mon)')
	}
	if (command === 'wooper') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Wooper_(Pok%C3%A9mon)')
	}
	if (command === 'wormadam') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Wormadam_(Pok%C3%A9mon)')
	}
	if (command === 'wurmple') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Wurmple_(Pok%C3%A9mon)')
	}
	if (command === 'wynaut') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Wynaut_(Pok%C3%A9mon)')
	}
	if (command === 'xatu') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Xatu_(Pok%C3%A9mon)')
	}
	if (command === 'xerneas') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Xerneas_(Pok%C3%A9mon)')
	}
	if (command === 'xurkitree') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Xurkitree_(Pok%C3%A9mon)')
	}
	if (command === 'yamask') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Yamask_(Pok%C3%A9mon)')
	}
	if (command === 'yanma') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Yanma_(Pok%C3%A9mon)')
	}
	if (command === 'yanmega') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Yanmega_(Pok%C3%A9mon)')
	}
	if (command === 'yungoos') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Yungoos_(Pok%C3%A9mon)')
	}
	if (command === 'yveltal') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Yveltal_(Pok%C3%A9mon)')
	}
	if (command === 'zangoose') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Zangoose_(Pok%C3%A9mon)')
	}
	if (command === 'zapdos') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Zapdos_(Pok%C3%A9mon)')
	}
	if (command === 'zebstrika') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Zebstrika_(Pok%C3%A9mon)')
	}
	if (command === 'zekrom') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Zekrom_(Pok%C3%A9mon)')
	}
	if (command === 'zeraora') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Zeraora_(Pok%C3%A9mon)')
	}
	if (command === 'zigzagoon') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Zigzagoon_(Pok%C3%A9mon)')
	}
	if (command === 'zoroark') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Zoroark_(Pok%C3%A9mon)')
	}
	if (command === 'zorua') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Zorua_(Pok%C3%A9mon)')
	}
	if (command === 'zubat') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Zubat_(Pok%C3%A9mon)')
	}
	if (command === 'zweilous') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Zweilous_(Pok%C3%A9mon)')
	}
	if (command === 'zygarde') {
	message.reply('https://bulbapedia.bulbagarden.net/wiki/Zygarde_(Pok%C3%A9mon)')
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
    });
	
client.login(process.argv[2])
