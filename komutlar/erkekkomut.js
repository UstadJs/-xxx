const Discord = require('discord.js');

exports.run = async (client, message, args) => {

let kayityetkili = '747169597689561261' //KAYIT YETKİLİSİ ID
let verbuse = '747169625577488416' //VERİLECEK ROL ID
let verbusem = '747174314129883177' //VERİLECEK ROL ID
let albuse = '747169627498348603' //ALINACAK ROL ID
let albusem = '' //ALINACAK ROL ID l Kullanmicaksanız silin
let isimön = '' //DEĞİŞTİRİLECEK İSMİN ÖNÜNE GELEN
let isimson = '' //DEĞİŞTİRİLECEK İSMİN SONUNA GELEN

//TİK İSMİNDE BİR EMOJİNİZ OLMASI LAZIM (Hareketli Olsa Daha Güzel Gözükür)

  if(!message.member.roles.has(kayityetkili)) 
  if(!message.member.hasPermission("ADMINISTRATOR"))
  return message.channel.send(`Bu komutu kullanabilmek için \`Kayıt\` yetkisine sahip olmasınız.`);
  let member = message.mentions.members.first()
  let isim = args.slice(1).join(" ")
  if (!member) return message.channel.send('Pişt çaktırmadan etiket at  XD')
  if (!isim) return message.channel.send('Şimdide isim yazmadın :D')

  setTimeout(function(){
  member.setNickname(`${isimön}${isim}${isimson}`)
  },2000)
  setTimeout(function(){
  member.addRole(verbuse)
  member.addRole(verbusem)
  },3000)
  setTimeout(function(){
  member.removeRole(albuse)
  member.addRole(albusem)
  },4000)
  
  const emoji = client.emojis.find(emoji => emoji.name === "aralk");
  let embed = new Discord.RichEmbed()
   .setColor('BLACK')
   .setDescription(` **Kayıt işlemi Başarılı**
 
 **<a:wswdfqwd:729867809118748672> Kayıt edilen kullanıcı :** ${isimön}${isim}${isimson}
 
 **<a:yldz:729866466668707951>  Kayıt işleminde verilen rol :** <@&${verbuse}>, <@&${verbusem}>
 
 **<a:okey:729866419126140968>  Kayıt işleminde alınan rol :** <@&${albuse}>
 `)
   .setFooter(`Komutu kullanan yetkili : ${message.author.username}`) 
   .setImage("https://media.giphy.com/media/IeS4zb4iAVGZyFwCOZ/giphy.mp4")
 message.channel.send(embed)
 message.react(emoji)
 };
 

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['erkek','j'],
  permLevel: 0
}
exports.help = {
  name: 'e',
  description: "kız kullanıcıları kayıt etme komutu.",
  usage: '!kız <yeni nick>'
}