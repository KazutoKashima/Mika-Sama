<<<<<<< HEAD
const ImgurAlbumCommand = require('../../structures/commands/ImgurAlbum');
const { HUG_ALBUM_ID } = process.env;
const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class SlapCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'slap',
			aliases: ['slaps'],
			group: 'roleplay',
			memberName: 'slap',
			description: 'slaps a user.',
			clientPermissions: ['ATTACH_FILES'],
			//albumID: POKE_ALBUM_ID,
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
		
		let sGifs = [
			`https://media1.tenor.com/images/b6d8a83eb652a30b95e87cf96a21e007/tenor.gif`,
			`https://33.media.tumblr.com/4a58a89eaaea25571fcc03d3788b1e55/tumblr_nel3qwSzqw1tblzm8o1_500.gif`,
			`https://media1.tenor.com/images/448e9db420b1d7faadad508b887b2a00/tenor.gif`,
			`https://cdn.quotesgram.com/img/50/92/797193858-UXqzzab.gif`,
			`https://media.tenor.com/images/c8832c9d5596ed9e6297c947047b584d/tenor.gif`,
		]
		
		var gif = sGifs[Math.floor(Math.random()*sGifs.length)];
		if (args[0] === message.author.id || !args) {
			return message.say('You cant slap yourself!');
		}
		
		let arg = message.mentions.users.first();
		let sEmbed = new MessageEmbed()
			.setDescription(`${message.author.username} just slapped ${arg}!`)
            .setColor("#f08080")
            .setImage(`${gif}`)
			.setTimestamp()
		message.embed(sEmbed);
	}
=======
const ImgurAlbumCommand = require('../../structures/commands/ImgurAlbum');
const { HUG_ALBUM_ID } = process.env;
const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class SlapCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'slap',
			aliases: ['slaps'],
			group: 'roleplay',
			memberName: 'slap',
			description: 'slaps a user.',
			clientPermissions: ['ATTACH_FILES'],
			//albumID: POKE_ALBUM_ID,
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
		
		let sGifs = [
			`https://media1.tenor.com/images/b6d8a83eb652a30b95e87cf96a21e007/tenor.gif`,
			`https://33.media.tumblr.com/4a58a89eaaea25571fcc03d3788b1e55/tumblr_nel3qwSzqw1tblzm8o1_500.gif`,
			`https://media1.tenor.com/images/448e9db420b1d7faadad508b887b2a00/tenor.gif`,
			`https://cdn.quotesgram.com/img/50/92/797193858-UXqzzab.gif`,
			`https://media.tenor.com/images/c8832c9d5596ed9e6297c947047b584d/tenor.gif`,
		]
		
		var gif = sGifs[Math.floor(Math.random()*sGifs.length)];
		if (args[0] === message.author.id || !args) {
			return message.say('You cant slap yourself!');
		}
		
		let arg = message.mentions.users.first();
		let sEmbed = new MessageEmbed()
			.setDescription(`${message.author.username} just slapped ${arg}!`)
            .setColor("#f08080")
            .setImage(`${gif}`)
			.setTimestamp()
		message.embed(sEmbed);
	}
>>>>>>> 911471a31e69d42a8e7715c4659360a597d8e9b8
};