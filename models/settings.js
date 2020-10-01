// we grab the Schema and model from mongoose library.
const { Schema, model } = require("mongoose");

// We declare new schema(s)
const guildSettingsSchema = new Schema({
  gid: {type: String },
  prefix: { type: String, default: "m!" }
});

// we export it as a mongoose module.
module.exports = model("guild_settings", guildSettingsSchema);
