    
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
    if (message.content === 'teams') {
    	if(!message.member.roles.find(r => r.name === "Moderator")) return message.channel.send("You do not have permissions")
                    const nlg = new  Discord.RichEmbed()
                    .setTitle('Team name: No Limits Gaming')
                    .addField('Nationality', 'Europe')
                    .addField('Captains Discord', "@Nick[Ninja]#5302")
                    .addField('Captains Uplay', 'Ninja.NLG')
                    .setColor(0xFF7400) 
                    message.channel.sendEmbed(nlg);
                    const da = new  Discord.RichEmbed()
                    .setTitle('Team name: Dark Assassins')
                    .addField('Nationality', 'Europe')
                    .addField('Captains Discord', "@gouldyoldy.DAS#2127 ")                
                    .addField('Captains Uplay', 'Gouldyoldy.DAS')
                    .setColor(0x001FFF)
                    message.channel.sendEmbed(da);
                    const tpg1 = new  Discord.RichEmbed()
                    .setTitle('Team name: The Problem Gods[1]')
                    .addField('Nationality', 'Hungary')
                    .addField('Captains Discord', "@[TPG]Ader#8140")                
                    .addField('Captains Uplay', 'TPG_xDxRLxRD')
                    .setColor(0xFFF000)
                    message.channel.sendEmbed(tpg1);
                    const tpg2 = new  Discord.RichEmbed()
                    .setTitle('Team name: The Problem Gods[2]')
                    .addField('Nationality', 'Hungary')
                    .addField('Captains Discord', "@Jarnekem#6116")                
                    .addField('Captains Uplay', 'TPG_Jarnekem')
                    .setColor(0x9F0E0E)
                    message.channel.sendEmbed(tpg2);
                    const bf = new  Discord.RichEmbed()
                    .setTitle('Team name: Burning Foxes')
                    .addField('Nationality', 'Europe')
                    .addField('Captains Discord', "Vetro#4641")                
                    .addField('Captains Uplay', 'Vetro.BFoxes')
                    .setColor(0xCC1C79)
                    message.channel.sendEmbed(bf);
                    const hon = new  Discord.RichEmbed()
                    .setTitle('Team name: Dynasty eSports')
                    .addField('Nationality', 'Europe')
                    .addField('Captains Discord', "Fayad#6534")                
                    .addField('Captains Uplay', 'Julien.DYN')
                    .setColor(0x12DEA3)
                    message.channel.sendEmbed(hon);
                    const fd = new  Discord.RichEmbed()
                    .setTitle('Team name: For Defenders')
                    .addField('Nationality', 'Europe')
                    .addField('Captains Discord', "@DaBi#0515") 
                    .addField('Captains Uplay', 'Waza..')
                    .setColor(0x2EFF00)
                    message.channel.sendEmbed(fd);
                    const ti = new  Discord.RichEmbed()
                    .setTitle('Team name: Team IntelliGents')
                    .addField('Nationality', 'Europe')
                    .addField('Captains Discord', "@Dr_Klenk#8437") 
                    .addField('Captains Uplay', 'Klenk.iGents')
                    .setColor(0x7C00FF)
                    message.channel.sendEmbed(ti);
                    const edt = new  Discord.RichEmbed()
                    .setTitle('Team name: Evo Dev Team')
                    .addField('Nationality', 'British')
                    .addField('Captains Discord', "@Dicta.Evo#4977") 
                    .addField('Captains Uplay', 'Dicta.Evo')
                    .setColor(0x6968A5)
                    message.channel.sendEmbed(edt);
                    const wp = new  Discord.RichEmbed()
                    .setTitle('Team name: Wasted Potential')
                    .addField('Nationality', 'British')
                    .addField('Captains Discord', "Mufn#4779") 
                    .addField('Captains Uplay', 'Mufn.WP')
                    .setColor(0x364F36)
                    message.channel.sendEmbed(wp);
                    const ae = new  Discord.RichEmbed()
                    .setTitle('Team name: Affinity eSports')
                    .addField('Nationality', 'Europe')
                   .addField('Captains Discord', "MrBrown#4682") 
                    .addField('Captains Uplay', 'MrBrown.AFF')
                    .setColor(0xF5CBA7)
                    message.channel.sendEmbed(ae);
                    const tf = new Discord.RichEmbed()
                    .setTitle('Team name: FeaR')
                    .addField('Nationality', 'Europe')
                    .addField('Captains Discord', '@PjotterSmokes#8310 ')
                    .addField('Captains Uplay', 'Pjotter.FeaR')
                    .setColor(0xD2B4DE)
                    message.channel.sendEmbed(tf);
  	}
})

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
