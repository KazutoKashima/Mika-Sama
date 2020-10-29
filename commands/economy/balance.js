const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
const ms = require("parse-ms");

module.exports = class BalCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'balance',
			aliases: ['bal'],
			group: 'economy',
			memberName: 'balance',
			description: 'gives the balance of a user.',
			clientPermissions: ['ATTACH_FILES'],
		});
	}
	async run(message) {
		let user = message.mentions.members.first() || message.author;
		
		let bank = await mongoEco.fetchMember(mention.id, msg.guild.id);
		if (bank === null) bank = 0;
		
		let moneyEmbed = new MessageEmbed()
		.setColor("#ffffff")
		.setDescription(`**${user}'s Balance**\n\nBank: ${bank} :cookie:`)
		message.embed(moneyEmbed);
	}
}