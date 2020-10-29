const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
const ms = require("parse-ms");
const mongoEco = require('discord-mongodb-economy');

module.exports = class DeposCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'work',
			aliases: ['work'],
			group: 'economy',
			memberName: 'work',
			description: 'work for money!',
			clientPermissions: ['ATTACH_FILES'],
		});
	}
	async run(message) {
		let user = message.author;
		let author = await db.fetch(`work_${message.guild.id}_${user.id}`)
		
		let timeout = 600000;
		
		if (author !== null && timeout - (Date.now() -author) > 0) {
			let time = ms(timeout - (Date.now() - author));
			
			let timeEmbed = new MessageEmbed()
			.setColor("#ffffff")
			.setDescription(`:x: You have already worked recently!\nTry again in ${time.minutes} (${time.seconds}s)m`)
			message.embed(timeEmbed)
			
		} else {
			let replies = ['Programmer', 'Builder', 'Waiter','Engineer'];
			
			let result = Math.floor((Math.random() * replies.length));
			let amount = Math.floor(Math.random() * 80) + 1;
			
			let embed1 = new MessageEmbed()
			.setColor("#ffffff")
			.setDescription(`:white_check_mark: You worked as a ${replies[result]} and earned ${amount} :cookie:s!`)
			message.embed(embed1);
			
			var moneyAdd = await mongoEco.attributeXp(msg.member.id, msg.guild.id, amount)
		}
	}
}