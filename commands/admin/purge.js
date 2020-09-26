const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = class HugCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'purge',
			aliases: ['delete', 'p'],
			group: 'admin',
			memberName: 'purge',
			description: 'purges a limit of 1-100 messages.',
			clientPermissions: ['MANAGE_MESSAGES'],
			//albumID: HUG_ALBUM_ID,
		});
	}
	
	async run(message) {
		const args = message.content.split(' ').slice(1); // remove the command name and prefix to get the args
		const amount = args.join(' '); // amount of messages to delete
		if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("I'm so sorry but you're not allowed to do that!");
		if(!amount) return message.say("You haven't given an amount to be deleted!");
		if (isNaN(amount)) return message.say("That amount parameter isn't a number!");
		
		if (amount > 100) return message.say("You can't delete more than 100 messages at once!");
		if (amount < 1) return message.say("You need to delete 1 or messages to use this command!");
		
		await message.channel.messages.fetch({ limit: amount }).then(messages => {
			message.channel.bulkDelete(messages)
		});
	}
};