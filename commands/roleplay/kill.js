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
			`https://media1.tenor.com/images/0304cf80269c43d51bab9554c04435e9/tenor.gif`,
			`https://64.media.tumblr.com/5dae40d8a40d8b74ab1752e788edac8a/tumblr_p5rj16Pjh41ri5ljho1_400.gifv`,
			`https://media1.tenor.com/images/d42b8c67ceb776052cadb53306dd2b12/tenor.gif`,
			`https://media1.tenor.com/images/c4b237dbcf676cf49a6d6d11cfbe45c8/tenor.gif`,
			`https://i.makeagif.com/media/10-04-2015/_ex9rl.gif`,
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
};