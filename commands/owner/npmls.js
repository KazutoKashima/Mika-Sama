function npmls(cb) {
	require('child_process').exec('npm ls --json', function (err, stdout, stderr) {
		if (err) return cb(err);
		return cb(null, JSON.parse(stdout));
	});
}

const MessageEmbed = require('discord.js');
const { Command } = require('discord.js-commando');
// .env stuff
require('dotenv').config(); // .env register
const owner = '286957313489764353';

module.exports = class NPMModulesCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'npm',
			description: 'shows the node modules installed',
			group: 'owner',
			memberName: 'npmls'
		});
	}

	run(msg) {
		if (msg.author.id !== owner) return msg.say("Sorry but that is an owner only command!");

		try {
			if (msg.author.id === owner) {
				msg.reply(`Sure thing! Here are my packages! \n ${npmls()}`);
			} else {
				message.channel.send("Sorry but I can't do that for some reason... :frown:");
            }
		} catch (err) {
			console.log(err.stack);
			msg.channel.send("sorry but there was an error, please check my live logs!");
        }
	}
}