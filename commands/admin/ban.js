<<<<<<< HEAD
const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class BanCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'ban',
			aliases: ['ban'],
			group: 'admin',
			memberName: 'ban',
			description: 'bans a user.',
			clientPermissions: ['ADMINISTRATOR'],
			//albumID: KILL_ALBUM_ID,
		});
	}
	run(message) {
		try {
			const args = message.content.split(' ').slice(2);
			let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
			if (!bUser) return message.channel.send("I couldn't find that person? Are they still here and are they mentioned?");
			let bReason = args.join(" ")
			if (!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("Im sorry! But I can't let you do that!");
			if (bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Ummm...that person can't be banned!");

			let banEmbed = new Discord.MessageEmbed()
				.setDescription("~Ban~")
				.setColor("#bc0000")
				.addField("Banned User", `${bUser} with ID ${bUser.id}`)
				.addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
				.addField("Banned In", message.channel)
				.addField("Time", message.createdAt)
				.addField("Reason", bReason);

			let incidentchannel = message.guild.channels.cache.find(`name`, "server-logs");
			if (!incidentchannel) return message.channel.send("Can't find log channel.");

			message.guild.member(bUser).ban(bReason);
			incidentchannel.send(banEmbed);
		}
		catch (error) {
			console.log(error.stack);
			message.channel.say("Sorry but there has been error!")
		}
	}
=======
const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class BanCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'ban',
			aliases: ['ban'],
			group: 'admin',
			memberName: 'ban',
			description: 'bans a user.',
			clientPermissions: ['ADMINISTRATOR'],
			//albumID: KILL_ALBUM_ID,
		});
	}
	run(message) {
		try {
			const args = message.content.split(' ').slice(2);
			let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
			if (!bUser) return message.channel.send("I couldn't find that person? Are they still here and are they mentioned?");
			let bReason = args.join(" ")
			if (!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("Im sorry! But I can't let you do that!");
			if (bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Ummm...that person can't be banned!");

			let banEmbed = new Discord.MessageEmbed()
				.setDescription("~Ban~")
				.setColor("#bc0000")
				.addField("Banned User", `${bUser} with ID ${bUser.id}`)
				.addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
				.addField("Banned In", message.channel)
				.addField("Time", message.createdAt)
				.addField("Reason", bReason);

			let incidentchannel = message.guild.channels.cache.find(`name`, "server-logs");
			if (!incidentchannel) return message.channel.send("Can't find log channel.");

			message.guild.member(bUser).ban(bReason);
			incidentchannel.send(banEmbed);
		}
		catch (error) {
			console.log(error.stack);
			message.channel.say("Sorry but there has been error!")
		}
	}
>>>>>>> 911471a31e69d42a8e7715c4659360a597d8e9b8
};