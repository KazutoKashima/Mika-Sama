<<<<<<< HEAD
const { TOKEN, OWNERS, PREFIX, INVITE } = process.env;
const path = require('path');
const { Command } = require('discord.js-commando');
const { Intents, MessageEmbed } = require('discord.js');
const Client = require('../../structures/Client');
const client = new Client({
	commandPrefix: PREFIX,
	owner: OWNERS.trim().split(','),
	invite: INVITE,
	disableMentions: 'everyone',
	ws: { intents: Intents.ALL },
	unknownCommandResponse: false,
});

client.login(TOKEN);

module.exports = class BotInfoCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'botinfo',
			group: 'utils',
			memberName: 'bot-info',
			aliases: ['bot', 'binfo'],
			description: 'gives info on me!.',
			clientPermissions: ['ATTACH_FILES'],
			//albumID: POKE_ALBUM_ID,
		});
	}
	
	run(message, args) {
		let bIcon = client.user.displayAvatarURL();
        let clientembed = new MessageEmbed()
            .setDescription("Bot Information")
            .setColor("#15f153")
            .setThumbnail(bIcon)
            .addField("Bot Name", client.user.username)
            .addField("Created On", client.user.createdAt);

        return message.embed(clientembed);
	}
=======
const { TOKEN, OWNERS, PREFIX, INVITE } = process.env;
const path = require('path');
const { Command } = require('discord.js-commando');
const { Intents, MessageEmbed } = require('discord.js');
const Client = require('../../structures/Client');
const client = new Client({
	commandPrefix: PREFIX,
	owner: OWNERS.trim().split(','),
	invite: INVITE,
	disableMentions: 'everyone',
	ws: { intents: Intents.ALL },
	unknownCommandResponse: false,
});

client.login(TOKEN);

module.exports = class BotInfoCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'botinfo',
			group: 'utils',
			memberName: 'bot-info',
			aliases: ['bot', 'binfo'],
			description: 'gives info on me!.',
			clientPermissions: ['ATTACH_FILES'],
			//albumID: POKE_ALBUM_ID,
		});
	}
	
	run(message, args) {
		let bIcon = client.user.displayAvatarURL();
        let clientembed = new MessageEmbed()
            .setDescription("Bot Information")
            .setColor("#15f153")
            .setThumbnail(bIcon)
            .addField("Bot Name", client.user.username)
            .addField("Created On", client.user.createdAt);

        return message.embed(clientembed);
	}
>>>>>>> 911471a31e69d42a8e7715c4659360a597d8e9b8
};