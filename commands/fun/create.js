const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const mongoEco = require('discord-mongodb-economy');

module.exports = class LevelCreareCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'start-level',
			aliases: ['start', 'leveling', 'start lvl', 'strt-lvl', 'strt lvl'],
			description: 'Adds you into the leveling system!!',
			group: 'fun',
			memberName: 'create',
			aliases: ['cr'],
			usage: 'create',
			guildOnly: true,
		});
	}
	
	async run (msg) {
		//let created = await mongoEco.createMember(msg.member.id, msg.guild.id)
		//console.log(created);
		msg.reply(`sorry but this command is undergoing a rework, it should be ready soon!`);
	}
}
