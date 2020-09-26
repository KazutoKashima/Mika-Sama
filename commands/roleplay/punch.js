<<<<<<< HEAD
const ImgurAlbumCommand = require('../../structures/commands/ImgurAlbum');
const { HUG_ALBUM_ID } = process.env;
const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class PunchCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'punch',
			aliases: ['punches'],
			group: 'roleplay',
			memberName: 'punch',
			description: 'punches a user.',
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
			`https://i.pinimg.com/originals/f3/ec/8c/f3ec8c256cb22279c14bfdc48c92e5ab.gif`,
			`https://media2.giphy.com/media/AlsIdbTgxX0LC/giphy.gif`,
			`https://i.pinimg.com/originals/d7/c3/0e/d7c30e46a937aaade4d7bc20eb09339b.gif`,
			`https://i2.kym-cdn.com/photos/images/original/000/989/495/3b8.gif`,
		]
		if(!args) {
			return message.say('You can\'t punch yourself!');
		}
		
		if (args[0] == message.author.id) {
			return message.say("You can't punch yourself!");
		}
		let gif = pGifs[Math.floor(Math.random()*pGifs.length)];
		
		let arg = message.mentions.users.first();
		let sEmbed = new MessageEmbed()
			.setDescription(`${message.author.username} just punched ${arg}!`)
			.setColor("#e0045e")
			.setImage(`${gif}`)
			.setTimestamp()
			message.embed(sEmbed)
	}	
=======
const ImgurAlbumCommand = require('../../structures/commands/ImgurAlbum');
const { HUG_ALBUM_ID } = process.env;
const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class PunchCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'punch',
			aliases: ['punches'],
			group: 'roleplay',
			memberName: 'punch',
			description: 'punches a user.',
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
			`https://i.pinimg.com/originals/f3/ec/8c/f3ec8c256cb22279c14bfdc48c92e5ab.gif`,
			`https://media2.giphy.com/media/AlsIdbTgxX0LC/giphy.gif`,
			`https://i.pinimg.com/originals/d7/c3/0e/d7c30e46a937aaade4d7bc20eb09339b.gif`,
			`https://i2.kym-cdn.com/photos/images/original/000/989/495/3b8.gif`,
		]
		if(!args) {
			return message.say('You can\'t punch yourself!');
		}
		
		if (args[0] == message.author.id) {
			return message.say("You can't punch yourself!");
		}
		let gif = pGifs[Math.floor(Math.random()*pGifs.length)];
		
		let arg = message.mentions.users.first();
		let sEmbed = new MessageEmbed()
			.setDescription(`${message.author.username} just punched ${arg}!`)
			.setColor("#e0045e")
			.setImage(`${gif}`)
			.setTimestamp()
			message.embed(sEmbed)
	}	
>>>>>>> 911471a31e69d42a8e7715c4659360a597d8e9b8
}