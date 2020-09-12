const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
const request = require("request");
const ms = require("parse-ms");
const express = require("express");
const http = require("http");
const app = express();
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;



app.get("/", (request, response) => {
  console.log("Tamamdır Hocam Böyle Devam Bozma ");
  response.sendStatus(200);
});
app.listen(8000);
setInterval(() => {
  http.get(`http://projeadın.glitch.me/`);
}, 280000);
//-----------------------------------------------\\

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`👌 ${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`👌 Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};






client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);



//HGHB

////////////////////////



////////////////////////////


client.on("message", msg => {
    const kzgn = client.emojis.get("729745793258356797");
    const embedlul = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setDescription( msg.author + " Reklam Yasak Bunu Bilmiyormusun!")
    
const embedlulz = new Discord.RichEmbed()
    .setTitle("Sunucunda " + msg.author.tag + " reklam yapıyor!")
      .setColor(0x00AE86)
      .setDescription("?uyar <kişi> komutu ile onu uyarabilir ya da ?kick <kişi> veya ?ban <kişi> komutlarını kullanarak onu sunucudan uzaklaştırabilirsin!")
    .addField("Kullanıcının mesajı:", "**" + msg.content + "**")

if (msg.content.toLowerCase().match(/(discord\.gg\/)|(discordapp\.com\/invite\/) (htpp)/g) && msg.channel.type === "text" && msg.channel.permissionsFor(msg.guild.member(client.user)).has("MANAGE_MESSAGES")) {
    if(msg.member.hasPermission('BAN_MEMBERS')){
    return;
    } else {
    msg.delete(30).then(deletedMsg => {
     deletedMsg.channel.send(embedlul)
     msg.guild.owner.send(embedlulz).catch(e => {
            console.error(e);
          });
        }).catch(e => {
          console.error(e);
        });
      };
      };
    })
;


/////////....



////////////////////////

client.on("message", msg => {
  const uyarıembed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setDescription("Comar " + msg.author + "Link atma suratına işerim")

const dmembed = new Discord.RichEmbed()
  .setTitle("Sunucunda " + msg.author.tag + " reklam yapıyor!")
    .setColor(0x00AE86)
    .setDescription(" " + msg.author.tag + "**Sunucuda reklam yapıyor gereken cezayı vermelisin")
  .addField("Kullanıcının mesajı:", "**" + msg.content + "**")

if (msg.content.toLowerCase().match(/(discord\.gg\/)|(discordapp\.com\/invite\/)/g) && msg.channel.type === "text" && msg.channel.permissionsFor(msg.guild.member(client.user)).has("MANAGE_MESSAGES")) {
  if(msg.member.hasPermission('ADMINISTRATOR')){
  return;
  } else {
  msg.delete(30).then(deletedMsg => {
   deletedMsg.channel.send(uyarıembed)
   msg.guild.owner.send(dmembed).catch(e => {
          console.error(e);
        });
      }).catch(e => {
        console.error(e);
      });
    };
    };
  })



//ÖZELKDOLAMALAR

client.on("userUpdate", async (oldUser, newUser) => {
  if (oldUser.username !== newUser.username) {
    
    let tag = "ꄶ"; //tagınız
    let sunucu = "446065932318670850"; //sunucu ID
    let kanal = "747169656883642508"; //log kanal id
    let rol = "747169621374795917"; // rol ID
    if (
      newUser.username.includes(tag) &&
      !client.guilds
        .get(sunucu)
        .members.get(newUser.id)
        .roles.has(rol)
    ) {
      client.channels
        .get(kanal)
        .send(
          `**${newUser} Aramıza Katıldı** <a:okey:729866419126140968>`
        );
      client.guilds
        .get(sunucu)
        .members.get(newUser.id)
        .addRole(rol);
    }
    if (
      !newUser.username.includes(tag) &&
      client.guilds
        .get(sunucu)
        .members.get(newUser.id)
        .roles.has(rol)
    ) {
      client.guilds
        .get(sunucu)
        .members.get(newUser.id)
        .removeRole(rol);
      client.channels
        .get(kanal)
        .send(
          `**${newUser} Aramzıdan Ayrıldı**`
        );
    }
  }
});








  client.on('guildMemberAdd', member => {
    const kisi = member.guild.members.size
    //emoji
    
        const emoji = (client.emojis.find("name", "wswdfqwd"))
        const emoji3 = (client.emojis.find("name", "wq"))
        const emoji4 = (client.emojis.find("name", "alarm"))
        const emoji5 = (client.emojis.find("name", "wswdfqwd"))
        const emoji6 = (client.emojis.find("name", "9b4764bceb804728a2715ebacc9f79e3"))  
         const emoji7 = (client.emojis.find("name", "asdad"))
    //emoji son
    //moment
    const moment = require("moment")
    
    moment.locale('tr');
       var x = moment(member.user.createdAt)
        .add(7, "days")
        .fromNow();
       x = x.replace("birkaç saniye önce", " ");
      let guvenlik = 'Güvenli Gözüküyor <a:siyahtik:730540565304967179>'
    if (!x.includes("önce") || x.includes("sonra") || x == " ") guvenlik = 'Şüpheli Gözüküyor <a:uyar:729745793258356797>'
    //moment son
      let emb = new Discord.RichEmbed()
    .setImage()
      .addField(`**__Sunucuya Giriş Yapan Birisi Var__**`,`${emoji} ${member}, **Sunucuya Hoşgeldin**\n**${emoji} Seninle Beraber** **__${kisi}__** **Kişi Olduk**${emoji} \n${emoji6} **Sunucuya kayıt olmak için ses teyit odalarına geçebilirsiniz.**\n${emoji5} **Seninle İlgilenecek Yetkililer:**<@&747169597286776873> `)
    .addField(`**__Hesap Bilgileri__**`,`${emoji4} **Kuruluş Tarihi:** ${moment(member.user.createdAt).add(7, "h").format("LLLL")}\n${emoji4} **Güvenli mi:** ${guvenlik}`)
    
    member.guild.channels.get('747169641712975913').send(emb)
    });





//kucuk komut




client.on('message', async msg => {
  if (msg.content.toLowerCase() === 'tag') {;
    msg.reply("**ꄶ**")
  }
  });


client.on('message', async msg => {
  if (msg.content.toLowerCase() === 'klan') {;
    msg.reply("**SIRA 26**")
  }
  });

  client.on('message', async msg => {
    if (msg.content.toLowerCase() === 'takım') {;
      msg.reply("**SIRA 26**")
    }
    });
 
 

  client.on('message', async msg => {
    if (msg.content.toLowerCase() === 'link') {;
      msg.reply("https://discord.gg/aBc53Qa")
    }
    });
 



//MÜZİK KISMI 




