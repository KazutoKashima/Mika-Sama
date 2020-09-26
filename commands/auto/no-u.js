<<<<<<< HEAD
const Command = require('../../structures/commands/AutoReply');

module.exports = class NoUCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'no-u',
			aliases: ['no-you', 'no u', 'no you'],
			group: 'auto',
			memberName: 'no-u',
			description: 'no u',
			patterns: [/^n+o+ u+$/i]
		});
	}
	
	generateText() {
		return 'no u';
	}
=======
const Command = require('../../structures/commands/AutoReply');

module.exports = class NoUCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'no-u',
			aliases: ['no-you', 'no u', 'no you'],
			group: 'auto',
			memberName: 'no-u',
			description: 'no u',
			patterns: [/^n+o+ u+$/i]
		});
	}
	
	generateText() {
		return 'no u';
	}
>>>>>>> 911471a31e69d42a8e7715c4659360a597d8e9b8
};