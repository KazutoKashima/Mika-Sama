//
//'use strict';
require('dotenv').config();
const ytdl = require("ytdl-core");
const ffmpeg = require("ffmpeg-static");
const sqlite = require('sqlite');
const { TOKEN, OWNERS, PREFIX, INVITE } = process.env;
const path = require('path');
const { Intents, MessageEmbed, Collection } = require('discord.js');
const Client = require('./structures/Client');
const client = new Client({
	commandPrefix: PREFIX,
	owner: OWNERS.split(','),
	invite: INVITE,
	disableMentions: 'everyone',
	ws: { intents: Intents.ALL },
	unknownCommandResponse: false,
});
const { formatNumber } = require('./util/Util');
const queue = new Map();

/**
// DBL stuff
const DBL = require("dblapi.js");
const dbl = new DBL('token', { webhookPort: 5000, webhookAuth: 'password' });
dbl.webhook.on('ready', hook => {
	console.log(`Webhook running at http://${hook.hostname}:${hook.port}${hook.path}`);
});

dbl.webhook.on('vote', vote => {
	console.log(`User with ID ${vote.user} just voted for me!`);
});

dbl.on('posted', () => {
	console.log("Server count posted!");
});
**/

// bearer stuff
const Bearer = require('@bearer/node-agent');
Bearer.init({
	secretKey: 'app_8923adba94261832124741ec66bf3935344132e5994dbbfc51',
  	stripSensitiveData: true,
}).then(() => {
	console.log('Bearer initialized!\n');
});

// bearer setup for imgur
var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
var album_id = 'ou2aUxp';
var api_key = '83de32dbc0a71e1';
var request_url = "https://api.imgur.com/3/album/" + album_id;
function requestAlbum() {
  var req = new XMLHttpRequest();
  
  req.onreadystatechange = function() { 
     if (req.readyState == 4 && req.status == 200) {
       processRequest(req.responseText);
     } else {
       console.log("Error with Imgur Request.");
     }
  }
  req.open("GET", request_url, true); // true for asynchronous     
  req.setRequestHeader('Authorization', 'Client-ID ' + api_key);
  req.send(null);
}
function processRequest(response_text) {
  if (response_text == "Not found") {
    console.log("Imgur album not found.");
  } else {
    var json = JSON.parse(response_text);
    // You got your response back!
    // Do your thing here.
  }
}
requestAlbum();

// client command registry
client.registry
	.registerDefaultTypes()
	.registerGroups([
		['roleplay', 'Roleplay'],
		['utils', 'Utils'],
		['economy', 'Economy'],
		['admin', 'Admin'],
		['fun', 'Fun'],
		["auto", "Auto"],
	])
	.registerDefaultGroups()
	.registerDefaultCommands({
		ping: true,
		reload: true,
		prefix: false,
		help: false,
		unknownCommand: false
	})
	.registerCommandsIn(path.join(__dirname, 'commands'));

client.on('ready', () => {
	client.logger.info(`[READY] Logged in as ${client.user.tag}! ID: ${client.user.id}`);
	
	// Push client-related activities
	client.activities.push(
		{ text: () => `${formatNumber(client.guilds.cache.size)} servers`, type: 'WATCHING' },
		{ text: () => `with ${formatNumber(client.registry.commands.size)} commands`, type: 'PLAYING' },
		{ text: () => `${formatNumber(client.channels.cache.size)} channels`, type: 'WATCHING' }
	);
	
	// Interval to change activity every minute
	client.setInterval(() => {
		const activity = client.activities[Math.floor(Math.random() * client.activities.length)];
		const text = typeof activity.text === 'function' ? activity.text() : activity.text;
		client.user.setActivity(text, { type: activity.type });
	}, 60000);
});

