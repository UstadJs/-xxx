const Discord = require('discord.js');

let owner = '734357625478709259'
let kayitci = '734357648094396467'
let ekip = '734357653710569522'

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("BLACK")
    .setTitle('NARKOTİK FAMLY')
    .setDescription(`**Narkotik Team**
    
    <@&${owner} __Sunucu Sorumlusu__ <a:yldz:729866466668707951>

    <@&${kayitci} __Sunucu kayıt sorumlusu__ <a:yldz:729866466668707951>

    <@&${ekip} __Narkotik Team Ekip Rollü__ <a:okey:729866419126140968>
    
    `)
    .setFooter(`Komut Kullanan Üye : ${message.author.username}`)
    .setTimestamp()
  
    channel.send(exampleEmbed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'raidcall',
  description: '',
  usage: ''
};
