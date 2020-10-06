const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const mongoEco = require('discord-mongodb-economy');

module.exports = class LevelCreareCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'delete',
			description: 'Removes you into the leveling system...',
			group: 'fun',
			memberName: 'delete',
			aliases: ['del'],
			usage: 'delete',
			guildOnly: true,
		});
	}
	async run (msg) {
		let deleted = await mongoEco.deleteMember(msg.member.id, msg.guild.id);
		console.log(deleted);
		msg.reply(`Aww, Ok, removing you from the database...done... :(`);
	}
}