client.on('message', async msg => {
	const hasText = Boolean(msg.content);
	const hasImage = msg.attachments.size !== 0;
	const hasEmbed = msg.embeds.length !== 0;
	if (msg.author.bot || (!hasText && !hasImage && !hasEmbed)) return;
	//let args = msg.content.split(' ').slice(1); // all the args behind the command name with the prefix
	//const cont = args.shift().toLowerCase();
	
	// Mika trynna defend herself
	if (msg.content === `Mika you're dsyfunctional` && msg.channel.type !== "dm" || msg.content === `Mika youre dysfunctional` && msg.channel.type !== "dm") {
		try {
			msg.channel.send("No I'm not!").then(newMsg => {
				if (newMsg.content === `Yes you are` && newMsg.author.id === owner) {
					newMsg.channel.send(`ISTG! <@!${owner}> I'm not dysfunctional :sob:`);
				} else if (newMsg.content === `Yes you are` && newMsg.author.id !== owner) {
					newMsg.send(`:sob:\nYou think I'm dysfunctional too, <@!${newMsg.author.id}?`).then(rMsg => {
						if(rMsg.content.toLowerCase() === "Yep") {
							rMsg.channel.send("I'm sad now... :cry:");
						}
					});
				}
			});
		} catch (error) {
			console.error(error.stack);
		}
	}
	
	//  music stuff
	const serverQueue = queue.get(msg.guild.id);

	try { 
		if (msg.content.startsWith(`${PREFIX}play`)) {
			execute(msg, serverQueue);
			return;
		} 
		
		else if (msg.content.startsWith(`${PREFIX}skip`)) {
			skip(msg, serverQueue);
			return;
		}
		
		else if (msg.content.startsWith(`${PREFIX}stop`)) {
			stop(msg, serverQueue);
			return;
		}
	}
	catch (error) {
		console.error(error.stack);
		msg.channel.send("Sorry but there was an error!")
	}
});

// music functions
async function execute(msg, serverQueue) {
  const args = msg.content.split(" ");

  const voiceChannel = msg.member.voice.channel;
  if (!voiceChannel)
    return msg.channel.send(
      "You need to be in a voice channel to play music!"
    );
  const permissions = voiceChannel.permissionsFor(msg.client.user);
  if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
    return msg.channel.send(
      "I need the permissions to join and speak in your voice channel!"
    );
  }

  const songInfo = await ytdl.getInfo(args[1]);
  const song = {
    title: songInfo.title,
    url: songInfo.video_url
  };

  if (!serverQueue) {
    const queueContruct = {
      textChannel: msg.channel,
      voiceChannel: voiceChannel,
      connection: null,
      songs: [],
      volume: 5,
      playing: true
    };

    queue.set(msg.guild.id, queueContruct);

    queueContruct.songs.push(song);

    try {
      var connection = await voiceChannel.join();
      queueContruct.connection = connection;
      play(msg.guild, queueContruct.songs[0]);
    } catch (err) {
      console.log(err);
      queue.delete(msg.guild.id);
      return msg.channel.send(err);
    }
  } else {
    serverQueue.songs.push(song);
    return msg.channel.send(`${song.title} has been added to the queue!`);
  }
}

function skip(msg, serverQueue) {
  if (!msg.member.voice.channel)
    return msg.channel.send(
      "You have to be in a voice channel to stop the music!"
    );
  if (!serverQueue)
    return msg.channel.send("There is no song that I could skip!");
  serverQueue.connection.dispatcher.end();
}

function stop(msg, serverQueue) {
  if (!msg.member.voice.channel)
    return msg.channel.send(
      "You have to be in a voice channel to stop the music!"
    );
  serverQueue.songs = [];
  serverQueue.connection.dispatcher.end();
}

function play(guild, song) {
  const serverQueue = queue.get(guild.id);
  if (!song) {
    serverQueue.voiceChannel.leave();
    queue.delete(guild.id);
    return;
  }

  const dispatcher = serverQueue.connection
    .play(ytdl(song.url))
    .on("finish", () => {
      serverQueue.songs.shift();
      play(guild, serverQueue.songs[0]);
    })
    .on("error", error => console.error(error));
  dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
  serverQueue.textChannel.send(`Start playing: **${song.title}**`);
}


