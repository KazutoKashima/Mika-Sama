const mongoose = require("mongoose");

const MemberData = require("../../models/guildMember");

const UserData = require("../../models/user");

const DJSLib = require("discord.js").version;

class DiscordMongoDBEconomy {

    constructor() {
        throw new Error('Not a constructor');
    }

    /**
     * Connect to the mongoDB database
     * @param {string} dbUrl - The url of the mongoDB database
     * @param {object} dbOptions - The options for the mongoDB database connection
     */
    static async connectDatabase(dbUrl, dbOptions) {
        if (!dbUrl) throw new TypeError("A database adress must be provided.");
        if (!dbOptions) dbOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        };
        mongoose.connect(dbUrl, dbOptions).catch(error => console.log(error));
        mongoose.connection.on("disconnected", () => console.log(`Mongoose disconnected.`));
        mongoose.connection.on("err", err => console.log(`Mongoose connexion error...\n${err.stack}`));
        return true;
    }

    /**
     * Disconnect from the database
     */
    static async disconnectDatabase() {
        return mongoose.connection.close();
    }

    /**
     * Create a member if there are no entry in the database for him
     * @param {string} memberId - The id of the member
     * @param {string} guildId - The id of the guild
     */
    static async createMember(memberId, guildId) {
        if (!memberId) throw new TypeError("A member id must be specified.");
        if (!guildId) throw new TypeError("A guild id must be specified.");

        let existent = await MemberData.findOne({
            memberID: memberId,
            guildID: guildId
        });
        if (existent) return false;

        let create = new MemberData({
            memberID: memberId,
            guildID: guildId
        });

        await create.save().catch(e => console.log(`An error occured while creating the member : ${e}`));

        return create;
    }

    /**
     * Delete a member if there is an entry in the database for him
     * @param {string} memberId - The id of the member
     * @param {string} guildId - The id of the guild
     */
    static async deleteMember(memberId, guildId) {
        if (!memberId) throw new TypeError("A member id must be specified.");
        if (!guildId) throw new TypeError("A guild id must be specified.");

        let member = await MemberData.findOne({
            memberID: memberId,
            guildID: guildId
        });
        if (!member) return false;

        await MemberData.findOneAndDelete({
            memberID: memberId,
            guildID: guildId
        }).catch(e => console.log(`An error occured while deleting the member : ${e}`));

        return member;
    }

    /**
     * Add an amount of xp
     * @param {string} memberId - The id of the member
     * @param {string} guildId - The id of the guild
     * @param {number} xp - Amount of xp to add or substract at every messages
     */
    static async attributeXp(memberId, guildId, xp) {
        if (!memberId) throw new TypeError("A member id must be specified.");
        if (!guildId) throw new TypeError("A guild id must be specified.");
        if (!xp) throw new TypeError("An amount of xp must be specified.");
        if (xp < 1) throw new TypeError("The given xp amount cannot be lower than 1.")
        if (isNaN(xp)) throw new TypeError("The given xp amount must be a number.")

        let member = await MemberData.findOne({
            memberID: memberId,
            guildID: guildId
        });

        if (!member) {
            let newUser = new MemberData({
                memberID: memberId,
                guildID: guildId,
                xp: xp,
                level: Math.floor(0.1 * Math.sqrt(xp))
            });

            await newUser.save().catch(e => console.log(`An error occured while saving the user : ${e}`));

            return (Math.floor(0.1 * Math.sqrt(xp)) > 0);
        };

        member.xp += xp;
        member.level = Math.floor(0.1 * Math.sqrt(member.xp));

        await member.save().catch(e => console.log(`An error occured while saving the user : ${e}`));

        return (Math.floor(0.1 * Math.sqrt(member.xp -= xp)) < member.level);
    }

    /**
     * Add an amount of levels
     * @param {string} memberId - The id of the member
     * @param {string} guildId - The id of the guild
     * @param {number} levelToAttribute - Amount of level to add or substract
     */
    static async attributeLevel(memberId, guildId, levelToAttribute) {
        if (!memberId) throw new TypeError("A member id must be specified.");
        if (!guildId) throw new TypeError("A guild id must be specified.");
        if (!levelToAttribute) throw new TypeError("An amount of level must be specified.");
        if (levelToAttribute < 1) throw new TypeError("The given level amount cannot be lower than 1.")
        if (isNaN(levelToAttribute)) throw new TypeError("The given level amount must be a number.")

        let member = await MemberData.findOne({
            memberID: memberId,
            guildID: guildId
        });
        if (!member) return false;

        member.level += levelToAttribute;
        member.xp = member.level * member.level * 100;

        member.save().catch(e => console.log(`An error occured while saving the member : ${e}`));

        return member;
    }

    /**
     * Fetch the informations of a member
     * @param {string} memberId - The id of the member
     * @param {string} guildId - The id of the guild
     */
    static async fetchMember(memberId, guildId) {
        if (!memberId) throw new TypeError("A member id must be specified.");
        if (!guildId) throw new TypeError("A guild id must be specified.");

        let member = await MemberData.findOne({
            memberID: memberId,
            guildID: guildId
        });
        if (!member) return false;

        return member;
    }

    /**
     * Get the raw data of the leaderboard
     * @param {string} guildId - The id of the guild
     * @param {number} limit - The limit of members displayed on the leaderboard
     */
    static async getLeaderBoard(guildId, limit) {
        if (!guildId) throw new TypeError("A guild id must be specified.");
        if (isNaN(limit)) throw new TypeError("The limit must be a number.")
        if (limit < 1) throw new TypeError("The limit cannot be lower than 1.")
        if (!limit) limit = "10";

        var table = await MemberData.find({
            guildID: guildId
        }).sort([
            ['xp', 'descending']
        ]).exec();

        return table.slice(0, limit);
    }

    /**
     * Convert the raw leaderboard into a readeable
     * @param {string} client - The user's discord client
     * @param {array} rawLeaderBoard - The raw leaderboard
     */
    static convertLeaderBoard(client, rawLeaderBoard) {
        if (!client) throw new TypeError("A client must be specified.");
        if (!rawLeaderBoard) throw new TypeError("A raw leaderboard must be specified.");

        if (rawLeaderBoard.length < 1) return [];

        const convertedArray = [];

        rawLeaderBoard.map(key => convertedArray.push({
            guildID: key.guildID,
            memberID: key.memberID,
            xp: key.xp,
            level: key.level,
            position: (rawLeaderBoard.findIndex(i => i.guildID === key.guildID && i.memberID === key.memberID) + 1),
            username: DJSLib.startsWith("12") ? (client.users.cache.get(key.memberID) ? client.users.cache.get(key.memberID).username : "Unknown") : (client.users.get(key.memberID) ? client.users.get(key.memberID).username : "Unknown"),
            discriminator: DJSLib.startsWith("12") ? (client.users.cache.get(key.memberID) ? client.users.cache.get(key.memberID).discriminator : "0000") : (client.users.get(key.memberID) ? client.users.get(key.memberID).discriminator : "0000"),
        }));
        return convertedArray;
    }

    /**
     * Set an amount of xp for a member (reset the current xp)
     * @param {string} memberId - The id of the member
     * @param {string} guildId - The id of the guild
     * @param {number} xpToSet - Amount of xp to set
     */
    static async setXp(memberId, guildId, xpToSet) {
        if (!memberId) throw new TypeError("A member id must be specified.");
        if (!guildId) throw new TypeError("A guild id must be specified.");
        if (!xpToSet) throw new TypeError("An amount of xp must be specified.");
        if (xpToSet < 1) throw new TypeError("The given xp amount cannot be lower than 1.")
        if (isNaN(xpToSet)) throw new TypeError("The given xp amount must be a number.")

        let member = await MemberData.findOne({
            memberID: memberId,
            guildID: guildId
        });

        if (!member) return false;

        member.xp = xpToSet;
        member.level = Math.floor(0.1 * Math.sqrt(member.xp));

        member.save().catch(e => console.log(`An error occured while saving the member : ${e}`));

        return member
    }

    /**
     * Set an amount of level for a member (reset the current xp)
     * @param {string} memberId - The id of the member
     * @param {string} guildId - The id of the guild
     * @param {number} xpToSet - Amount of levels to set
     */
    static async setLevel(memberId, guildId, levelToSet) {
        if (!memberId) throw new TypeError("A member id must be specified.");
        if (!guildId) throw new TypeError("A guild id must be specified.");
        if (!levelToSet) throw new TypeError("An amount of level must be specified.");
        if (levelToSet < 1) throw new TypeError("The given level amount cannot be lower than 1.")
        if (isNaN(levelToSet)) throw new TypeError("The given level amount must be a number.")
    
        let member = await MemberData.findOne({
            memberID: memberId,
            guildID: guildId
        });
        if (!member) return false;
    
        member.level = levelToSet;
        member.xp = levelToSet * levelToSet * 100;
    
        member.save().catch(e => console.log(`Failed to set level: ${e}`) );
    
        return member;
      }
}


module.exports = DiscordMongoDBEconomy;