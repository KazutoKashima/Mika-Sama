// .env stuff
require('dotenv').config(); // .env register
const { TOKEN, OWNERS, PREFIX, INVITE } = process.env;
const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const mongoEco = require('discord-mongodb-economy');
const Client = require('../../structures/Client');
const client = new Client({
        commandPrefix: PREFIX,
        owner: OWNERS.split(','),
        invite: INVITE,
        disableMentions: 'everyone',
        unknownCommandResponse: false,
});

client.login(TOKEN);

module.exports = class LevelCreareCommand extends Command {
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
		let lbEmbed = new MessageEmbed()
		.addField(`${msg.guild.name}'s Leaderboard!`, `${leaderboard}`)
		.setColor("#ff0e6")
		.setTimestamp()
		msg.embed(lbEmbed);
	}
}