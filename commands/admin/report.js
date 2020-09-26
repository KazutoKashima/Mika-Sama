<<<<<<< HEAD
require('dotenv').config();
const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { TOKEN, OWNERS, PREFIX, INVITE } = process.env;
owners = OWNERS.trim().split(',');
ownerTag = owners.join(' ');

module.exports = class ReportCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'report',
			aliases: ['report'],
			group: 'admin',
			memberName: 'report',
			description: 'reports a user.',
			examples: ["m!report <user> <reason>"],
			clientPermissions: ['ADMINISTRATOR'],
			//albumID: KILL_ALBUM_ID,
		});
	}
	run(message) {
        try {
			const args = message.content.split(' ').slice(2); // remove the command name and prefix to get the args
			let rUser = message.guild.member(message.mentions.users.first());
			if (!rUser) return message.channel.send("Couldn't find user.");
			let reason = args.join(' ');

			let reportEmbed = new MessageEmbed()
            .setDescription("Reports")
            .setColor("#15f153")
            .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
            .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
            .addField("Channel", message.channel)
            .addField("Time", message.createdAt)
            .addField("Reason", reason);

			message.member.guild.channels.cache.find(channel => channel.name === "server-logs").send(`Hey there Admins! Someone reported a user!\n${reportEmbed}`);
		
			message.delete().catch(O_o => { });
			message.say("I have reported the user to the admins! Please be patient while they review it!");
		}
		catch(error) {
			console.error(error.stack);
			message.say(`Sorry, ${message.author} but there was an error! Have you checked that you have a \`server-logs\` channel?\nIf so please contact Kazuto#2528 or get the support link with \`m!support\``)
			
		}
	}
=======
require('dotenv').config();
const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { TOKEN, OWNERS, PREFIX, INVITE } = process.env;
owners = OWNERS.trim().split(',');
ownerTag = owners.join(' ');

module.exports = class ReportCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'report',
			aliases: ['report'],
			group: 'admin',
			memberName: 'report',
			description: 'reports a user.',
			examples: ["m!report <user> <reason>"],
			clientPermissions: ['ADMINISTRATOR'],
			//albumID: KILL_ALBUM_ID,
		});
	}
	run(message) {
        try {
			const args = message.content.split(' ').slice(2); // remove the command name and prefix to get the args
			let rUser = message.guild.member(message.mentions.users.first());
			if (!rUser) return message.channel.send("Couldn't find user.");
			let reason = args.join(' ');

			let reportEmbed = new MessageEmbed()
            .setDescription("Reports")
            .setColor("#15f153")
            .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
            .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
            .addField("Channel", message.channel)
            .addField("Time", message.createdAt)
            .addField("Reason", reason);

			message.member.guild.channels.cache.find(channel => channel.name === "server-logs").send(`Hey there Admins! Someone reported a user!\n${reportEmbed}`);
		
			message.delete().catch(O_o => { });
			message.say("I have reported the user to the admins! Please be patient while they review it!");
		}
		catch(error) {
			console.error(error.stack);
			message.say(`Sorry, ${message.author} but there was an error! Have you checked that you have a \`server-logs\` channel?\nIf so please contact Kazuto#2528 or get the support link with \`m!support\``)
			
		}
	}
>>>>>>> 911471a31e69d42a8e7715c4659360a597d8e9b8
};