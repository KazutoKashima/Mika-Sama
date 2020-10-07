// .env stuff
require('dotenv').config(); // .env register
const { TOKEN, OWNERS, PREFIX, INVITE } = process.env;
const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const superagent = require("snekfetch");
const mongoEco = require('discord-mongodb-economy');
const Client = require('../../structures/Client');
const client = new Client({
        commandPrefix: PREFIX,
        owner: OWNERS.split(','),
        invite: INVITE,
        disableMentions: 'everyone',
        unknownCommandResponse: false,
});

client.login(TOKEN);

module.exports = class nekoLewd extends Command {
	constructor(client) {
		super(client, {
			name: "nekolewd",
			description: "Lewd neko",
			group: 'nsfw',
			memberName: 'nekolwed',
			usage: "nekolewd"
		})
	}
	
	run(msg) {
		if (!message.channel.nsfw) return message.channel.send('You can use this command in an NSFW Channel!')
    superagent.get('https://nekos.life/api/v2/img/fox_girl')
        .end((err, response) => {
			const lewdembed = new Discord.RichEmbed()
			.setTitle("Hentai")
			.setImage(response.body.url)
			.setColor(`#000000`)
			.setFooter(`Tags: fox girl`)
			.setURL(response.body.url);
			message.channel.send(lewdembed);
		})
	}
}