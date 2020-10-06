const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const mongoEco = require('discord-mongodb-economy');

module.exports = class LevelCommand extends Commands {
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
	
	run(msg) {
		let mention = msg.mentions.members.first() ? msg.mentions.members.first() : msg.member;
		let member = await mongoEco.fetchMember(mention.id, msg.guild.id);
		if (!member) return msg.channel.send("You haven't earned any xp or level...")
		msg.channel.send(`You have ${member.xp} points and you are at level ${member.level}.`)
	}
}