client.on('disconnect', event => {
	client.logger.error(`[DISCONNECT] Disconnected with code ${event.code}`);
	//client.exportCommandLeaderboard();
	process.exit(0);
});

client.on('error', err => client.logger.error(err.stack));

client.on('warn', warn => client.logger.warn(warn));

client.on('commandRun', command => {
	if (command.uses === undefined) return;
	command.uses++;
});

client.on('commandError', (command, err) => client.logger.error(`[COMMAND:${command.name}]\n${err.stack}`));

// join message
const newUsers = [];

client.on("guildMemberAdd", (member) => {
	const guild = member.guild;
	
	welcomeGif = [
		`https://64.media.tumblr.com/0ff48dce2689bd713c215bc6794ee479/tumblr_o328lujnMO1tydz8to1_540.gifv`,
		`https://media.tenor.com/images/49c76a66e5e7b224283905f520b90426/tenor.gif`,
		`https://thumbs.gfycat.com/FaroffEmbarrassedHerald-size_restricted.gif`,
		`https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSdL51HM-lKo2muxCB-d2WJMxKxm3FS-xU0rw&usqp=CAU`,
		`https://i.imgur.com/rViw7vP.gif`,
		`https://i.imgur.com/UcGioIH.gif`,
		`https://i.imgur.com/bwuik6j.gif`,
		`https://i.imgur.com/se1uFas.gif`,
		`https://i.imgur.com/foSkpOV.gif`,
		`https://i.imgur.com/FuINlu9.gif`,
		`https://i.imgur.com/TXlp1YT.gif`,
		`https://i.imgur.com/lgbPwfk.gif`,
		`https://tenor.com/view/hello-happy-feet-penguin-wave-waving-gif-6103866`,
	]
	let wGif =  welcomeGif[Math.floor(Math.random * welcomeGif.length)];
	// embed stuff
	let welcomeEmbed = new MessageEmbed()
	.setColor('#ffffff')
	.setTitle("Someone joined!!!")
	.setDescription(`Lets say "Hello" to ${member}!\nWe hope they enjoy their stay with us!!`)
	.setImage(wGif)
	.setTimestamp()
	.setThumbnail(`${guild.iconURL()}`)
	
	if (guild.id ==='756031414616719430') {
		try {
			
			if (!newUsers[guild.id]) newUsers[guild.id] = new Collection();
			newUsers[guild.id].set(member.id, member.user);
			
			if (newUsers[guild.id].size > 1) {
				const userlist = newUsers[guild.id].map(u => u.toString()).join(" ");
				guild.channels.cache.find(channel => channel.id === "756046044218916884").send("Welcome our new users!\n" + userlist);
				guild.channels.cache.find(channel => channel.id === "756046044218916884").send(welcomeEmbed);
				newUsers[guild.id].clear();
			}
		} catch(error) {
			console.log(error.stack);
		}
	}
	else {
		return;
	}
});

// leave message
client.on('guildMemberRemove', member => {
	const guild = member.guild;
	if (guild.id === "756031414616719430"){
		try {
			let leaveEmbed = new MessageEmbed()
			.setColor('#ffffff')
			.setTitle("Someone left!")
			.setDescription(`Lets say "Goodbye" to ${member}!\nWe hope they enjoyed their stay!`)
			.setTimestamp()
			.setThumbnail(`${guild.iconURL()}`)
			const channel = member.guild.channels.cache.find(ch => ch.id === '756046044218916884');
			if(!channel) return;
			channel.send(leaveEmbed);
			if (newUsers[guild.id].has(member.id)) newUsers.delete(member.id);
		} catch (error) {
			console.log(error.stack);
		}
	}
	else {
		return;
	}
});

client.login(TOKEN);