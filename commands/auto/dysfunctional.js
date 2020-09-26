<<<<<<< HEAD
const Command = require('../../structures/commands/AutoReply');

module.exports = class unflipCommand extends Command {
	constructor(client) {
		super(client, {
			name: "mika you're dysfunctional",
			aliases: ["mika youre dysfunctional"],
			group: 'auto',
			memberName: 'dysfunctional',
			description: 'I\'m not dysfunctional!',
			patterns: [/^m+i+k+a+ y+o+u+r+e+ d+y+s+f+u+n+c+t+i+o+n+a+l+$/i]
		});
	}
	generateText() {
		return 'I\'m not dysh-dish-dysfuncshi-dysfunctional!';
	}
=======
const Command = require('../../structures/commands/AutoReply');

module.exports = class unflipCommand extends Command {
	constructor(client) {
		super(client, {
			name: "mika you're dysfunctional",
			aliases: ["mika youre dysfunctional"],
			group: 'auto',
			memberName: 'dysfunctional',
			description: 'I\'m not dysfunctional!',
			patterns: [/^m+i+k+a+ y+o+u+r+e+ d+y+s+f+u+n+c+t+i+o+n+a+l+$/i]
		});
	}
	generateText() {
		return 'I\'m not dysh-dish-dysfuncshi-dysfunctional!';
	}
>>>>>>> 911471a31e69d42a8e7715c4659360a597d8e9b8
};