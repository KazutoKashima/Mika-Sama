const { Command } = require('discord.js-commando');
const MessageEmbed = require('discord.js');
const Discord = require('discord.js')

module.exports = class DashboardCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'dashboard',
            description: "links user to the dashboard",
            group: "utils",
            memberName: "dashboard",
            clientPermissions: ["SEND_MESSAGES"]
        });
    }

    run(message) {
        let dashboardEmbed = new MessageEmbed()
            .setTitle('My Dashboard')
            .setDescription('Sure thing! [192.168.0.155:3000/](Here it is!)')
            .setColor(white)
        message.channel.send(dashboardEmbed);
    }
};