const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const mongoEco = require('discord-mongodb-economy');

module.exports = class LevelCreareCommand extends Commands {
	constructor(client) {
		super(client, {
			name: 'leaderboard',
			description: 'Shows the server\'s leaderboard!',
			group: 'fun',
			memberName: 'leaderboard',
			aliases: ['leader', 'ldr', 'lead'],
			usage: 'leaderboard',
			guildOnly: true,
		});
	}
	
	async run (msg) {
		let raw = await mongoEco.getLeaderBoard(msg.guild.id, 10);
		let data = await mongoEco.convertLeaderBoard(client, raw);

		let leaderboard = data.map(e => `${e.position}. ${e.membername}#${e.discriminator}\nLevel: ${e.level}\nXP: ${e.xp.toLocaleString()}\n`);
		msg.channel.send(leaderboard)
	}
}