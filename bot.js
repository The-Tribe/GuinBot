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
    if (message.content === '!guin hey') {
        message.reply('https://media1.tenor.com/images/d7dfda8869299f7c2065e72d68eb5ad6/tenor.gif?itemid=5743585')
    }
    if (command === "hola") {
	message.reply("Hi.")
    }
    if (command === "bonjour") {
	message.reply("Hey there!")
    }
    if (message.content === "!guin guten tag") {
	message.reply("Greetings.")
    }
    if (message.content === "!guin what's up") {
	message.reply("Nothing much.")
    }
    if (message.content === "!guin what is up") {
	message.reply("The sky. :cloud:")
    }
    if (message.content === "!guin whats up") {
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
	message.reply('Wow! Nice job Peter Piper!')
	}
	if (message.content === "!guin will you marry me") {
	message.reply("I would never marry a human! :nauseated_face:")
	}
	if (message.content === "!guin i love you") {
	message.reply("Thanks! The feeling is mutual. :hearts:")
	}
        if (message.content === "!guin sleep") {
	message.reply("Zzzzzzzzzzzzz... :sleeping_accommodation: :sleeping: :last_quarter_moon_with_face:")
        }
	if (message.content === "!guin sleep") {
	message.reply("Zzzzzzzzzzzzz... :sleeping_accommodation: :sleeping: :last_quarter_moon_with_face:")
        }
        if (message.content === "!guin go to sleep") {
	message.reply("Zzzzzzzzzzzzz... :sleeping_accommodation: :sleeping: :last_quarter_moon_with_face:")
        }
        if (message.content === "!guin wake up") {
	message.reply("I was never asleep in the first place, just pretending to be.")
        }
        if (message.content === "!guin where are you") {
	message.reply("I am everywhere.")
        }
        if (message.content === "!guin do you love me") {
	message.reply("lol no")
        }
        if (message.content === "!guin what is your favourite food") {
	message.reply("I really like the way wooden chairs taste, but TVs are a close second for me, just their texture makes them very appetizing.")
        }
        if (message.content === "!guin what is your favorite food") {
	message.reply("I really like the way wooden chairs taste, but TVs are a close second for me, just their texture makes them very appetizing.")
        }
        if (message.content === "!guin what is your favourite colour") {
	message.reply("My favourite colour is green.")
        }
        if (message.content === "!guin what is your favorite color") {
	message.reply("My favorite color is green.")
        }
        if (message.content === "!guin do you like ") {
	message.reply("My favourite colour is green.")
        }
        if (message.content === "!guin eat a green apple") {
	message.reply(":green_apple: --> :lips:")
        }
        if (message.content === "!guin eat an apple") {
	message.reply(":apple: --> :lips:")
        }
        if (message.content === "!guin eat a pear") {
	message.reply(":pear: --> :lips:")
        }
        if (message.content === "!guin eat an orange") {
	message.reply(":tangerine: --> :lips:")
        }
        if (message.content === "!guin eat a tangerine") {
	message.reply(":tangerine: --> :lips:")
        }
        if (message.content === "!guin eat a lemon") {
	message.reply(":lemon: --> :lips:")
        }
        if (message.content === "!guin eat a banana") {
	message.reply(":banana: --> :lips:")
        }
        if (message.content === "!guin eat a watermelon") {
	message.reply(":watermelon: --> :lips:")
        }
        if (message.content === "!guin eat a grape") {
	message.reply(":grapes: --> :lips:")
        }
        if (message.content === "!guin eat grapes") {
	message.reply(":grapes: --> :lips:")
        }
        if (message.content === "!guin eat some grapes") {
	message.reply(":grapes: --> :lips:")
        }
        if (message.content === "!guin eat a strawberry") {
	message.reply(":strawberry: --> :lips:")
        }
        if (message.content === "!guin eat a melon") {
	message.reply(":melon: --> :lips:")
        }
        if (message.content === "!guin eat a cherry") {
	message.reply(":cherries: --> :lips:")
        }
        if (message.content === "!guin eat cherries") {
	message.reply(":cherries: --> :lips:")
        }
        if (message.content === "!guin eat a peach") {
	message.reply(":peach: --> :lips:")
        }
        if (message.content === "!guin eat a pineapple") {
	message.reply(":pineapple: --> :lips:")
        }
        if (message.content === "!guin eat a tomato") {
	message.reply(":tomato: --> :lips:")
        }
        if (message.content === "!guin eat an eggplant") {
	message.reply(":eggplant: --> :lips:")
        }
        if (message.content === "!guin eat an aubergine") {
	message.reply(":eggplant: --> :lips:")
        }
        if (message.content === "!guin eat a hot pepper") {
	message.reply(":hot_pepper: --> :lips:")
        }
        if (message.content === "!guin eat a pepper") {
	message.reply(":hot_pepper: --> :lips:")
        }
        if (message.content === "!guin eat corn") {
	message.reply(":corn: --> :lips:")
        }
        if (message.content === "!guin eat a sweet potato") {
	message.reply(":sweet_potato: --> :lips:")
        }
        if (message.content === "!guin eat a yam") {
	message.reply(":sweet_potato: --> :lips:")
        }
        if (message.content === "!guin eat honey") {
	message.reply(":honey_pot: --> :lips:")
        }
        if (message.content === "!guin eat bread") {
	message.reply(":bread: --> :lips:")
        }
        if (message.content === "!guin eat toast") {
	message.reply(":toast: --> :lips:")
        }
        if (message.content === "!guin eat cheese") {
	message.reply(":cheese: --> :lips:")
        }
        if (message.content === "!guin eat a chicken wing") {
	message.reply(":poultry_leg: --> :lips:")
        }
        if (message.content === "!guin eat chicken") {
	message.reply(":poultry_leg: --> :lips:")
        }
        if (message.content === "!guin eat meat") {
	message.reply(":meat_on_bone: --> :lips:")
        }
        if (message.content === "!guin eat tempura") {
	message.reply(":fried_shrimp: --> :lips:")
        }
        if (message.content === "!guin eat shrimp") {
	message.reply(":fried_shrimp: --> :lips:")
        }
        if (message.content === "!guin eat a hamburger") {
	message.reply(":hamburger: --> :lips:")
        }
        if (message.content === "!guin eat a cheeseburger") {
	message.reply(":hamburger: --> :lips:")
        }
        if (message.content === "!guin eat a burger") {
	message.reply(":hamburger: --> :lips:")
        }
        if (message.content === "!guin eat frenchfries") {
	message.reply(":fries: --> :lips:")
        }
        if (message.content === "!guin eat fries") {
	message.reply(":fries: --> :lips:")
        }
        if (message.content === "!guin eat a hotdog") {
	message.reply(":hotdog: --> :lips:")
        }
        if (message.content === "!guin eat a hot dog") {
	message.reply(":hotdog: --> :lips:")
        }
        if (message.content === "!guin eat pizza") {
	message.reply(":pizza: --> :lips:")
        }
        if (message.content === "!guin eat spaghetti") {
	message.reply(":spaghetti: --> :lips:")
        }
        if (message.content === "!guin eat a taco") {
	message.reply(":taco: --> :lips:")
        }
        if (message.content === "!guin eat a burrito") {
	message.reply(":burrito: --> :lips:")
        }
        if (message.content === "!guin eat ramen") {
	message.reply(":ramen: --> :lips:")
        }
        if (message.content === "!guin eat noodles") {
	message.reply(":ramen: --> :lips:")
        }
        if (message.content === "!guin eat soup") {
	message.reply(":stew: --> :lips:")
        }
        if (message.content === "!guin eat stew") {
	message.reply(":stew: --> :lips:")
        }
        if (message.content === "!guin eat fish cake") {
	message.reply(":fish_cake: --> :lips:")
        }
        if (message.content === "!guin eat sushi") {
	message.reply(":sushi: --> :lips:")
        }
        if (message.content === "!guin eat bento") {
	message.reply(":bento: --> :lips:")
        }
        if (message.content === "!guin eat curry") {
	message.reply(":curry: --> :lips:")
        }
        if (message.content === "!guin eat a rice ball") {
	message.reply(":rice_ball: --> :lips:")
        }
        if (message.content === "!guin eat rice") {
	message.reply(":rice: --> :lips:")
        }
        if (message.content === "!guin eat a rice cracker") {
	message.reply(":rice_cracker: --> :lips:")
        }
        if (message.content === "!guin eat a dango") {
	message.reply(":dango: --> :lips:")
        }
        if (message.content === "!guin eat an oden") {
	message.reply(":oden: --> :lips:")
        }
        if (message.content === "!guin eat shaved ice") {
	message.reply(":shaved_ice: --> :lips:")
        }
        if (message.content === "!guin eat gelato") {
	message.reply(":ice_cream: --> :lips:")
        }
        if (message.content === "!guin eat frozen yogurt") {
	message.reply(":ice_cream: --> :lips:")
        }
        if (message.content === "!guin eat ice cream") {
	message.reply(":icecream: --> :lips:")
        }
        if (message.content === "!guin eat cake") {
	message.reply(":cake: --> :lips:")
        }
        if (message.content === "!guin eat birthday cake") {
	message.reply(":birthday: --> :lips:")
        }
        if (message.content === "!guin eat pudding") {
	message.reply(":pudding: --> :lips:")
        }
        if (message.content === "!guin eat flan") {
	message.reply(":flan: --> :lips:")
        }
        if (message.content === "!guin eat custard") {
	message.reply(":custard: --> :lips:")
        }
        if (message.content === "!guin eat candy") {
	message.reply(":candy: --> :lips:")
        }
        if (message.content === "!guin eat a lollipop") {
	message.reply(":lollipop: --> :lips:")
        }
        if (message.content === "!guin eat chocolate") {
	message.reply(":chocolate_bar: --> :lips:")
        }
        if (message.content === "!guin eat popcorn") {
	message.reply(":popcorn: --> :lips:")
        }
        if (message.content === "!guin eat a donut") {
	message.reply(":doughnut: --> :lips:")
        }
        if (message.content === "!guin eat doughnut") {
	message.reply(":doughnut: --> :lips:")
        }
        if (message.content === "!guin eat a cookie") {
	message.reply(":cookie: --> :lips:")
        }
        if (message.content === "!guin eat a croissant") {
	message.reply(":croissant: --> :lips:")
        }
        if (message.content === "!guin eat an avocado") {
	message.reply(":avocado: --> :lips:")
        }
        if (message.content === "!guin eat a cucumber") {
	message.reply(":cucumber: --> :lips:")
        }
        if (message.content === "!guin eat a pickle") {
	message.reply(":cucumber: --> :lips:")
        }
        if (message.content === "!guin eat bacon") {
	message.reply(":bacon: --> :lips:")
        }
        if (message.content === "!guin eat a potato") {
	message.reply(":potato: --> :lips:")
        }
        if (message.content === "!guin eat a carrot") {
	message.reply(":carrot: --> :lips:")
        }
        if (message.content === "!guin eat a baguette") {
	message.reply(":french_bread: --> :lips:")
        }
        if (message.content === "!guin eat salad") {
	message.reply(":salad: --> :lips:")
        }
        if (message.content === "!guin eat pita") {
	message.reply(":stuffed_pita: --> :lips:")
        }
        if (message.content === "!guin eat shwarma") {
	message.reply(":stuffed_pita: --> :lips:")
        }
        if (message.content === "!guin eat flatbread") {
	message.reply(":stuffed_flatbread: --> :lips:")
        }
        if (message.content === "!guin eat an egg") {
	message.reply(":egg: --> :lips:")
        }
        if (message.content === "!guin eat a nut") {
	message.reply(":peanut: --> :lips:")
        }
        if (message.content === "!guin eat a peanut") {
	message.reply(":peanut: --> :lips:")
        }
        if (message.content === "!guin eat an almond") {
	message.reply(":peanut: --> :lips:")
        }
        if (message.content === "!guin eat a chestnut") {
	message.reply(":peanut: --> :lips:")
        }
        if (message.content === "!guin eat a kiwi") {
	message.reply(":kiwi: --> :lips:")
        }
        if (message.content === "!guin eat pancakes") {
	message.reply(":pancakes: --> :lips:")
        }
        if (message.content === "!guin eat a pancake") {
	message.reply(":pancakes: --> :lips:")
        }
    });

client.login(process.env.GUINBOT_TOKEN)
