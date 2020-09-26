<<<<<<< HEAD
const ImgurAlbumCommand = require('../../structures/commands/ImgurAlbum');
const { HUG_ALBUM_ID } = process.env;
const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class PokeCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'poke',
			aliases: ['poke'],
			group: 'roleplay',
			memberName: 'poke',
			description: 'pokes a user.',
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
		let pGifs = [
			`https://i.pinimg.com/originals/b4/95/fb/b495fb19f4b9a1b04f48297b676c497b.gif`,
			`https://media.tenor.com/images/6d227fd93656bd164985aad517a25c3f/tenor.gif`,
			`https://i.imgur.com/xSvkpIh.gif`,
			`https://media0.giphy.com/media/FdinyvXRa8zekBkcdK/source.gif`,
			`https://thumbs.gfycat.com/EnlightenedInferiorAfricanaugurbuzzard-size_restricted.gif`,
		]
		if(!args) {
			return message.say('You can\'t poke yourself!');
		}
		let gif = pGifs[Math.floor(Math.random()*pGifs.length)];
		
		if (message.mentions.users === '712495341097975848') {
			return message.say("OwO Why do you want to poke me?");
		}
		
		let arg = message.mentions.users.first();
		let sEmbed = new MessageEmbed()
			.setDescription(`${message.author.username} just poked ${arg}!`)
			.setColor("#ff4040")
			.setImage(`${gif}`)
			.setTimestamp()
			message.embed(sEmbed)
	}	
=======
const ImgurAlbumCommand = require('../../structures/commands/ImgurAlbum');
const { HUG_ALBUM_ID } = process.env;
const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class PokeCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'poke',
			aliases: ['poke'],
			group: 'roleplay',
			memberName: 'poke',
			description: 'pokes a user.',
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
		let pGifs = [
			`https://i.pinimg.com/originals/b4/95/fb/b495fb19f4b9a1b04f48297b676c497b.gif`,
			`https://media.tenor.com/images/6d227fd93656bd164985aad517a25c3f/tenor.gif`,
			`https://i.imgur.com/xSvkpIh.gif`,
			`https://media0.giphy.com/media/FdinyvXRa8zekBkcdK/source.gif`,
			`https://thumbs.gfycat.com/EnlightenedInferiorAfricanaugurbuzzard-size_restricted.gif`,
		]
		if(!args) {
			return message.say('You can\'t poke yourself!');
		}
		let gif = pGifs[Math.floor(Math.random()*pGifs.length)];
		
		if (message.mentions.users === '712495341097975848') {
			return message.say("OwO Why do you want to poke me?");
		}
		
		let arg = message.mentions.users.first();
		let sEmbed = new MessageEmbed()
			.setDescription(`${message.author.username} just poked ${arg}!`)
			.setColor("#ff4040")
			.setImage(`${gif}`)
			.setTimestamp()
			message.embed(sEmbed)
	}	
>>>>>>> 911471a31e69d42a8e7715c4659360a597d8e9b8
}