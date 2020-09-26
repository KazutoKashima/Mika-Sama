<<<<<<< HEAD
const { Command } = require('discord.js-commando');

module.exports = class AutoReplyCommand extends Command {
	constructor(client, info) {
		super(client, info);
		
		this.reply = info.reply || false;
		this.throttling = null;
	}

	run(msg, args, fromPattern) {
		if (msg.guild && !msg.channel.permissionsFor(this.client.user).has('SEND_MESSAGES')) return null;
		return this.reply ? msg.reply(this.generateText(fromPattern)) : msg.say(this.generateText(fromPattern));
	}

	generateText() {
		throw new Error('The generateText method is required.');
	}
=======
const { Command } = require('discord.js-commando');

module.exports = class AutoReplyCommand extends Command {
	constructor(client, info) {
		super(client, info);
		
		this.reply = info.reply || false;
		this.throttling = null;
	}

	run(msg, args, fromPattern) {
		if (msg.guild && !msg.channel.permissionsFor(this.client.user).has('SEND_MESSAGES')) return null;
		return this.reply ? msg.reply(this.generateText(fromPattern)) : msg.say(this.generateText(fromPattern));
	}

	generateText() {
		throw new Error('The generateText method is required.');
	}
>>>>>>> 911471a31e69d42a8e7715c4659360a597d8e9b8
}