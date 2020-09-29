<<<<<<< HEAD
const ImgurAlbumCommand = require('../../structures/commands/ImgurAlbum');
const { HUG_ALBUM_ID } = process.env;
const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class AvatarCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'avatar',
			aliases: ['av'],
			group: 'utils',
			memberName: 'avatar',
			description: 'shows a user\'s avatar.',
			clientPermissions: ['ATTACH_FILES'],
			//albumID: POKE_ALBUM_ID,
		});
	}
	
	run(message, args) {
		if(!message.mentions.users.size) {
			let a1Embed = new MessageEmbed()
				.setDescription(`${message.author.username}'s Avatar`)
				.setColor('#ffffff')
				.setImage(`${message.author.displayAvatarURL({ dynamic: true })}`)
			message.embed(a1Embed);
		}
		const avatarList = message.mentions.users.map(user => {
			let a2Embed = new MessageEmbed()
				.setDescription(`${user.username}'s Avatar`)
				.setColor('#ffffff')
				.setImage(`${user.displayAvatarURL({ dynamic: true })}`)
			message.embed(a2Embed);
		});
	}
=======
const ImgurAlbumCommand = require('../../structures/commands/ImgurAlbum');
const { HUG_ALBUM_ID } = process.env;
const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class AvatarCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'avatar',
			aliases: ['av'],
			group: 'utils',
			memberName: 'avatar',
			description: 'shows a user\'s avatar.',
			clientPermissions: ['ATTACH_FILES'],
			//albumID: POKE_ALBUM_ID,
		});
	}
	
	run(message, args) {
		if(!message.mentions.users.size) {
			let a1Embed = new MessageEmbed()
				.setDescription(`${message.author.username}'s Avatar`)
				.setColor('#ffffff')
				.setImage(`${message.author.displayAvatarURL({ dynamic: true })}`)
			message.embed(a1Embed);
		}
		const avatarList = message.mentions.users.map(user => {
			let a2Embed = new MessageEmbed()
				.setDescription(`${user.username}'s Avatar`)
				.setColor('#ffffff')
				.setImage(`${user.displayAvatarURL({ dynamic: true })}`)
			message.embed(a2Embed);
		});
	}
>>>>>>> 911471a31e69d42a8e7715c4659360a597d8e9b8
};