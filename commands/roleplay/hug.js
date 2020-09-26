//const ImgurAlbumCommand = require('../../structures/commands/ImgurAlbum');
//const { HUG_ALBUM_ID } = process.env;
const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = class HugCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'hug',
			aliases: ['hugs'],
			group: 'roleplay',
			memberName: 'hug',
			description: 'hugs a user.',
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
		
		let hGifs = [
			`https://media2.giphy.com/media/PHZ7v9tfQu0o0/200.gif`,
			`https://i.pinimg.com/originals/f2/80/5f/f2805f274471676c96aff2bc9fbedd70.gif`,
			`https://i.imgur.com/r9aU2xv.gif`,
			`https://i.imgur.com/wOmoeF8.gif`,
			`https://25.media.tumblr.com/tumblr_ma7l17EWnk1rq65rlo1_500.gif`,
		]
		
		let gif = hGifs[Math.floor(Math.random()*hGifs.length)];
		
		try {
			if(!args) {
				return message.say(`@<!${message.author.id}> You can't hug yourself!`);
			}
		}
		catch (error) {
			console.log(error.stack);
		}
		
		try{ 
			if (args === '<@!712495341097975848>') {
				//let arg = args.join(" ").slice(22);
				let sEmbed = new MessageEmbed()
				.setDescription(`OwO A hug? Yay!`)
				.setColor("#ffffff")
				.setImage(`${gif}`)
				.setTimestamp()
				return message.embed(sEmbed);
			}

			let arg = message.mentions.users.first();			
			let hEmbed = new MessageEmbed()
				.setDescription(`${message.author.username} just hugged ${arg}!`)
				.setColor("#ff00ff")
				.setImage(`${gif}`)
				.setTimestamp()
			return message.embed(hEmbed)
		}
		catch (error) {
			console.log(error.stack);
		}
		//return message.embed(sEmbed);
	}
};