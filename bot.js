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
    });
	
client.login(process.argv[2])
