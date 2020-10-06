const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const mongoEco = require('discord-mongodb-economy');

module.exports = class LevelCreareCommand extends Commands {
	constructor(client) {
		super(client, {
			name: 'create',
			description: 'Adds you into the leveling system!!',
			group: 'fun',
			memberName: 'create',
			aliases: ['cr'],
			usage: 'create',
			guildOnly: true,
		});
	}
	
	async run (msg) {
		let created = await mongoEco.createMember(msg.member.id, msg.guild.id)
		console.log(created);
		msg.reply(`Yay! you can now start leveling!`);
	}
}