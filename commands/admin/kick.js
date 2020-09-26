<<<<<<< HEAD
const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class KickCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'kick',
			aliases: ['remove'],
			group: 'admin',
			memberName: 'kick',
			description: 'kicks a user.',
			clientPermissions: ['ADMINISTRATOR'],
			//albumID: KILL_ALBUM_ID,
		});
	}
	run(message) {
		try {
			const args = message.content.split(' ').slice(2)
			let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
			if (!kUser) return message.channel.send("Can't find user!");
			let kReason = args.join(" ");
			if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("I'm so sorry but you're not allowed to do that...");
			if (kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("*Urm*...excuse me...but that person can't be kicked!");

			let kickEmbed = new Discord.MessageEmbed()
				.setDescription("~Kick~")
				.setColor("#e56b00")
				.addField("Kicked User", `${kUser} with ID ${kUser.id}`)
				.addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
				.addField("Kicked In", message.channel)
				.addField("Time", message.createdAt)
				.addField("Reason", kReason);

			let kickChannel = message.guild.channels.cache.find(`name`, "server-logs");
			if (!kickChannel) return message.channel.send("Can't find log channel.");

			message.guild.member(kUser).kick(kReason);
			kickChannel.send(kickEmbed);

			return;
		} catch(error) {
			console.log(error.stack);
			message.channel.send("Sorry but there was an error with that! Kazuto#2528 will work on it ASAP!");
		}
	}
=======
const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class KickCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'kick',
			aliases: ['remove'],
			group: 'admin',
			memberName: 'kick',
			description: 'kicks a user.',
			clientPermissions: ['ADMINISTRATOR'],
			//albumID: KILL_ALBUM_ID,
		});
	}
	run(message) {
		try {
			const args = message.content.split(' ').slice(2)
			let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
			if (!kUser) return message.channel.send("Can't find user!");
			let kReason = args.join(" ");
			if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("I'm so sorry but you're not allowed to do that...");
			if (kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("*Urm*...excuse me...but that person can't be kicked!");

			let kickEmbed = new Discord.MessageEmbed()
				.setDescription("~Kick~")
				.setColor("#e56b00")
				.addField("Kicked User", `${kUser} with ID ${kUser.id}`)
				.addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
				.addField("Kicked In", message.channel)
				.addField("Time", message.createdAt)
				.addField("Reason", kReason);

			let kickChannel = message.guild.channels.cache.find(`name`, "server-logs");
			if (!kickChannel) return message.channel.send("Can't find log channel.");

			message.guild.member(kUser).kick(kReason);
			kickChannel.send(kickEmbed);

			return;
		} catch(error) {
			console.log(error.stack);
			message.channel.send("Sorry but there was an error with that! Kazuto#2528 will work on it ASAP!");
		}
	}
>>>>>>> 911471a31e69d42a8e7715c4659360a597d8e9b8
};