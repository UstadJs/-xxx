const Discord = require("discord.js")
exports.run = (bot, message) => {
  if(message.author.bot || message.channel.type === "dm") return;
 message.channel.send("https://discord.gg/aBc53Qa")
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["linkver","davet"],
  permLevel: 0
};

exports.help = {
  name: "link",
  description: "tag",
  usage: "tag"
};