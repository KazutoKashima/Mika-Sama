const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const mongoEco = require('discord-mongodb-economy');

module.exports = class LevelCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'level',
			description: 'Displays your level!',
			group: 'fun',
			memberName: 'level',
			aliases: ['lvl'],
			usage: 'level',
			guildOnly: true,
		});
	}

	async run(msg) {
		//let mention = msg.mentions.members.first() ? msg.mentions.members.first() : msg.member;
		//let member = await mongoEco.fetchMember(mention.id, msg.guild.id);
		//if (!member) return msg.channel.send("You haven't earned any xp or level...")
		msg.channel.send(`sorry but this command is undergoing a rework, it should be ready soon!`)
	}
}
