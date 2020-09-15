const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`[로그] 봇이 켜졌습니다.`);
});

client.on('message', msg => {
  if (msg.content === '명령어') {
    msg.reply('명령어 반응 메시지');
  }
});

client.login('NzMyOTY1MTE2NTIxMjE4MTM0.Xw8Q9Q.WvCRU1R88f5_jS5jfr2SN6Bbn-s');