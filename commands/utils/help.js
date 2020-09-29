
require('dotenv').config();
const { Command } = require('discord.js-commando');
const { MessageEmbed, Discord } = require('discord.js');
const { prefix } = process.env.PREFIX;

module.exports = class helpCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'help',
			group: 'utils',
			memberName: 'help',
			description: 'List all of my commands or info about a specific command.',
			aliases: ['commands', 'h'],
			usage: '[command name]',
			cooldown: 5,
		});
	}
	
	run(message, args) {
		const data = [];
		const { commands } = message.client;
		
		if(!args.length) {
			
		let helpEmbed = new MessageEmbed()
			/* ----------------------Old Embed----------------------
			.setDescription("Mika's Help command, Prefix: a!")
			.setColor('#ffffff')
			.addField('Avatar', "Gives yours or someone else's avatar!",inline=false)
			.addField('bot-info','gives the info on me!',inline=false)
			.addField('server-info', 'shows the info of the server', inline=false)
			.addField('ping', 'checks my latency!', inline=false)
			.addField("funfact", "sends a random fact!", inline=false)
			.addField("hug", "gives a user a hug", inline=false)
			.addField("punch", 'punches a user', inline=false)
			.addField("poke",'pokes a user', inline=false)
			.addField("slap",'slaps a user', inline=false)
			*/
			//----------------------new embed----------------------//
			.setTitle("Mika's Help Command, *prefix: m!*")
			.setColor("#673ab7")
			.addField("**Utility:** _Enabled_", "ping, server info, bot info, \nsupport invite, help")
			.addField("**Roleplay:** _Enabled_", "Hug, Kill, Pat,\nPoke, Punch, Slap\n*More is to come!*")
			.addField("**Fun:** _Enabled_", "funfact, vote, avatar\n\"Mika you're dysfunctional\"")
			.addField("**Economy:** _Disabled_", "work, deposit/bank/depos, rob")
			.addField("**Music:** _Enabled_", "Playing, Skip, Stop")
			.addField("**Administrator:** _Enabled_", "Kick, Ban, Report, Purge")
			.setFooter(`Join my server with this: https://discord.gg/FaG6rSM`)
			data.push("Here's a list of all my commands:");
		//data.push(`\nYou can send \`${prefix}help [command name]\` to get help on a command`);
			
		return message.author.send(helpEmbed)
			.then(() => {
				if (message.channel.type === 'dm') return;
				message.say('I\'ve sent you a DM with all my commads!');
			})
			.catch(error => {
				console.error(err.stack);
				message.say("It seems that I can't DM you! Do you have your DMs open?");
			});
		}
		const name = args[0].toLowerCase();
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

		if (!command) {
			return message.say('that\'s not a valid command!');
		}
		

		message.embed(helpEmbed);
	}
};