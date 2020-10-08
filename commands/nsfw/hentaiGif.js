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

module.exports = class hentaiGIFCommand extends Command {
	constructor(client) {
		super(client, {
			name: "hentaigif",
			description: "sends a hentai gif",
			group: 'nsfw',
			memberName: 'hentaigif',
			usage: "hentaigif"
		})
	}
	
	run(msg) {
		if (!msg.channel.nsfw || !msg.channel.type === "dm") return msg.say(":blush: You can't send that here!");
		superagent.get('https://nekos.life/api/v2/img/Random_hentai_gif')
			.end((err, response) => {
				const hentaiEmbed = new MessageEmbed()
				setTitle("Hentai")
				.setImage(response.body.url)
				.setColor(`#000000`)
				.setFooter(`Tags: Hentai`)
				.setURL(response.body.url)
				msg.channel.send(hentaiEmbed);
			})
	}
};