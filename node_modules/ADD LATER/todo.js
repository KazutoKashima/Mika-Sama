const keep_alive = require("../keepalive.js");
const fs = require('fs');
const Discord = require('discord.js');

require('dotenv').config();
const kazID = '701652992549716069';
const prefix = process.env.PREFIX;

const token = process.env.TOKEN

const client = new Discord.Client();
client.commands = new Discord.Collection();
client.login(token);

module.exports = {
	name: 'todo',
	description: "Mika's TODO list",
	execute(message) {
		if (message.author.id === kazID) {
			let todoEmbed = new Discord.MessageEmbed()
			.setAuthor("TODO List:")
			.setColor('#ffffff')
			.addField("Cookies:", 'Proposed by Zero: Gives users a random cookie value', inline=false)
			.setFooter("More might come soon")
			client.users.cache.get(kazID).send(todoEmbed);
		}
		else {
			message.channel.send("Sorry but you don't have the permissions to use this command!");
		}
	}
}