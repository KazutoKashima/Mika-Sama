<<<<<<< HEAD
const ImgurAlbumCommand = require('../../structures/commands/ImgurAlbum');
const { HUG_ALBUM_ID } = process.env;
const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class PatCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'pat',
			aliases: ['pats'],
			group: 'roleplay',
			memberName: 'pat',
			description: 'pats a user.',
			clientPermissions: ['ATTACH_FILES'],
			//albumID: HUG_ALBUM_ID,
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
		let pat = [
			`https://i.imgur.com/oTUDUAx.gif`,
			`https://giffiles.alphacoders.com/930/93090.gif`,
			`http://cdn.lowgif.com/small/8261ca3e5c7495f1-head-pat-gif-9-gif-800-450-moe-pinterest-anime.gif`,
			`https://64.media.tumblr.com/cf7ab0c9ca0d574aff3308e0767d370f/tumblr_pf4y87cTnH1th206io1_500.gif`,
			`https://i.imgur.com/UWbKpx8.gif`,
			`https://thumbs.gfycat.com/ImpurePleasantArthropods-small.gif`,
			`https://media1.giphy.com/media/ARSp9T7wwxNcs/giphy.gif`,
			`https://pa1.narvii.com/6451/1123cea199f4a6f0134c9dfdfd97e8f0fabce777_hq.gif`,
			`https://farm4.staticflickr.com/3815/9190388546_ce2a03f308_o.gif`,
			`https://media.tenor.com/images/40f454db8d7ee7ccad8998479fbabe69/tenor.gif`,
		]
		if(!args || message.mentions.users === message.author.id) {
			return message.say('You can\'t pat yourself!');
		}
		let gif = pat[Math.floor(Math.random()*pat.length)];
		
		if (args === '<@!712495341097975848>') {
			let arg = message.mentions.users.first();
			let sEmbed = new MessageEmbed()
			.setDescription(`OwO A pat? Yay!`)
			.setColor("#ffffff")
			.setImage(`${gif}`)
			.setTimestamp()
			return message.embed(sEmbed);
		}
		
		let arg = message.mentions.users.first();
		let sEmbed = new MessageEmbed()
			.setDescription(`${message.author.username} just patted ${arg}!`)
			.setColor("#ffec8b")
			.setImage(`${gif}`)
			.setTimestamp()
		return message.embed(sEmbed)
	}	
=======
const ImgurAlbumCommand = require('../../structures/commands/ImgurAlbum');
const { HUG_ALBUM_ID } = process.env;
const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class PatCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'pat',
			aliases: ['pats'],
			group: 'roleplay',
			memberName: 'pat',
			description: 'pats a user.',
			clientPermissions: ['ATTACH_FILES'],
			//albumID: HUG_ALBUM_ID,
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
		let pat = [
			`https://i.imgur.com/oTUDUAx.gif`,
			`https://giffiles.alphacoders.com/930/93090.gif`,
			`http://cdn.lowgif.com/small/8261ca3e5c7495f1-head-pat-gif-9-gif-800-450-moe-pinterest-anime.gif`,
			`https://64.media.tumblr.com/cf7ab0c9ca0d574aff3308e0767d370f/tumblr_pf4y87cTnH1th206io1_500.gif`,
			`https://i.imgur.com/UWbKpx8.gif`,
			`https://thumbs.gfycat.com/ImpurePleasantArthropods-small.gif`,
			`https://media1.giphy.com/media/ARSp9T7wwxNcs/giphy.gif`,
			`https://pa1.narvii.com/6451/1123cea199f4a6f0134c9dfdfd97e8f0fabce777_hq.gif`,
			`https://farm4.staticflickr.com/3815/9190388546_ce2a03f308_o.gif`,
			`https://media.tenor.com/images/40f454db8d7ee7ccad8998479fbabe69/tenor.gif`,
		]
		if(!args || message.mentions.users === message.author.id) {
			return message.say('You can\'t pat yourself!');
		}
		let gif = pat[Math.floor(Math.random()*pat.length)];
		
		if (args === '<@!712495341097975848>') {
			let arg = message.mentions.users.first();
			let sEmbed = new MessageEmbed()
			.setDescription(`OwO A pat? Yay!`)
			.setColor("#ffffff")
			.setImage(`${gif}`)
			.setTimestamp()
			return message.embed(sEmbed);
		}
		
		let arg = message.mentions.users.first();
		let sEmbed = new MessageEmbed()
			.setDescription(`${message.author.username} just patted ${arg}!`)
			.setColor("#ffec8b")
			.setImage(`${gif}`)
			.setTimestamp()
		return message.embed(sEmbed)
	}	
>>>>>>> 911471a31e69d42a8e7715c4659360a597d8e9b8
}