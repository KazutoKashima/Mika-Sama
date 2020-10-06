const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;

module.exports = class NekoGame extends Command {
	constructor(client) {
		super(client, {
			name: 'nekogame',
			description: 'Starts a Neko Catch game!',
			group: 'fun',
			memberName: 'nekogame',
			aliases: ['game'],
			usage: 'nekogame',
			guildOnly: true,
		});
	}
	
	async run(msg) {
		if (msg.member.hasPermission("MANAGE_MESSAGES")) {
			msg.channel.send("OK! Starting the game now!\nIt works off a timer so keep an eye out for the messages!")
			var interval = setInterval(function () {
				let Neo = `https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ85MBftkIf1S_BRoHkwlOSdrymKF8gSPP6Zg&usqp=CAU`
				let Cleo = `https://i.imgur.com/GOxjyfI.jpg`
				let Claire =  `https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1251a8d5-c247-450d-aa22-e42c7f601476/dd73lx7-dbd59561-29b9-41bf-9e4f-79a7e6bfb6d8.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMTI1MWE4ZDUtYzI0Ny00NTBkLWFhMjItZTQyYzdmNjAxNDc2XC9kZDczbHg3LWRiZDU5NTYxLTI5YjktNDFiZi05ZTRmLTc5YTdlNmJmYjZkOC5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.74cnaaLhXnFo4dgGmspqJDcIIZwaCYFOrp1a0noRaeo`
				let Ash = `https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQzl6-iV9n3ErZw9mdAQDlm3rOAvTt3HbL-NQ&usqp=CAU`
				
				let nekoGif = [ Cleo, Neo, Claire];
				let claimGif = nekoGif[Math.floor(Math.random() * nekoGif.length)];
				let emojiList = ["🎂"];
				//let reactionArray = [];

				let NekoEmbed = new MessageEmbed()
						.setDescription(`Hey, look! It's a Neko! Someone catch it!`)
						.setImage(claimGif)
						.setFooter();
				msg.channel.send(NekoEmbed)
					.then(async m => {
						await msg.channels.cache.find(message => message.id === NekoEmbed.id.react("🎂"));
					})
				
				let filter = (reaction, user) => {
					return ['🎂'].includes(reaction.emoji.name) && user.id === msg.author.id
				}
				
				msg.awaitReactions(filter, { max: 1, time: 10*minute, errors: ['time'] })
					.then(collected => {
						const reaction = collected.first();

						if (reaction.emoji.name === '🎂') {
							NekoEmbed.addField("**Catcher**", reaction.message.author)
							NekoEmbed.setFooter("It's been caught! Woohoo!")
							msg.edit("", NekoEmbed);
							db.add(`catches_${msg.guild.id}_${msg.author.id}`, 1)
						}
					})
					.catch(collected => {
						msg.channel.send("Oh no! The Neko ran away!")
					});
					
			}, 10 * minute);
			
		} else {
			msg.reply("Sorry but you can't start the game!\nPlease contact and Admin or Mod to start it!");
		}
	}
}