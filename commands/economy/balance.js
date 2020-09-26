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
			//albumID: KILL_ALBUM_ID,
		});
	}
	async run(message) {
		let user = message.mentions.members.first() || message.author;
		
		let bal = db.fetch(`money_${message.guild.id}_${user.id}`)
		
		if (bal === null) bal = 0;
		
		let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)
		if (bank === null) bank = 0;
		
		let moneyEmbed = new MessageEmbed()
		.setColor("#ffffff")
		.setDescription(`**${user}'s Balance**\n\nPocket: ${bal} :cookie:\nBank: ${bank} :cookie:`)
		message.embed(moneyEmbed);
	}
}