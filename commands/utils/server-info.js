const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class ServerInfo extends Command {
	constructor(client) {
		super(client, {
			name: 'server',
			aliases: ['si'],
			group: 'utils',
			memberName: 'server-info',
			description: 'Display\'s server info.',
			clientPermissions: ['ATTACH_FILES'],
			//albumID: POKE_ALBUM_ID,
		});
	}
	
	run(message) {
		try {
			let sIcon = message.guild.iconURL();
			let serverembed = new MessageEmbed()
				.setDescription("Server Information")
				.setColor("#15f153")
				.setThumbnail(sIcon)
				.addField("Server Name", message.guild.name)
				.addField("Created On", message.guild.createdAt)
				.addField("You Joined", message.member.joinedAt)
				.addField("Total Members", message.guild.memberCount);

			return message.channel.send(serverembed);
		}
		catch (err) {
			console.error(err.stack);
			message.channel.send(`<@!${message.author.id}>, This command only works in servers!`);
		}
	}
};