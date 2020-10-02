const { Discord, MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-commando');
const db = require('quick.db');

module.exports = class LevelCommand extends Command {
	constructor(client) {
		super(client, {
			name: "level",
			aliases: ['lvl'],
			group: "fun",
			memberName: "level",
			description: "Shows the user's levels",
			guildOnly: true,
		});
	}
	
	run(message) {
		let args = message.content.split(' ').slice(1)
		let arg = args.join(' ');
		
		let messagefetch = db.fetch(`messages_${message.guild.id}.${message.author.id}`)
		let levelfetch = db.fetch(`level_${message.guild.id}.${message.author.id}`)
		
		if (messagefetch === null) messagefetch = '0';
		if (levelfetch === null) levelfetch = '0';
		
		let embed = new MessageEmbed()
		.setDescription(`${message.author}, You're level: \`${levelfetch}\` & Have sent: \`${messagefetch}\` Messages!`)
		.setColor("#ff38ff")
		.setTimestamp()
		
		message.embed(embed);
	}
}