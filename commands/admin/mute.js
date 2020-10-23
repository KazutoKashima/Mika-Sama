const { Discord, MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-commando');
const db = require('quick.db');

module.exports = class MuteCommand extends Command {
    constructor(client) {
        super(client, {
            name: "mute",
            description: "Mutes a user for x amount of time",
            guildOnly: true,
            memberName: "mute",
            group: "admin",
            clientPermissions: ['MANAGE_MESSAGES', 'SEND_MESSAGES', 'MANAGE_ROLES'],
        });
    }

    async run(message) {
        //!tempmute @user 1s/m/h/d
        const args = message.content.split(' ').slice(2);
        const arg = args.join(' ');
        let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!tomute) return message.reply("Couldn't find user.");
        if (tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't mute them!");
        let muterole = message.guild.roles.find(muterole => muterole.name === "muted");
        //start of create role
        if (!muterole) {
            try {
                muterole = await message.guild.createRole({
                    name: "muted",
                    color: "#000000",
                    permissions: []
                })
                message.guild.channels.forEach(async (channel, id) => {
                    await channel.overwritePermissions(muterole, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false
                    });
                });
            } catch (e) {
                console.log(e.stack);
            }
        }
        //end of create role
        let mutetime = arg;
        if (!mutetime) return message.reply("You didn't specify a time!");

        await (tomute.addRole(muterole.id));
        message.reply(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`);

        setTimeout(function () {
            tomute.removeRole(muterole.id);
            message.channel.send(`<@${tomute.id}> has been unmuted!`);
        }, ms(mutetime));
    }
}