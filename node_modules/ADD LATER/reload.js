const keep_alive = require("../keepalive.js");
const fs = require('fs');
const Discord = require('discord.js');

require('dotenv').config();
const kazID = '701652992549716069';
const prefix = process.env.PREFIX;

const token = process.env.TOKEN

const client = new Discord.Client();
client.commands = new Discord.Collection();

module.exports = {
	name:'reload',
	description: 'reloads a command',
	aliases: ['r'],
	execute(message, args) {
		if(message.author.id != kazID) return message.reply('Sorry but you aren\'t permitted to use that command!');
		if (!args.length) return message.reply('You didn\'t pass any command to reload!');
		const commandName = args[0].toLowerCase();
		const command = message.client.commands.get(commandName) || message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
		
		if(!command) return message.channel.send(`There is no command with that name or alias \`${commandName}\`!`);
		
		delete require.cache[require.resolve(`./${commandName}.js`)];
		
		try {
			const newCommand = require(`./${command.name}.js`);
			message.client.commands.set(newCommand.name, newCommand);
			message.channel.send(`Command \`${command.name}\` was reloaded successfully!`);
		} catch(err) {
			console.error(err.stack);
			message.channel.send(`There was an error reloading the ${command.name} command!`);
		}
	}
}