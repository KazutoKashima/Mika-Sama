<<<<<<< HEAD
const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
const ms = require("parse-ms");

module.exports = class RobCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'rob',
			aliases: ['steal'],
			group: 'economy',
			memberName: 'rob',
			description: 'robs a user of their money.',
			clientPermissions: ['ATTACH_FILES'],
			//albumID: KILL_ALBUM_ID,
		});
	}
	async run(message) {
		let user = message.mentions.members.first()
		let targetuser = await db.fetch(`money_${message.guild.id}.${user.id}`)
		let author = await db.fetch(`rob_${message.guild.id}.${user.id}`)
		let author2 = await db.fetch(`money_${message.guild.id}.${user.id}`)
	
		let timeout = 600000;

		if (author !== null && timeout - (Date.now() - author) > 0) {
			let time = ms(timeout - (Date.now() - author));

			let timeEmbed = new MessageEmbed()
			.setColor("#FFFFFF")
			.setDescription(`:x: You have already robbed someone\n\nTry again in ${time.minutes}m ${time.seconds}s `);
			message.embed(timeEmbed)
		} else {

			let moneyEmbed = new MessageEmbed()
			.setColor("#FFFFFF")
			.setDescription(`:x: You need at least 200 :cookie:s in your pocket to rob someone!`);

			if (author2 < 200) {
				return message.embed(moneyEmbed)

			}
			let moneyEmbed2 = new MessageEmbed()
			.setColor("#FFFFFF")
			.setDescription(`<:Cross:618736602901905418> ${user.user.username} does not have :cookie:s you can rob`);
			
			if (targetuser <= 0) {
				return message.embed(moneyEmbed2)
			}

			let vip = await db.fetch(`bronze_${user.id}`)
			if(vip === true) random = Math.floor(Math.random() * 200) + 1;
			if (vip === null) random = Math.floor(Math.random() * 100) + 1;

			let embed = new MessageEmbed()
			.setDescription(`<:Check:618736570337591296> You robbed ${user} and got away with ${random} :cookie:s`)
			.setColor("#FFFFFF")
			message.embed(embed)

			db.subtract(`money_${message.guild.id}.${user.id}`, random)
			db.add(`money_${message.guild.id}.${message.author.id}`, random)
			db.set(`rob_${message.guild.id}.${user.id}`, Date.now())
		}
	}
=======
const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
const ms = require("parse-ms");

module.exports = class RobCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'rob',
			aliases: ['steal'],
			group: 'economy',
			memberName: 'rob',
			description: 'robs a user of their money.',
			clientPermissions: ['ATTACH_FILES'],
			//albumID: KILL_ALBUM_ID,
		});
	}
	async run(message) {
		let user = message.mentions.members.first()
		let targetuser = await db.fetch(`money_${message.guild.id}.${user.id}`)
		let author = await db.fetch(`rob_${message.guild.id}.${user.id}`)
		let author2 = await db.fetch(`money_${message.guild.id}.${user.id}`)
	
		let timeout = 600000;

		if (author !== null && timeout - (Date.now() - author) > 0) {
			let time = ms(timeout - (Date.now() - author));

			let timeEmbed = new MessageEmbed()
			.setColor("#FFFFFF")
			.setDescription(`:x: You have already robbed someone\n\nTry again in ${time.minutes}m ${time.seconds}s `);
			message.embed(timeEmbed)
		} else {

			let moneyEmbed = new MessageEmbed()
			.setColor("#FFFFFF")
			.setDescription(`:x: You need at least 200 :cookie:s in your pocket to rob someone!`);

			if (author2 < 200) {
				return message.embed(moneyEmbed)

			}
			let moneyEmbed2 = new MessageEmbed()
			.setColor("#FFFFFF")
			.setDescription(`<:Cross:618736602901905418> ${user.user.username} does not have :cookie:s you can rob`);
			
			if (targetuser <= 0) {
				return message.embed(moneyEmbed2)
			}

			let vip = await db.fetch(`bronze_${user.id}`)
			if(vip === true) random = Math.floor(Math.random() * 200) + 1;
			if (vip === null) random = Math.floor(Math.random() * 100) + 1;

			let embed = new MessageEmbed()
			.setDescription(`<:Check:618736570337591296> You robbed ${user} and got away with ${random} :cookie:s`)
			.setColor("#FFFFFF")
			message.embed(embed)

			db.subtract(`money_${message.guild.id}.${user.id}`, random)
			db.add(`money_${message.guild.id}.${message.author.id}`, random)
			db.set(`rob_${message.guild.id}.${user.id}`, Date.now())
		}
	}
>>>>>>> 911471a31e69d42a8e7715c4659360a597d8e9b8
}