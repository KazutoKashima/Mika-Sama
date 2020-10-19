// JavaScript source code
const { Command } = require('discord.js-commando');
const MessageEmbed = require('discord.js');
const devID = '286957313489764353';

module.exports = class TestWebhookCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'testhook',
            group: 'utils',
            memberName: 'testhook',
            description: 'A WebHook tester',
        });
    }
    async run(msg) {
        if (msg.author.id != devID) return;

        const hookEmbed1 = MessageEmbed()
            .setTitle("Test Webhook 1")
            .setColor("#0099ff")
        try {
            const webhooks = msg.channel.fetchWebhooks();
            const webhook = webhooks.first();

            await webhook.send('Webhook test', {
                username: 'Mika\'s test webhook',
                avatarURL: '',
                embeds: [hookEmbed1],
            });
        } catch (e) {
            console.error(e.stack);
        }
    }
};