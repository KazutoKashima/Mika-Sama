const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
const ms = require("parse-ms");

module.exports = class DeposCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'deposit',
			aliases: ['depos'],
			group: 'economy',
			memberName: 'deposit',
			description: 'deposits money into user\'s bank.',
			clientPermissions: ['ATTACH_FILES'],
			//albumID: KILL_ALBUM_ID,
			/**args: [
				{
					key: 'user',
					prompt: 'What user do you want to ban?',
					type:'user'
				}
			]*/
		});
	}
	async run(message) {
		const args = message.content.split(' ').slice(1);
		let user = message.author;

		let member = db.fetch(`money_${message.guild.id}_${user.id}`)
		let member2 = db.fetch(`bank_${message.guild.id}_${user.id}`)

		if (args[0] == 'all') {
			let money = await db.fetch(`money_${message.guild.id}_${user.id}`)
			let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)

			let embedbank = new MessageEmbed()
			.setColor('#FFFFFF')
			.setDescription(":x: You don't have any :cookie:s to deposit")

			if(money === 0) return message.embed(embedbank)

			db.add(`bank_${message.guild.id}_${user.id}`, money)
			db.subtract(`money_${message.guild.id}_${user.id}`, money)
			let embed5 = new MessageEmbed()
			.setColor("#FFFFFF")
			.setDescription(`:white_check_mark: You have deposited all your :cookie:s into your bank`);
			message.embed(embed5)
  
		} else {
	
			let embed2 = new MessageEmbed()
			.setColor("#FFFFFF")
			.setDescription(`:x: Specify an amount to deposit`);
  
			if (!args[0]) {
				return message.embed(embed2)
				.catch(err => console.log(err))
			}
			let embed3 = new MessageEmbed()
			.setColor("#FFFFFF")
			.setDescription(`:x: You can't deposit negative :cookie:s`);

			if (message.content.includes('-')) { 
				return message.embed(embed3)
			}
			let embed4 = new MessageEmbed()
			.setColor("#FFFFFF")
			.setDescription(`:x: You don't have that much :cookie:s`);

			if (member < args[0]) {
				return message.embed(embed4)
			}

			let embed5 = new MessageEmbed()
			.setColor("#FFFFFF")
			.setDescription(`:white_check_mark: You have deposited ${args[0]} :cookie:s into your bank`);

			message.embed(embed5)
			db.add(`bank_${message.guild.id}_${user.id}`, args[0])
			db.subtract(`money_${message.guild.id}_${user.id}`, args[0])
		}
	}
}