const { MessageEmbed, Discord } = require('discord.js');
const { Command } = require('discord.js-commando');
const db = require('quick.db');

module.exports = class LeaderboardCommand extends Command {
	constructor(client) {
		super(client, {
			name: "leaderboard",
			aliases: ["leader"],
			description: "Shows the guild's leaderboard",
			guildOnly: true,
			group: "fun",
			memberName: "leaderboard",
		})
	}
	
	run(message) {
		let args = message.content.split(' ').slice(1)
		let arg = args.join(' ')
		
		if(!args[0]) return message.channel.send(embed)

		if (args[0] == 'levels') {
			let level = db.startsWith(`level_${message.guild.id}`, { sort: '.data'})
			let content = "";

			for (let i = 0; i < level.length; i++) {
				let user = bot.users.get(level[i].ID.split('_')[2]).username

				content += `${i+1}. ${user} ~ ${level[i].data}\n`
			
			}

			let embed = new MessageEmbed()
			.setDescription(`**${message.guild.name}'s Level Leaderboard**\n\n${content}`)
			.setColor("#FFFFFF")
			message.channel.send(embed)
		}
	}
}