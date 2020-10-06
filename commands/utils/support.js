
require('dotenv').config();
const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const { INVITE } = process.env;

module.exports = class HugCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'support',
			aliases: ['support invite'],
			group: 'utils',
			memberName: 'support',
			description: 'invites a user to the support server.',
			clientPermissions: ['SEND_MESSAGES'],
			//albumID: HUG_ALBUM_ID,
		});
	}
	
	run(message) {
		let inviteEmbed = new MessageEmbed()
		.setTitle("Join me at Project High Treason!!")
		.setDescription("Project High Treason is a support server for Alice and Myself\nIt's controlled and monitored by my developer, Kazuto#2528")
		.addField("We'll enjoy your stay with us!", `[join here!](${INVITE})`)
		.setImage(`https://media.discordapp.net/attachments/757890279796899890/762895835926495262/PHT.gif?width=376&height=212`)
		.setFooter("© Project High Treason 2020, Kazuto#2528")
		message.embed(inviteEmbed);
	}
};