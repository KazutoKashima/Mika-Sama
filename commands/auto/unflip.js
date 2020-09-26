<<<<<<< HEAD
const Command = require('../../structures/commands/AutoReply');

module.exports = class unflipCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'unflip',
			group: 'auto',
			memberName: 'unflip',
			description: 'Unflips a flipped table',
			patterns: [/\(╯°□°）╯︵ ┻━┻/i]
		});
	}
	
	generateText() {
		return '┬─┬ ノ( ゜-゜ノ)';
	}
=======
const Command = require('../../structures/commands/AutoReply');

module.exports = class unflipCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'unflip',
			group: 'auto',
			memberName: 'unflip',
			description: 'Unflips a flipped table',
			patterns: [/\(╯°□°）╯︵ ┻━┻/i]
		});
	}
	
	generateText() {
		return '┬─┬ ノ( ゜-゜ノ)';
	}
>>>>>>> 911471a31e69d42a8e7715c4659360a597d8e9b8
};