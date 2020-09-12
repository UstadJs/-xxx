const Discord = require("discord.js");
module.exports.run = async (bot, message, args, member, client, level) => {
  let user =
    message.guild.member(message.mentions.users.first()) ||
    message.guild.members.get(args[0]);
  if (!user) return message.reply("**Etiket Atmayı Unuttun!**");

  user.addRole("747169621374795917");
   
  let kayıtyetkili = '747169597286776873'
  if(!message.member.roles.has(kayıtyetkili)) 
  if(!message.member.hasPermission("ADMINISTRATOR"))
  return message.channel.send(`Bu komutu kullanabilmek için ${kayıtyetkili} yetkisine sahip olmasınız.`);

  const ky = new Discord.RichEmbed()
    .setDescription(
      ` ${user}, **Kullanıcısına <@&747169621374795917> verildi **`
    )
    .setColor("BLACK")
    .setTimestamp();
  message.channel.send(ky);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["narkotik"],
  permLevel: 0
};
exports.help = {
  name: "n",
  description: "Birine Vip Rolü Verir",
  usage: "CS 1.6"
};
