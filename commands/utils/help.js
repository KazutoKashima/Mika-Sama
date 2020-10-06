
require('dotenv').config();
const { Command } = require('discord.js-commando');
const { MessageEmbed, Discord } = require('discord.js');
const { prefix } = process.env.PREFIX;

module.exports = class helpCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'help',
			group: 'utils',
			memberName: 'help',
			description: 'List all of my commands or info about a specific command.',
			aliases: ['commands', 'h'],
			usage: '[command name]',
			cooldown: 5,
		});
	}
	
	run(message, args) {
		const data = [];
		const { commands } = message.client;
		
		let helpGifs = [
			`https://64.media.tumblr.com/0ff48dce2689bd713c215bc6794ee479/tumblr_o328lujnMO1tydz8to1_540.gifv`,
			`https://media.tenor.com/images/49c76a66e5e7b224283905f520b90426/tenor.gif`,
			`https://thumbs.gfycat.com/FaroffEmbarrassedHerald-size_restricted.gif`,
			`https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSdL51HM-lKo2muxCB-d2WJMxKxm3FS-xU0rw&usqp=CAU`,
			`https://i.imgur.com/rViw7vP.gif`,
			`https://i.imgur.com/UcGioIH.gif`,
			`https://i.imgur.com/bwuik6j.gif`,
			`https://i.imgur.com/se1uFas.gif`,
			`https://i.imgur.com/foSkpOV.gif`,
			`https://i.imgur.com/FuINlu9.gif`,
			`https://i.imgur.com/TXlp1YT.gif`,
			`https://i.imgur.com/lgbPwfk.gif`,
			`https://tenor.com/view/hello-happy-feet-penguin-wave-waving-gif-6103866`,
		];
		
		let gif = helpGifs[Math.floor(Math.random() * helpGifs.length)];
		
		if(!args.length) {
			
		let helpEmbed = new MessageEmbed()
			.setTitle("𝖧-𝗁𝗂! 𝖸𝗈𝗎 𝖼𝖺𝗇 𝗎𝗌𝖾 𝗆𝗒 𝖼𝗈𝗆𝗆𝖺𝗇𝖽𝗌 𝗐𝗂𝗍𝗁 `𝗆!`")
			.setColor("#673ab7")
			.addField("**Utility:**", "ping, server info, bot info, \nsupport, invite, help")
			.addField("**Roleplay:**", "Hug, Kill, Pat,\nPoke, Punch, Slap\n*More is to come!*")
			.addField("**Fun:**", "funfact, vote, avatar, \"Mika you're dysfunctional\"")
			.addField("**Economy:**", "work, deposit/bank/depos, rob")
			.addField("**Music:**", "Play, Skip, Stop")
			.addField(":bangbang: Leveling :bangbang:", "use the `create` cmd to add yourself to the leveling system and `no-level` to remove yourself!\nYou can view you level with `level` or `lvl`\nA leader-board is soon to come!")
			.addField("**Administrator:**", "Kick, Ban, Report(ModMail), Purge, Mute")
			.setImage(gif)
			.setFooter(`Join us with the support cmd!\nThere's also easter eggs, try to find them!`)
			data.push("Here's a list of all my commands:")
		//data.push(`\nYou can send \`${prefix}help [command name]\` to get help on a command`);
			
		return message.author.send(helpEmbed)
			.then(() => {
				if (message.channel.type === 'dm') return;
				message.say('I\'ve sent you a DM with all my commads!');
			})
			.catch(error => {
				console.error(err.stack);
				message.say("It seems that I can't DM you! Do you have your DMs open?");
			});
		}
		
		message.embed(helpEmbed);
	}
};