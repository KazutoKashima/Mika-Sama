const { Command } = require("discord.js-commandp");
const { MessageEmbed } =  require('discord.js');

module.exports = class Invite extends Command {
	constructor(client) {
		super(client, {
			name: 'invite',
			description: 'invite link for Mika-Sama',
			group: 'utils',
			memberName: 'invite',
		});
	}
	
	run (msg) {
		let InviteEmbed = new MessageEmbed()
			.addField("Sure thing!", "[Invite me with this!](https://discord.com/api/oauth2/authorize?client_id=712495341097975848&permissions=8&scope=bot)")
			//.setImage(`https://media.discordapp.net/attachments/757890279796899890/762895835926495262/PHT.gif?width=376&height=212`)
			.setFooter("I'd be happy to meet you in your server!")
		msg.embed(InviteEmbed);
	}
}