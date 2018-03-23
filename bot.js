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
    });
	
client.login(process.argv[2])
