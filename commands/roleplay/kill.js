<<<<<<< HEAD
const ImgurAlbumCommand = require('../../structures/commands/ImgurAlbum');
const { KILL_ALBUM_ID } = process.env;
const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class KillCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'kill',
			aliases: ['murder'],
			group: 'roleplay',
			memberName: 'kill',
			description: 'kills a user.',
			clientPermissions: ['ATTACH_FILES'],
			albumID: KILL_ALBUM_ID,
			args: [
				{
					key: 'user',
					prompt: 'What user do you want to roleplay with?',
					type:'user'
				}
			]
		});
	}
	
	run(message, args) {
		const killGifs = [
			``,
		]
		let gif =  killGifs[Math.floor(Math.random * killGifs.length)];
		let arg = message.mentions.users.first();
		const killEmbed = new MessageEmbed()
			.setDescription(`_**${message.author.username}** just killed **${arg}**_`)
			.setColor("#8a0303")
			.setImage(gif)
			.setTimestamp();
		return message.embed(killEmbed);
	}
=======
const ImgurAlbumCommand = require('../../structures/commands/ImgurAlbum');
const { KILL_ALBUM_ID } = process.env;
const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class KillCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'kill',
			aliases: ['murder'],
			group: 'roleplay',
			memberName: 'kill',
			description: 'kills a user.',
			clientPermissions: ['ATTACH_FILES'],
			albumID: KILL_ALBUM_ID,
			args: [
				{
					key: 'user',
					prompt: 'What user do you want to roleplay with?',
					type:'user'
				}
			]
		});
	}
	
	run(message, args) {
		const killGifs = [
			``,
		]
		let gif =  killGifs[Math.floor(Math.random * killGifs.length)];
		let arg = message.mentions.users.first();
		const killEmbed = new MessageEmbed()
			.setDescription(`_**${message.author.username}** just killed **${arg}**_`)
			.setColor("#8a0303")
			.setImage(gif)
			.setTimestamp();
		return message.embed(killEmbed);
	}
>>>>>>> 911471a31e69d42a8e7715c4659360a597d8e9b8
};