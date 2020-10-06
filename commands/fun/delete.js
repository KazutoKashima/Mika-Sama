const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const mongoEco = require('discord-mongodb-economy');

module.exports = class LevelCreareCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'no-level',
			description: 'Removes you into the leveling system...',
			group: 'fun',
			memberName: 'deletedb',
			aliases: ['no level', 'n lvl'],
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